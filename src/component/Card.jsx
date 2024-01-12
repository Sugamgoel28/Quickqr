import QRCode from "qrcode";
import DummyQR from "../assets/qr-code.png";
import { useState } from "react";

export default function Card({ cardHeading, cardSubtext }) {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 400,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="flex flex-col items-center p-2 m-5 bg-blue-200 border-black font-titilliumWeb rounded-3xl w-96 drop-shadow-lg">
      <h1 className="p-4 text-3xl font-extrabold text-center ">
        {cardHeading}
      </h1>
      <h2 className="text-center text-l">{cardSubtext}</h2>
      <h6 className="mt-4 ml-[-160px] mb-[-10px] text-sm text-left">
        Website (URL):
      </h6>
      <form id="generate-form" className="flex">
        <input
          type="url"
          name="name"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://QuickQR.com"
          className="w-64 p-1 m-3 italic bg-transparent border-2 border-blue-500 rounded-md"
          required
        />
        <button type="submit" onClick={GenerateQRCode}>
          <img
            className="w-6 hover:w-7"
            src="https://img.icons8.com/material-rounded/24/download--v1.png"
            alt="download--v1"
          />
        </button>
      </form>
      {qr && (
        <>
          <img src={qr} className="opacity-50 w-52"/>
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
      <img src={DummyQR} alt="QR" className="opacity-50 w-52" />
    </div>
  );
}
