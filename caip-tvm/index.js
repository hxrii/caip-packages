class CaipTVM {
    constructor(chainId) {
      // Validate and initialize the TVM Chain ID
      this.chainId = new ChainId(chainId, 'tvm');
    }
  
    toString() {
      return this.chainId.toString();
    }
  
    toJSON() {
      return this.chainId.toJSON();
    }
  
    validate() {
      const regex = /^tvm:[a-zA-Z0-9]+$/;
      return regex.test(this.chainId);
    }
  }
  
  module.exports = CaipTVM;
  