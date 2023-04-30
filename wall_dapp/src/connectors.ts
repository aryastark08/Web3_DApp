import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

// Use the appropriate chain ID for your network
const CHAIN_ID = 1;

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { [CHAIN_ID]: "<RPC_ENDPOINT>" },
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
//   pollingInterval: 15000,
});
