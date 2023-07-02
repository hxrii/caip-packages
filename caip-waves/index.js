class CaipWaves {
    constructor(chainId) {
      // Validate and initialize the Waves Chain ID
      this.chainId = new ChainId(chainId, 'waves');
    }
  
    toString() {
      return this.chainId.toString();
    }
  
    toJSON() {
      return this.chainId.toJSON();
    }
  
    validate() {
      const regex = /^waves:[a-zA-Z0-9]+$/;
      return regex.test(this.chainId);
    }
  }
  
  module.exports = CaipWaves;
  