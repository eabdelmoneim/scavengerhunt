import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const CONTRACT_ADDRESS = "0xD2A62504beC93F8E9bc34a5D34D34c2A959b0243";

  return (
    <div>
      <ConnectWallet />
      <br></br>
      <h2>Claim your Scavenger Hunt Participant NFT to start playing</h2>

      <Web3Button
        // The contract address
        contractAddress={CONTRACT_ADDRESS}
        // Access the contract itself, perform any action you want on it:
        action={async (contract) => {
          await contract.erc1155.claim(0, 1);
          alert(address + " successfully claimed participant NFT!!!");
        }}
        // If the function is successful, we can do something here.
        onSuccess={(result) => console.log(result)}
        // If the function fails, we can do something here.
        onError={(error) => console.error(error)}
      >
        Get Participant NFT
      </Web3Button>

      <br></br>
      <h2>Come here if you find the treasure</h2>
      <Web3Button
        // The contract address
        contractAddress={CONTRACT_ADDRESS}
        // Access the contract itself, perform any action you want on it:
        action={async (contract) => {
          await contract.call("foundTreasure", address);
          alert(address + " has found the treasure");
        }}
        // If the function is successful, we can do something here.
        onSuccess={(result) => console.log(result)}
        // If the function fails, we can do something here.
        onError={(error) => console.error(error)}
      >
        Found the First Treasure
      </Web3Button>
      <br></br>
      <h2>Claim your prize</h2>
      <Web3Button
        // The contract address
        contractAddress={CONTRACT_ADDRESS}
        // Access the contract itself, perform any action you want on it:
        action={async (contract) => {
          await contract.erc1155.claim(1, 1);
          alert(address + " has claimed the prize!!!");
        }}
        // If the function is successful, we can do something here.
        onSuccess={(result) => console.log(result)}
        // If the function fails, we can do something here.
        onError={(error) => console.error(error)}
      >
        Get Scavenger Hunt Finished NFT
      </Web3Button>
    </div>
  );
}
