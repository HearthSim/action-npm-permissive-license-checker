# action-npm-permissive-license-checker

Checks the licenses of all NPM packages using [license-checker](https://www.npmjs.com/package/license-checker).

## Parameters

###  `exclude-private-packages` **(optional, defaults to "false")**

Whether private packages should be excluded.

### `production-only` **(optional, defaults to "false")**

Whether to only check production dependencies.

## Example

```yml
  licenses:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '12'
      - run: npm install
      - name: Check licenses
        uses: hearthsim/action-npm-permissive-license-checker@v1
        with:
          production-only: true
          exclude-private-packages: true
```
