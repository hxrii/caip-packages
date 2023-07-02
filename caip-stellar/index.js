class CaipStellar {
    constructor(accountAddress) {
      // Validate and initialize the Stellar account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^stellar:[a-zA-Z0-9]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipStellar;
  