import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const CONTRACT_ADDRESS = "0x42030753485225a4B922a9607911b20b2B754F3c";

  return (
    <div>
      <ConnectWallet accentColor="#f213a4" colorMode="light" />
      <br></br>
      <h2>Claim your Scavenger Hunt Participant NFT to start playing</h2>
      <Web3Button
        // The contract address
        contractAddress={CONTRACT_ADDRESS}
        // Access the contract itself, perform any action you want on it:
        action={async (contract) => {
          contract.call("claim", address, 0, 1);
        }}
        // Some customization of colors and styling
        colorMode="light"
        accentColor="#F213A4"
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
        action={(contract) => {
          contract.call("foundTreasure", address);
        }}
        // Some customization of colors and styling
        colorMode="light"
        accentColor="#F213A4"
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
        action={(contract) => {
          contract.call("claim", address, 1, 1);
        }}
        // Some customization of colors and styling
        colorMode="light"
        accentColor="#F213A4"
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
