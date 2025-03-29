
import BrowserWalletStrategy from "@arweave-wallet-kit/browser-wallet-strategy";
import { ArweaveWebWallet } from "arweave-wallet-connector";
const defaultConfig = {
  name: "Arweave.app",
  description: "Web based wallet software",
  theme: "24, 24, 24",
  logo: "qVms-k8Ox-eKFJN5QFvrPQvT9ryqQXaFcYbr-fJbgLY",
  url: "arweave.app",
  customInterfaceURL: "https://arweave.app"
};

export default class WebWalletStrategy extends BrowserWalletStrategy {
  id = "webwallet";
  name = defaultConfig.name;
  description = defaultConfig.description;
  theme = defaultConfig.theme;
  logo = defaultConfig.logo;
  url = defaultConfig.customInterfaceURL;

  instance = new ArweaveWebWallet();
  instanceURL = defaultConfig.url;

  constructor(config) {
    super();

    if (config) {
      this.name = config.name;
      this.description = config.description;
      this.theme = config.theme || defaultConfig.theme;
      this.logo = config.logo || defaultConfig.logo;
      this.instanceURL = config.url;
      this.url = config.customInterfaceURL || `http://${config.url}`;
    }

    this.instance.setUrl(this.instanceURL);

    if (this.instanceURL !== defaultConfig.url) {
      this.id = `${this.id}${this.instanceURL}`;
    }
  }

  async isAvailable() {
    return true;
  }

  async resumeSession() {
    this.instance.setUrl(this.instanceURL);
    await this.instance.connect();
  }

  async connect(permissions, appInfo, gateway) {
    if (gateway) {
      console.warn(
        "[Arweave Wallet Kit] The WebWallets API does not support custom gateway connection yet."
      );
    }

    this.instance = new ArweaveWebWallet(appInfo);
    await this.resumeSession();
  }

  addAddressEvent(listener) {
    this.instance.on("connect", listener);
    return listener;
  }

  removeAddressEvent(listener) {
    this.instance.off("connect", listener);
  }
}