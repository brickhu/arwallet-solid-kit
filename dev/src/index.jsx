/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import { WalletProvider, WanderStrategy,OthentStrategy,WebWalletStrategy,BrowserWalletStrategy } from 'src'
import AoSyncStrategy from "@vela-ventures/aosync-strategy";


const root = document.getElementById('root')

render(() => <WalletProvider config={{
  permissions: [
    "ACCESS_ADDRESS",
    "ACCESS_PUBLIC_KEY",
    "SIGN_TRANSACTION",
    "DISPATCH",
  ],
  appInfo : {
    
  },
  ensurePermissions: true,
  strategies: [
    new BrowserWalletStrategy(),
    new WanderStrategy(),
    new OthentStrategy(),
    new WebWalletStrategy(),
    new AoSyncStrategy()
  ],
}}><App /></WalletProvider>, root)
