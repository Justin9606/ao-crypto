import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../abi/contractAbi.json";

export function Step2({ address }) {
  const [claimedKeys, setClaimedKeys] = useState([]);
  const contractAddress = "0x01B620e6BA56D0C66ED64fC6667C67a6E538D50f";

  useEffect(() => {
    async function fetchClaimedKeys() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const keys = await contract.claimedKeys();
      setClaimedKeys(keys);
    }
    fetchClaimedKeys();
  }, [address]);

  const claimKey = async () => {
    const response = await fetch("/api/get-signature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });
    const { signature } = await response.json();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.claimKey(signature);
    const keys = await contract.claimedKeys();
    setClaimedKeys(keys);
  };

  return (
    <div>
      <h2>Step 2: Claim Keys</h2>
      <h3>Available Keys:</h3>
      <p>Key 1, Key 2, Key 3</p>
      <h3>Claimed Keys:</h3>
      <ul>
        {claimedKeys.map((key, index) => (
          <li key={index}>
            <img src={key.tokenURI} alt={`Key ${index}`} />
            <p>Claimed At: {new Date(key.claimedAt * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <button onClick={claimKey}>Claim Key</button>
    </div>
  );
}
