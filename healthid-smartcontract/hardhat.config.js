require("@nomiclabs/hardhat-ethers");

const mnemonic = "test test test test test test test test test test test test"
const accounts = {
  mnemonic
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks : {
    zeniq: {
      url: "https://smart1.zeniq.network:9545",
      accounts
    }
  }
};
