import { WalletConnection } from "./WalletConnection";
import Image from "next/image";
import bgImage from "../assets/1.png";

export function Step1({ onConnected }) {
  return (
    <div>
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <h2>Step 1: Connect your wallet</h2>

      <WalletConnection onConnected={onConnected} />
    </div>
  );
}
