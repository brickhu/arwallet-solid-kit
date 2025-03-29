import { createEffect, createSignal, Show } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useWallet } from '../../src'

function App() {
  const {connected, address, showConnector, wallet, disconnect,connecting} = useWallet()



  return (
    <>
      <div>
        <div>AR Solidjs</div>
        <button disabled={connected()||connecting()} onClick={showConnector}><Show when={!connecting()} fallback="connecting...">{address()||"connect"}</Show></button>
        <Show when={connected()}>
          <button onClick={()=>{console.log(wallet())}}>message</button>
        </Show>
        <Show when={connected()&&address()&&!connecting()}>
          <button onClick={disconnect}>disconnect</button>
        </Show>
      </div>
    </>
  )
}

export default App
