# CAIP Packages

This mono-repo contains packages for validating CAIP (Chain Agnostic Improvement Proposals) URNs in different blockchain development environments.

## Packages

- [caip-eip155](./caip-eip155/index.js) - Package for validating EIP-155 CAIP URNs.
- [caip-hedera](./caip-hedera/index.js) - Package for validating Hedera Hashgraph CAIP URNs.
- [caip-arweave](./caip-arweave/index.js) - Package for validating Arweave CAIP URNs.
- [caip-bip122](./caip-bip122/index.js) - Package for validating BIP-122 CAIP URNs.
- [caip-polkadot](./caip-polkadot/index.js) - Package for validating Polkadot CAIP URNs.
- [caip-monero](./caip-monero/index.js) - Package for validating Monero CAIP URNs.
- [caip-koinos](./caip-koinos/index.js) - Package for validating Koinos CAIP URNs.
- [caip-fil](./caip-fil/index.js) - Package for validating Filecoin CAIP URNs.
- [caip-cosmos](./caip-cosmos/index.js) - Package for validating Cosmos CAIP URNs.
- [caip-bip122](./caip-bip122/index.js) - Package for validating BIP-122 CAIP URNs.
- [caip-solana](./caip-solana/index.js) - Package for validating Solana CAIP URNs.
- [caip-stacks](./caip-solana/index.js) - Package for validating Stacks CAIP URNs.
- [caip-starknet](./caip-starknet/index.js) - Package for validating StarkNet CAIP URNs.
- [caip-stellar](./caip-stellar/index.js) - Package for validating Stellar CAIP URNs.
- [caip-tezos](./caip-tezos/index.js) - Package for validating Tezos CAIP URNs.
- [caip-tvm](./caip-tvm/index.js) - Package for validating TVM CAIP URNs.
- [caip-waves](./caip-waves/index.js) - Package for validating Waves CAIP URNs.
- [caip-xrpl](./caip-xrpl) - Package for validating XRPL CAIP URNs.

## Adding more namespaces

To add more namespaces as separate packages, follow these steps:

1. Create a new directory for the package inside the repository.
2. Implement the necessary functionality to validate CAIP URNs specific to the namespace.
3. Package and publish the package on NPM.
4. Update the README file with information about the new package.

Contributions are welcome! Please submit a pull request if you want to add support for a new namespace.

## License

This repository is licensed under the MIT License.
