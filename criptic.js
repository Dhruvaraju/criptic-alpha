const crypto = require("crypto");

const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = crypto.randomBytes(16);

/**
 * Takes input as string and generates a json as hash
 * @param {*} text
 */
const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

/**
 * Takes input as string and generates hash as string
 * @param {*} text
 */
const encryptMono = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return iv.toString("hex") + "-" + encrypted.toString("hex");
};

/**
 * Takes a single encrypted string output of encrypt mon as input and return string value of the hash
 * @param {*} hash 
 */
const decryptMono = (hash) => {
  let hashDetails = hash.split("-");
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hashDetails[0], "hex")
  );
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hashDetails[1], "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

/**
 * Takes hash returned from encrypt and converts to string
 * @param {*} hash 
 */
const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

module.exports = {
  encrypt,
  decrypt,
  encryptMono,
  decryptMono,
};
