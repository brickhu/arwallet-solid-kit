/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import { WalletProvider,BrowserWalletStrategy,WAuthStrategy,WAuthProviders } from 'src'
// import AoSyncStrategy from "@vela-ventures/aosync-strategy";


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
    new WAuthStrategy({ provider: WAuthProviders.Github }),
    new WAuthStrategy({ provider: WAuthProviders.Discord }),
    new WAuthStrategy({ provider: WAuthProviders.Google }),
  ],
}}><App /></WalletProvider>, root)
