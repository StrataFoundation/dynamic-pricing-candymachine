import { NextPage } from "next";
import Home from "../src/Home";
import * as anchor from "@project-serum/anchor";

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.NEXT_PUBLIC_CANDY_MACHINE_ID!
    );

    return candyMachineId;
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;

const txTimeoutInMilliseconds = 30000;

export const HomePage: NextPage = () => {
  return (
    <Home
      candyMachineId={candyMachineId}
      txTimeout={txTimeoutInMilliseconds}
      rpcHost={rpcHost}
    />
  );
};

export default HomePage;
