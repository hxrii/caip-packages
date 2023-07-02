class CaipXRPL {
    constructor(chainId) {
      // Validate and initialize the XRPL Chain ID
      this.chainId = new ChainId(chainId, 'xrpl');
    }
  
    toString() {
      return this.chainId.toString();
    }
  
    toJSON() {
      return this.chainId.toJSON();
    }
  
    validate() {
      const regex = /^xrpl:[a-zA-Z0-9]+$/;
      return regex.test(this.chainId);
    }
  }
  
  module.exports = CaipXRPL;
  