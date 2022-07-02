require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: `${process.env.MUMBAI_ALCHEMY_URL}`,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY}`],
    },
   
  },
  etherscan: {
    apiKey: {
      polygonMumbai:`${process.env.MUMBAI_ETHERSCAN_KEY}`
    },
  }
};