const { ChainId } = require('caip');

class ArweaveValidator {
  constructor(chainId) {
    // Validate and initialize the arweave Chain ID
    this.chainId = new ChainId(chainId, 'arweave');
  }

  toString() {
    return this.chainId.toString();
  }

  toJSON() {
    return this.chainId.toJSON();
  }

  validate() {
    const regex = /^arweave:[a-zA-Z0-9_-]+$/;
    return regex.test(this.accountAddress);
  }
}

module.exports = ArweaveValidator;