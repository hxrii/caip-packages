class CaipTezos {
    constructor(chainId) {
      // Validate and initialize the Tezos Chain ID
      this.chainId = new ChainId(chainId, 'tezos');
    }
  
    toString() {
      return this.chainId.toString();
    }
  
    toJSON() {
      return this.chainId.toJSON();
    }
  
    validate() {
      const regex = /^tezos:[a-zA-Z0-9]+$/;
      return regex.test(this.chainId);
    }
  }
  
  module.exports = CaipTezos;
  