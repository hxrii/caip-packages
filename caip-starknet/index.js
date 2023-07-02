class CaipStarkNet {
    constructor(accountAddress) {
      // Validate and initialize the StarkNet account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^starknet:[a-zA-Z0-9]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipStarkNet;
  