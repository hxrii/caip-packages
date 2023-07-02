# CAIP Packages

This mono-repo contains packages for validating CAIP URNs in different blockchain development environments.

## Packages

- [caip-eip155](./caip-eip155) - Package for validating EIP-155 CAIP URNs.
- [caip-hedera](./caip-hedera) - Package for validating Hedera Hashgraph CAIP URNs.

## Adding more namespaces

To add more namespaces as separate packages, follow these steps:

1. Create a new directory for the package inside the repository.
2. Implement the necessary functionality to validate CAIP URNs specific to the namespace.
3. Package and publish the package on NPM.
4. Update the README file with information about the new package.

Contributions are welcome! Please submit a pull request if you want to add support for a new namespace.

## License

This repository is licensed under the MIT License.
