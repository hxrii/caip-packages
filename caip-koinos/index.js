class CaipKoinos {
    constructor(accountAddress) {
      // Validate and initialize the Koinos account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^koinos:[a-zA-Z0-9_-]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipKoinos;
  