import axios from "axios";

export function sendSMS(phone, code) {
  const message_text = `YourPriceBooking: ${code}`;
  phone = phone.slice(1, phone.length);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let url = "/message/send.json?token=5db94597f7696e13469bd65b61604fba6d65d1b3";
  if (process.env.NODE_ENV === "production") {
    url = "https://api.turbosms.ua" + url;
  }

  return axios.post(
    url,
    {
      recipients: [phone],
      sms: {
        sender: "BRAND",
        text: message_text,
      },
    },
    myHeaders
  );
}
