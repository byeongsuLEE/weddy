const MyNFT = artifacts.require("MyNFT");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(MyNFT);  // 매개변수 없이 배포
};
