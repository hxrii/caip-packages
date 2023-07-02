const { ChainId } = require('caip');

class CaipEIP155 {
  constructor(chainId) {
    // Validate and initialize the EIP-155 Chain ID
    this.chainId = new ChainId(chainId, 'eip155');
  }

  toString() {
    return this.chainId.toString();
  }

  toJSON() {
    return this.chainId.toJSON();
  }

  validate() {
    const regex = /^eip155:[1-9][0-9]*$/;
    return regex.test(this.chainId);
  }
}

module.exports = CaipEIP155;
