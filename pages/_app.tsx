import "../src/bufferFill";
import { Providers } from "@strata-foundation/marketplace-ui";
import { AppProps } from "next/app";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;

require("../styles/globals.css");
require("react-circular-progressbar/dist/styles.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers cluster={rpcHost}>
      <Component {...pageProps} />
      <Toaster
        position="bottom-left"
        containerStyle={{
          width: "420px",
        }}
      />
    </Providers>
  );
};

export default App;
