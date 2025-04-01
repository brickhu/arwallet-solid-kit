import { createEffect, createSignal, Show } from 'solid-js'

import './App.css'
import { useWallet } from '../../src'
import {
  result,
  results,
  message,
  spawn,
  monitor,
  unmonitor,
  dryrun,
  createDataItemSigner
} from "@permaweb/aoconnect";


function App() {
  const {connected, address, showConnector, wallet, disconnect,connecting,sdk} = useWallet()

  const testSendMessage = ()=>{
    message({
      process: "KCAqEdXfGoWZNhtgPRIL0yGgWlCDUl0gvHu8dnE5EJs",
      tags : [
        { name:"Action", value:"Transfer" },
        { name:"Recipient", value:"nFKrYAy9m3SZ1PVhuL7ziCzPrdlNUApdEpk3jsOS4l8" },
        { name:"Quantity",value:"1"}
      ],
      signer: createDataItemSigner(wallet())
    })
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
  }

  return (
    <>
      <div>
        <div>AR Solidjs</div>
        <button disabled={connected()||connecting()} onClick={showConnector}><Show when={!connecting()} fallback="connecting...">{address()||"connect"}</Show></button>
        <Show when={connected()}>
          <button onClick={testSendMessage}>message</button>
        </Show>
        <Show when={connected()&&address()&&!connecting()}>
          <button onClick={disconnect}>disconnect</button>
        </Show>
      </div>
    </>
  )
}

export default App
