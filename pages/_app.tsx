import "../src/bufferFill";
import { Providers } from "@strata-foundation/marketplace-ui";
import { AppProps } from "next/app";
import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserView, MobileView } from "react-device-detect";

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;

require("../styles/globals.css");
require("react-circular-progressbar/dist/styles.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers cluster={rpcHost}>
      <Component {...pageProps} />
      <BrowserView>
        <Toaster
          position="bottom-left"
          containerStyle={{
            width: "420px",
          }}
        />
      </BrowserView>
      <MobileView>
        <Toaster
          position="bottom-center"
          containerStyle={{
            margin: "0 auto",
            width: "90%",
            maxWidth: "420px",
          }}
        />
      </MobileView>
    </Providers>
  );
};

export default App;
