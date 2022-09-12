import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  return (
    <div>
      <ConnectWallet accentColor="#f213a4" colorMode="light" />
      <br></br>
      <Web3Button
        // The contract address
        contractAddress="0xC8642A0c05052Cefe3208A5F697915cF8EAd90E7"
        // Access the contract itself, perform any action you want on it:
        action={(contract) => {
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
      <Web3Button
        // The contract address
        contractAddress="0xC8642A0c05052Cefe3208A5F697915cF8EAd90E7"
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
        Found the Treasure
      </Web3Button>
    </div>
  );
}
