class CaipFIL {
    constructor(accountAddress) {
      // Validate and initialize the Filecoin account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^fil:[a-zA-Z0-9_-]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipFIL;
  