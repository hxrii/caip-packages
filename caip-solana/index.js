class CaipSolana {
    constructor(accountAddress) {
      // Validate and initialize the Solana account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^solana:[a-zA-Z0-9]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipSolana;
  