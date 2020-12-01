const IpfsHttpClient = require("ipfs-http-client");
const CID = require("cids")


export const ipfsC = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

export function toBase32(value) {
  var cid = new CID(value);
  return cid.toV1().toBaseEncodedString("base32");
}
