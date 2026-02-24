import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig } = createNetworkConfig({
  devnet: {
    network: "devnet",
    url: "https://fullnode.devnet.sui.io:443",
  },
  testnet: {
    network: "testnet",
    url: "https://fullnode.testnet.sui.io:443",
  },
  mainnet: {
    network: "mainnet",
    url: "https://fullnode.mainnet.sui.io:443",
  },
});

export { networkConfig };
