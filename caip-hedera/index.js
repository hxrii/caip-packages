class CaipHedera {
    constructor(accountAddress) {
      // Validate and initialize the Hedera account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^hedera:0x[a-fA-F0-9]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipHedera;
  