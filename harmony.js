const Web3 = require('web3');

// Set up the Web3 provider
const web3 = new Web3('<Harmony_RPC_URL>');

// Example function to interact with the Harmony blockchain
async function getLatestBlock() {
  try {
    const latestBlock = await web3.eth.getBlockNumber();
    console.log('Latest Block:', latestBlock);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the example function
getLatestBlock();
