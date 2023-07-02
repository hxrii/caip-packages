class CaipBIP122 {
    constructor(bitcoinAddress) {
      // Validate and initialize the BIP-122 Bitcoin address
      this.bitcoinAddress = bitcoinAddress;
    }
  
    toString() {
      return this.bitcoinAddress.toString();
    }
  
    toJSON() {
      return this.bitcoinAddress.toJSON();
    }
  
    validate() {
      const regex = /^bip122:[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
      return regex.test(this.bitcoinAddress);
    }
  }
  
  module.exports = CaipBIP122;