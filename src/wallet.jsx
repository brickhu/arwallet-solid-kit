import { createSignal, createContext, useContext, onMount, onCleanup,For, createMemo, createEffect, Switch, Match, Show } from "solid-js";
import styles from "./wallet.module.css";
import { getStrategy,saveStrategy,syncStrategies } from "@arweave-wallet-kit/core/strategy";
import { removeStrategy } from "./core/strategy";
import { message } from "@permaweb/aoconnect";

const WalletContext = createContext();
const Spiner = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity={0.25}></path><path fill="currentColor" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="1.612s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>

export function WalletProvider(props) {
  let _eventlistener = null
  const permissions = () => props?.config?.permissions || ["ACCESS_ADDRESS","SIGN_TRANSACTION"]
  const strategies = () => props?.config?.strategies || null
  const gateway = () => props?.config?.gatewayConfig || {
    host: "arweave.net",
    port: 443,
    protocol: "https"
  }
  const appInfo = () =>props?.config?.appInfo || {
    name : window.location.hostname,
    logo : null
  }
  const [connected, setConnected] = createSignal(false);
  const [address, setAddress] = createSignal();
  const [visible, setVisible] = createSignal(false);
  const [connecting,setConnecting] = createSignal(false)
  const [activeStrategy,setActiveStrategy] = createSignal()
  const [connectingInfo,setConnectingInfo] = createSignal()
  const [strategyAvailable,setStrategyAvailable] = createSignal(true)
  const wallet = ()=>getStrategy(activeStrategy(),strategies())
  const gateway_url = createMemo(()=>`${gateway()?.protocol}://${gateway()?.host}`)

  

  onMount(() => {
    setVisible(false);
    setConnecting(false)
    syncStrategies(strategies(),permissions(),props?.config?.ensurePermissions)
    .then(s=>{
      if(s){
        s.getActiveAddress()
        .then(address=>{
          if(address){
            setActiveStrategy(s.id)
            setAddress(address)
            setConnected(true)
          }
        })
        .catch(err=>{throw(err)})
      }
    })
    .catch(error=>{
      console.log("自动链接错误",error)
    })
    .finally(()=>setConnecting(false))
  });

  onCleanup(() => {
    setVisible(false);
    setConnecting(false)
    if(_eventlistener != null){
      wallet()?.removeAddressEvent(_eventlistener)
    }
  });

  function handleWalletChange(address) {
    console.log("wallet changed : ",address)
    setAddress(address)
    setConnected(address?true:false)
  }

  createEffect(()=>{
    if(connected()){
      console.log("add address event",wallet())
      _eventlistener = wallet()?.addAddressEvent(handleWalletChange)
      console.log("listener",_eventlistener)
    }
  })

  async function disconnect() {
    if (!wallet() || !connected() || connecting()) {
      throw new Error("[Arweave Wallet Kit] Not yet connected");
    }
    try {
      await wallet()?.disconnect()
      removeStrategy(activeStrategy()||wallet()?.id)
      setActiveStrategy(null)
      setConnected(false)
      setAddress(null)
      if(_eventlistener){wallet()?.removeAddressEvent(_eventlistener)}
      return Promise.resolve()
    } catch (error) {
      throw new Error(
        "[Arweave Wallet Kit] Could not disconnect\n" + (e?.message || e)
      );
    }
  }

  async function tryConnecting(s) {
    if(!s) return
    setConnectingInfo({
      name : s.name,
      logo : s.logo,
      url : s.url,
    })
    setConnecting(true)
    setStrategyAvailable(true)
    try {
      const available = await s.isAvailable()
      
      if(available){
        await s.connect(
          permissions(), 
          appInfo(), 
          gateway()
        )
        const address = await s.getActiveAddress()
        if(address) {
         setAddress(address)
          setConnected(true)
          saveStrategy(s.id);
          setActiveStrategy(s.id)
          setVisible(false)
          setConnecting(false);
          setConnectingInfo(null)
        }else{
          const error = new Error(`Connecting ${s.name} faild.`)
          error.code = "FAILD"
          throw error
        }
      }else{
        const error = new Error(`Not installed ${s.name}.`)
        error.code = "UNINSTALL"
        throw error
      }
      

    } catch(err) {
      if(err.code == "UNINSTALL"){
        setStrategyAvailable(false)
      }
    }
    setConnecting(false);
    setConnectingInfo(null)
   
  }

  

  const Connector = props => {
    return(
      <div class={styles.outter} id="solid-arwallet-connector" style={{ visibility: `${visible() ? "visible" : "hidden"}` }}>
          <div
            class={styles.container}
            style={{
              translate: `${visible() ? "0% 0%" : "0% 50%"}`,
              opacity: `${visible() ? "100" : "0"}`,
            }}
          >
            <div className={styles.content}>
              <div class={styles.head}>
                <h3>{connecting()?<span style={{display : "inline-flex" , "align-items" : "center", gap: "0.5em"}}><span>Connecting...</span></span>:"Connect to a wallet"}</h3>
                <Show 
                  when={!connecting()}
                  fallback={strategyAvailable()?<Spiner/>:<button onClick={()=>{setConnecting(false)}}>Back</button>}
                >
                  <button disabled={connecting()} onClick={() => setVisible(false)} style={{background : "transparent",  padding: "0" , display: "flex", "justify-content" : "center" , "align-items" : "center" , }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path style={{"fill":"currentcolor"}} d="m7.05 5.636l4.95 4.95l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95z"></path></svg>
                  </button>
                </Show>
                
                
              </div>
              <Switch>
                <Match when={!connecting()}>
                  <div class={styles.main} style={{"display":"flex","flex-direction":"column","gap":"1em"}}>
                    <For each={strategies()} fallback={<div>no strategies</div>}>
                      {s=>{
                        return (
                          <button 
                            class={styles.btn}
                            disabled={connecting()}
                            onClick={()=>{
                              tryConnecting(s)
                            }}
                            style={{"display":"flex", "justify-content" : "space-between", "align-items" : "center"}}
                          >
                            <span>{s.name}</span>
                            <img src={`${gateway_url()}/${s.logo}`} style={{width: "1em", height: "1em"}} />
                          </button>
                        )
                      }}
                    </For>
                  </div>
                </Match>
                <Match when={connecting()}>
                  <div class={styles.main} style={{"display":"flex","flex-direction":"column","gap":"1em"}}>
                    <div style={{display: "flex", "flex-direction" : "column" , width :"100%", "justify-content" : "center", "align-items" : "center",gap: "0.5em" }}>
                      <img src={`${gateway_url()}/${connectingInfo()?.logo}`} style={{width: "4em", height: "4em"}} />
                      <div>{connectingInfo()?.name}</div>
                      <div style={{'font-size' : "0.8em", opacity :0.6  , "text-align" : "center"}}>{strategyAvailable()?"Confirm connection request in the wallet popup window":`Not installed ${connectingInfo()?.name} `}</div> 
                    </div>
                    <Show when={!strategyAvailable()}>
                      <button role="link" class={styles.btn}>Install {connectingInfo()?.name}</button>
                    </Show>
                    {/* <button class={styles.btn}>cancel</button> */}
                  </div>
                </Match>
              </Switch>
              <div class={styles.foot}>Don't have a wallet? <a href="https://arwiki.wiki/#/en/wallets" target="_blank">Get a new</a></div>
            </div>
          </div>
          <div class={styles.backdrop} style={{ opacity: `${visible() ? "100" : "0"}` }}></div>
        </div>
    )
  }

  const hooks = {
    connected ,
    connecting,
    address,
    showConnector: () => {
      if(connected()){
        console.log("[Arweave Wallet Kit] Already connected")
        return
      }
      if(connecting()){
        return
      }
      setAddress(null)
      setActiveStrategy(null)
      setVisible(true)
    },
    wallet,
    disconnect
  };

  return (
    <WalletContext.Provider value={hooks}>
      {props.children}
      <Connector/>
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}