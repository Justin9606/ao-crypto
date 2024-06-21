import { useState } from "react";
import { Step1 } from "../components/Step1";
import { Step2 } from "../components/Step2";

export default function Home() {
  const [address, setAddress] = useState(null);

  return (
    <div>
      {!address ? (
        <Step1 onConnected={setAddress} />
      ) : (
        <Step2 address={address} />
      )}
    </div>
  );
}
