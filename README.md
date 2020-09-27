# criptic-alpha

Node package to encrypt and decrypt a message using secret text.
Created as a sample project to register the package in npm registry.

## importing package to your node file

```
const { encrypt, decrypt } = require('criptic-alpha');
```

## Functions in the package

### encrypt

- Accepts a text as input
- Returns a json which contains to hex values

**usage**

```
const hash = encrypt('This is awesome');
```

### decrypt

- Accepts the hex values json that returned from encrypt function.
- Returns the original text as output.

**usage**

```
const text = decrypt(hash);
```

### encryptMono

- Accepts a text as input
- Returns a string which contains hex value separated by '-'

**usage**

```
const hash = encryptMono('This is awesome');
```

### decryptMono

- Accepts the hex values that returned from encryptMono function.
- Returns the original text as output.

**usage**

```
const text = decryptMono(hash);
```