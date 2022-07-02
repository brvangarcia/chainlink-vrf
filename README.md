# Chainlink VRF 

This is a tutorial from learnweb3.io using Hardhat, Chainlink and the Mumbai testnet

Contract deployed to: ```0x1fFab57041BDaA84B2Df1Ee875A5B713230F146e```

To use this template, follow these steps:

```
clone repo
create .env from .env.example
yarn
```

To deploy this contract use:

```
npx hardhat run scripts/deploy.js --network NETWORK_NAME
```

To verify smart contract use: 

```
npx hardhat verify --network rinkeby CONTRACT_ADDRESS --constructor-args arguments.js 
```
