import React from "react";
import './modal.scss';

export default function Currency() {
  const currencies = [
    { currency: "Indian rupee", codeSymbol: "INR – ₹" },
    { currency: "Australian dollar", codeSymbol: "AUD – $" },
    { currency: "Brazilian real", codeSymbol: "BRL – R$" },
    { currency: "Bulgarian lev", codeSymbol: "BGN – лв." },
    { currency: "Canadian dollar", codeSymbol: "CAD – $" },
    { currency: "Chilean peso", codeSymbol: "CLP – $" },
    { currency: "Chinese yuan", codeSymbol: "CNY – ￥" },
    { currency: "Colombian peso", codeSymbol: "COP – $" },
    { currency: "Costa Rican colon", codeSymbol: "CRC – ₡" },
    { currency: "Croatian kuna", codeSymbol: "HRK – kn" },
    { currency: "Czech koruna", codeSymbol: "CZK – Kč" },
    { currency: "Danish krone", codeSymbol: "DKK – kr" },
    { currency: "Egyptian pound", codeSymbol: "EGP – ج.م" },
    { currency: "Emirati dirham", codeSymbol: "AED – ﺩ.ﺇ" },
    { currency: "Euro", codeSymbol: "EUR – €" },
    { currency: "Hong Kong dollar", codeSymbol: "HKD – $" },
    { currency: "Hungarian forint", codeSymbol: "HUF – Ft" },
    { currency: "Indonesian rupiah", codeSymbol: "IDR – Rp" },
    { currency: "Israeli new shekel", codeSymbol: "ILS – ₪" },
    { currency: "Japanese yen", codeSymbol: "JPY – ¥" },
    { currency: "Kenyan shilling", codeSymbol: "KES – KSh" },
    { currency: "Malaysian ringgit", codeSymbol: "MYR – RM" },
    { currency: "Mexican peso", codeSymbol: "MXN – $" },
    { currency: "Moroccan dirham", codeSymbol: "MAD –" },
    { currency: "New Taiwan dollar", codeSymbol: "TWD – $" },
    { currency: "New Zealand dollar", codeSymbol: "NZD – $" },
    { currency: "Norwegian krone", codeSymbol: "NOK – kr" },
    { currency: "Peruvian sol", codeSymbol: "PEN – S/" },
    { currency: "Philippine peso", codeSymbol: "PHP – ₱" },
    { currency: "Polish zloty", codeSymbol: "PLN – zł" },
    { currency: "Pound sterling", codeSymbol: "GBP – £" },
    { currency: "Qatari riyal", codeSymbol: "QAR – ر.ق" },
    { currency: "Romanian leu", codeSymbol: "RON – lei" },
    { currency: "Saudi Arabian riyal", codeSymbol: "SAR – SR" },
    { currency: "Singapore dollar", codeSymbol: "SGD – $" },
    { currency: "South African rand", codeSymbol: "ZAR – R" },
    { currency: "South Korean won", codeSymbol: "KRW – ₩" },
    { currency: "Swedish krona", codeSymbol: "SEK – kr" },
    { currency: "Swiss franc", codeSymbol: "CHF –" },
    { currency: "Thai baht", codeSymbol: "THB – ฿" },
    { currency: "Turkish lira", codeSymbol: "TRY – ₺" },
    { currency: "Ukrainian hryvnia", codeSymbol: "UAH – ₴" },
    { currency: "United States dollar", codeSymbol: "USD – $" },
    { currency: "Uruguayan peso", codeSymbol: "UYU – $U" },
    { currency: "Vietnamese dong", codeSymbol: "VND – ₫" }
  ];

  return (
    <div className="modal-selector-content">
      <div className="choose-div">
        <h2>Choose a currency</h2>
        <div className="choose-div-option">
          {currencies.map((currency, index) => (
            <div key={index} className="choose-div-option-box">
              <h3>{currency.currency}</h3>
              <p>{currency.codeSymbol}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
