var SAFEEngine = artifacts.require('SAFEEngine.sol');

module.exports = function (deployer) {
    deployer.deploy(SAFEEngine);
};