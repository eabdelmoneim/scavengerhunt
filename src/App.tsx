import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractEvents,
  Web3Button,
} from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const CONTRACT_ADDRESS = "0xdcBD8c000b9c945C1b80f649B95bAfA214B6576D";
  const { contract } = useContract(CONTRACT_ADDRESS);

  const events = useContractEvents(contract);
  const myEvents = events.data
    ?.filter((event) => event.eventName === "TreasureFound")
    .slice(0, 20);

  return (
    <div style={{ width: 500 }}>
      <ConnectWallet />
      <br></br>
      <h2>Claim a Scavenger Hunt Participant NFT</h2>
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
      <h2>Scavenger Hunt</h2>
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
        Get Scavenger Hunt Prize NFT
      </Web3Button>
      <h2>Game Events</h2>
      {myEvents && myEvents?.length > 0
        ? myEvents?.map((event) => {
            if (event.eventName === "TreasureFound") {
              return (
                <h4
                  key={`${event.transaction.transactionHash}_${event.transaction.logIndex}`}
                  style={{ color: "grey" }}
                >
                  🎉{((" " + event.data.account) as string) + " won prize"}
                </h4>
              );
            }
          })
        : "no events yet"}
    </div>
  );
}
