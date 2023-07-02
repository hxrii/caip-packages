class CaipStacks {
    constructor(accountAddress) {
      // Validate and initialize the Stacks account address
      this.accountAddress = accountAddress;
    }
  
    toString() {
      return this.accountAddress.toString();
    }
  
    toJSON() {
      return this.accountAddress.toJSON();
    }
  
    validate() {
      const regex = /^stacks:[a-zA-Z0-9]+$/;
      return regex.test(this.accountAddress);
    }
  }
  
  module.exports = CaipStacks;
  