import React, { useState } from 'react';
import './modal.scss';
import LanguageIco from '../../assets/images/svg/languageIco';
import RightIco from '../../assets/images/svg/rightIco';

export default function Language() {
    const [isOn, setIsOn] = useState(true);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    const languages = [
        { name: "English", region: "United States" },
        { name: "English", region: "United Kingdom" },
        { name: "Deutsch", region: "Deutschland" },
        { name: "Deutsch", region: "Österreich" },
        { name: "Deutsch", region: "Schweiz" },
    ];

    const moreLanguages = [
        { name: "English", region: "India" },
        { name: "Azərbaycan dili", region: "Azərbaycan" },
        { name: "Bahasa Indonesia", region: "Indonesia" },
        { name: "Bosanski", region: "Bosna i Hercegovina" },
        { name: "Català", region: "Espanya" },
        { name: "Čeština", region: "Česká republika" },
        { name: "Crnogorski", region: "Crna Gora" },
        { name: "Dansk", region: "Danmark" },
        { name: "Deutsch", region: "Luxemburg" },
        { name: "Eesti", region: "Eesti" },
        { name: "English", region: "Australia" },
        { name: "English", region: "Canada" },
        { name: "English", region: "Guyana" },
        { name: "English", region: "Ireland" },
        { name: "English", region: "New Zealand" },
        { name: "English", region: "Singapore" },
        { name: "English", region: "United Arab Emirates" },
        { name: "Español", region: "Argentina" },
        { name: "Español", region: "Belice" },
        { name: "Español", region: "Bolivia" },
        { name: "Español", region: "Chile" },
        { name: "Español", region: "Colombia" },
        { name: "Español", region: "Costa Rica" },
        { name: "Español", region: "Ecuador" },
        { name: "Español", region: "El Salvador" },
        { name: "Español", region: "España" },
        { name: "Español", region: "Estados Unidos" },
        { name: "Español", region: "Guatemala" },
        { name: "Español", region: "Honduras" },
        { name: "Español", region: "Latinoamérica" },
        { name: "Español", region: "México" },
        { name: "Español", region: "Nicaragua" },
        { name: "Español", region: "Panamá" },
        { name: "Español", region: "Paraguay" },
        { name: "Español", region: "Perú" },
        { name: "Español", region: "Venezuela" },
        { name: "Français", region: "Belgique" },
        { name: "Français", region: "Canada" },
        { name: "Français", region: "France" },
        { name: "Français", region: "Suisse" },
        { name: "Français", region: "Luxembourg" },
        { name: "Gaeilge", region: "Éire" },
        { name: "Hrvatski", region: "Hrvatska" },
        { name: "isiXhosa", region: "eMzantsi Afrika" },
        { name: "isiZulu", region: "iNingizimu Afrika" },
        { name: "Íslenska", region: "Ísland" },
        { name: "Italiano", region: "Italia" },
        { name: "Italiano", region: "Svizzera" },
        { name: "Kiswahili", region: "Āfrika" },
        { name: "Latviešu", region: "Latvija" },
        { name: "Lietuvių", region: "Lietuva" },
        { name: "Magyar", region: "Magyarország" },
        { name: "Malti", region: "Malta" },
        { name: "Melayu", region: "Malaysia" },
        { name: "Vlaams", region: "België" },
        { name: "Nederlands", region: "Nederland" },
        { name: "Norsk", region: "Norge" },
        { name: "Polski", region: "Polska" },
        { name: "Português", region: "Brasil" },
        { name: "Português", region: "Portugal" },
        { name: "Română", region: "România" },
        { name: "Shqip", region: "Shqipëri" },
        { name: "Slovenčina", region: "Slovensko" },
        { name: "Slovenščina", region: "Slovenija" },
        { name: "Srpski", region: "Srbija" },
        { name: "Suomi", region: "Suomi" },
        { name: "Svenska", region: "Sverige" },
        { name: "Tagalog", region: "Pilipinas" },
        { name: "Tiếng Việt", region: "Việt Nam" },
        { name: "Türkçe", region: "Türkiye" },
        { name: "Ελληνικά", region: "Ελλάδα" },
        { name: "Български", region: "България" },
        { name: "Македонски", region: "Северна Македонија" },
        { name: "Русский", region: "Россия" },
        { name: "Українська", region: "Україна" },
        { name: "ქართული", region: "საქართველო" },
        { name: "Հայերեն", region: "Հայաստան" },
        { name: "עברית", region: "ישראל" },
        { name: "العربية", region: "العالم" },
        { name: "हिन्दी", region: "भारत" },
        { name: "ไทย", region: "ประเทศไทย" },
        { name: "한국어", region: "대한민국" },
        { name: "日本語", region: "日本" },
        { name: "简体中文", region: "美国" },
        { name: "繁體中文", region: "美國" },
        { name: "简体中文", region: "中国" },
        { name: "繁體中文", region: "香港" },
        { name: "繁體中文", region: "台灣" }
    ];


    return (
        <div className="modal-selector-content">
            <div className="translation-box">
                <div className="translation-inner-box">
                    <div>
                        <span>Translation<LanguageIco /></span>
                        <p>Automatically translate descriptions and reviews to English.</p>
                    </div>
                    <div className="auto-button" onClick={toggleSwitch}>
                        <div className={`auto-button ${isOn ? "auto-button-on" : ""}`}>
                            <div className="auto-button-round">
                                {isOn && <RightIco />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LanguageList title="Suggested languages and regions" languages={languages} />
            <LanguageList title="Choose a language and region" languages={moreLanguages} />
        </div>
    );
}

function LanguageList({ title, languages }) {
    return (
        <div className="choose-div">
            <h2>{title}</h2>
            <div className="choose-div-option">
                {languages.map((lang, index) => (
                    <div key={index} className="choose-div-option-box">
                        <h3>{lang.name}</h3>
                        <p>{lang.region}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
