class CaipCosmos {
    constructor(accountAddress) {
      // Validate and initialize the Cosmos account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^cosmos:[a-zA-Z0-9_-]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipCosmos;
  