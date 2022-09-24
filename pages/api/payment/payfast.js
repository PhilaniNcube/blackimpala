// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const crypto = require("crypto");

export default async function handler(
  req,
  res
) {

  const generateSignature = (data, passPhrase = null) => {
  // Create parameter string
  let pfOutput = "";
  for (let key in data) {
    if(data.hasOwnProperty(key)){
      if (data[key] !== "") {
        pfOutput +=`${key}=${encodeURIComponent(data[key].trim()).replace(/%20/g, "+")}&`
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  if (passPhrase !== null) {
    getString +=`&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
};

  const {id, email, order_total, first_name, last_name, phone_number, order_shipping} = req.body

const myData = [];
// Merchant details
myData["merchant_id"] = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID;
myData["merchant_key"] = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID;
myData["return_url"] = process.env.NEXT_PUBLIC_RETURN_URL;
myData["cancel_url"] = process.env.NEXT_PUBLIC_CANCEL_URL;
myData["notify_url"] = process.env.NEXT_PUBLIC_NOTIFY_URL;
// Buyer details
myData["name_first"] = first_name;
myData["name_last"] = last_name;;
myData["email_address"] = email;
// Transaction details
myData["m_payment_id"] = id;
myData["amount"] = (order_total + order_shipping).toFixed(2);
myData["item_name"] = id;


const myPassphrase = process.env.PAYFAST_PASS_PHRASE;
let signature = generateSignature(myData, myPassphrase);

console.log({signature});


res.status(200).json({ data: signature });
}
