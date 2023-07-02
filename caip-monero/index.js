class CaipMonero {
    constructor(accountAddress) {
      // Validate and initialize the Monero account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^monero:[a-zA-Z0-9]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipMonero;
  