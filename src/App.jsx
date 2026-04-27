import React from "react";
import "./App.css";

const photos = {
  hero:
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2477652.jpg",
  nutrition:
    "https://www.shutterstock.com/image-photo/young-indian-girl-working-out-260nw-2133599823.jpg",
  anemia:
    "https://www.verywellmind.com/thmb/qqVI7IaGg9MOChmqDqQai8tT1pA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/86482529-56a6f4495f9b58b7d0e5a9f2.jpg",
  menstrual:
    "https://www.globalgiving.org/pfil/24721/ph_24721_90124.jpg",
  wellbeing:
    "https://www.globalgiving.org/pfil/24721/ph_24721_90109.jpg",
  clinic:
    "https://www.unicef.org/sites/default/files/styles/media_large_image/public/UNI188210.JPG.webp?itok=G94lLZR0",
  sports:
    "https://www.globalgiving.org/pfil/24721/ph_24721_221931.jpg",
  voucher:
    "https://sesamism.com/cdn/shop/files/GiftVoucher_1080x.png?v=1702978552",
};

const content = {
  en: {
    heroTitle: "Bata Kishori Swasthya",
    heroSub: "Preparing young girls for a healthy transition to adulthood.",
    age: "Young Girls — 10 to 19 Years",
    intro:
      "Adolescence is a special, exciting and sometimes challenging period of life — transition from childhood to adulthood.",
    button: "Explore Program",
    topics: [
      "Nutrition & Anemia Prevention",
      "Hygienic Menstrual Practices",
      "Anemia Prevention",
      "HPV & Other Vaccine Awareness",
      "Prevention of Breast & Cervical Cancers",
    ],
    duringAge: [
      "Your body grows and changes rapidly",
      "Your thoughts and emotions develop",
      "You build friendships and relationships",
      "You learn independence and responsibility",
    ],
    thisTime: [
      "Discover your strengths",
      "Build confidence",
      "Develop healthy habits",
      "Shape your future",
      "Understand what is good and bad for your health",
    ],
    nutritionTitle: "Nutrition & Healthy Food",
    nutritionText: "Good nutrition helps you stay active, focused, and strong.",
    balancedDiet: [
      "Grains, pulses and legumes",
      "Green leafy vegetables",
      "Fresh fruits",
      "Milk and dairy products",
      "Eggs, nuts and seeds",
      "Animal proteins if preferred",
    ],
    habits: [
      "Do not skip breakfast",
      "Eat meals at regular intervals",
      "Drink 6–8 glasses of clean water daily",
      "Limit junk food and sugary drinks",
      "Stay physically active",
      "Get adequate sleep",
    ],
    benefits: [
      "Strong immunity",
      "Healthy growth",
      "Better academic performance",
      "Increased energy",
      "Improved confidence",
      "Better menstrual health in girls",
    ],
    anemiaTitle: "Prevention & Anemia Awareness",
    anemiaText:
      "Anemia is caused by low iron levels in the body. It can reduce energy and concentration.",
    anemiaSigns: [
      "Weakness",
      "Tiredness",
      "Fatigue",
      "Dizziness",
      "Headache",
      "Pale skin",
      "Difficulty concentrating",
    ],
    anemiaPrevention: [
      "Eat iron-rich foods",
      "Include Vitamin-C rich foods",
      "Take iron supplements if advised by a doctor",
      "Go for regular health check-ups",
    ],
    menstrualTitle: "Hygiene & Menstrual Health",
    menstrualText:
      "Menstruation is a natural and healthy part of growing up for girls. It is normal — not a disease.",
    hygiene: [
      "Use clean sanitary pads or menstrual products",
      "Change every 4–6 hours",
      "Wash hands before and after changing",
      "Maintain daily bathing and cleanliness",
      "Dispose used products safely",
    ],
    remember: [
      "Periods are normal and natural",
      "Girls can continue studies, sports and daily activities",
      "Open conversations help remove myths and stigma",
    ],
    wellbeingTitle: "Health & Well Being",
    wellbeing: [
      "Awareness about reproductive organs and anatomy",
      "Understanding body changes",
      "Awareness about contraception",
      "Respectful and healthy relationships",
      "Awareness about infections",
      "Good personal hygiene",
    ],
    pcosTitle: "PCOS / PCOD Awareness",
    pcosSigns: [
      "Irregular periods",
      "Acne",
      "Weight changes",
      "Excess hair growth",
    ],
    pcosHelp: [
      "Balanced diet",
      "Regular exercise",
      "Stress management",
      "Medical advice when needed",
    ],
    rtiTitle: "RTI / STI Awareness",
    rtiSigns: ["Unusual discharge", "Itching or irritation", "Pain or discomfort"],
    rtiPrevention: [
      "Maintain personal hygiene",
      "Seek early medical care",
      "Avoid unsafe practices",
      "Talk to a trusted health provider",
    ],
    cancerTitle: "Cancer Awareness",
    breast: [
      "Be aware of unusual lump, swelling or pain",
      "Report changes to a doctor promptly",
      "Early awareness helps detection",
    ],
    cervical: [
      "Maintain good hygiene",
      "Follow vaccination advice",
      "Regular screening later in life is important",
    ],
    voucherTitle: "Gift Vouchers",
    vouchers: [
      "Flat 50% OFF",
      "Flat 30% OFF",
      "Flat 10% OFF",
      "Flat ₹200 OFF",
      "Flat ₹500 OFF",
      "Flat ₹1000 OFF",
    ],
    terms: [
      "Non-returnable purchase.",
      "Valid only at authorised Bata retail stores / Stree Clinic as applicable.",
      "No exchange or return policy.",
      "Voucher is valid for six months from date of issue.",
      "Identity verification may be required.",
    ],
    clinicTitle: "Where to Seek Help",
    clinicText:
      "Adolescents can access safe, confidential and friendly health services at Stree Clinic and young-girls friendly health clinics.",
    cities: ["Barasat", "Behala", "Gariahat", "Hatibagan", "Tollygunge"],
    footer: "Main Hun Stree, Main Hun Kaabil",
  },

 hi: {
    nav: ["जागरूकता", "वाउचर", "क्लिनिक"],
    heroTitle: "बाटा किशोरी स्वास्थ्य",
    heroSub: "किशोरियों को स्वस्थ रूप से वयस्कता की ओर बढ़ने के लिए तैयार करना",
    age: "किशोरियाँ — 10 से 19 वर्ष",
    intro:
      "किशोरावस्था जीवन का एक विशेष, रोमांचक और कभी-कभी चुनौतीपूर्ण समय होता है — बचपन से वयस्कता की ओर परिवर्तन।",
    button: "कार्यक्रम देखें",

    topicsTitle: "जागरूकता सत्र",
    topics: [
      "पोषण और एनीमिया की रोकथाम",
      "स्वच्छ मासिक धर्म अभ्यास",
      "एनीमिया की रोकथाम",
      "एचपीवी और अन्य टीकों की जानकारी",
      "स्तन और गर्भाशय कैंसर की रोकथाम",
    ],

    duringAge: [
      "आपका शरीर तेजी से बढ़ता और बदलता है",
      "आपके विचार और भावनाएँ विकसित होती हैं",
      "आप दोस्ती और रिश्ते बनाते हैं",
      "आप स्वतंत्रता और जिम्मेदारी सीखते हैं",
    ],

    thisTime: [
      "अपनी ताकत पहचानें",
      "आत्मविश्वास बढ़ाएं",
      "स्वस्थ आदतें विकसित करें",
      "अपने भविष्य को आकार दें",
      "स्वास्थ्य के लिए क्या अच्छा और क्या बुरा है समझें",
    ],

    nutritionTitle: "पोषण और स्वस्थ भोजन",
    nutritionText: "अच्छा पोषण आपको सक्रिय, केंद्रित और मजबूत रखता है",

    balancedDiet: [
      "अनाज, दालें और फलियां",
      "हरी पत्तेदार सब्जियाँ",
      "ताजे फल",
      "दूध और डेयरी उत्पाद",
      "अंडे, मेवे और बीज",
      "मांसाहारी प्रोटीन (यदि पसंद हो)",
    ],

    habits: [
      "नाश्ता न छोड़ें",
      "समय पर भोजन करें",
      "रोज 6–8 गिलास पानी पिएं",
      "जंक फूड कम करें",
      "शारीरिक रूप से सक्रिय रहें",
      "पर्याप्त नींद लें",
    ],

    benefits: [
      "मजबूत प्रतिरक्षा",
      "स्वस्थ विकास",
      "बेहतर पढ़ाई प्रदर्शन",
      "अधिक ऊर्जा",
      "आत्मविश्वास में सुधार",
      "बेहतर मासिक धर्म स्वास्थ्य",
    ],

    anemiaTitle: "एनीमिया जागरूकता",
    anemiaText:
      "एनीमिया शरीर में आयरन की कमी से होता है, जिससे ऊर्जा और ध्यान कम हो सकता है",

    anemiaSigns: [
      "कमजोरी",
      "थकान",
      "चक्कर आना",
      "सिरदर्द",
      "पीली त्वचा",
      "ध्यान में कमी",
    ],

    anemiaPrevention: [
      "आयरन युक्त भोजन करें",
      "विटामिन C लें",
      "डॉक्टर की सलाह पर आयरन लें",
      "नियमित जांच करवाएं",
    ],

    menstrualTitle: "मासिक धर्म और स्वच्छता",
    menstrualText:
      "मासिक धर्म एक प्राकृतिक प्रक्रिया है, यह कोई बीमारी नहीं है",

    hygiene: [
      "साफ सैनिटरी उत्पाद का उपयोग करें",
      "हर 4–6 घंटे में बदलें",
      "हाथ धोएं",
      "दैनिक स्वच्छता रखें",
      "सुरक्षित निपटान करें",
    ],

    remember: [
      "पीरियड्स सामान्य हैं",
      "लड़कियाँ सब कर सकती हैं",
      "खुलकर बात करें",
    ],

    wellbeingTitle: "स्वास्थ्य और कल्याण",
    wellbeing: [
      "शरीर की समझ",
      "शारीरिक बदलाव",
      "गर्भनिरोधक जानकारी",
      "स्वस्थ रिश्ते",
      "संक्रमण की जानकारी",
      "व्यक्तिगत स्वच्छता",
    ],

    pcosTitle: "पीसीओएस जागरूकता",
    pcosSigns: ["अनियमित पीरियड्स", "मुंहासे", "वजन बदलाव", "अधिक बाल"],
    pcosHelp: ["संतुलित आहार", "व्यायाम", "तनाव नियंत्रण", "डॉक्टर सलाह"],

    rtiTitle: "आरटीआई / एसटीआई जागरूकता",
    rtiSigns: ["असामान्य डिस्चार्ज", "खुजली", "दर्द"],
    rtiPrevention: ["स्वच्छता", "डॉक्टर से मिलें", "सुरक्षित व्यवहार"],

    cancerTitle: "कैंसर जागरूकता",
    breast: ["गांठ पर ध्यान दें", "डॉक्टर को दिखाएं", "जल्दी पहचान जरूरी"],
    cervical: ["स्वच्छता रखें", "टीकाकरण लें", "जांच जरूरी"],

    voucherTitle: "उपहार वाउचर",
    vouchers: ["50% छूट", "30% छूट", "10% छूट", "₹200 छूट"],

    terms: [
      "कोई रिफंड नहीं",
      "केवल अधिकृत स्टोर में मान्य",
      "कोई एक्सचेंज नहीं",
      "6 महीने तक मान्य",
    ],

    clinicTitle: "मदद कहाँ मिलेगी",
    clinicText: "सुरक्षित स्वास्थ्य सेवाएं उपलब्ध हैं",
    cities: ["बरासात", "बेहाला", "गरियाहाट", "हाटीबागान", "टॉलीगंज"],

    footer: "मैं हूँ स्त्री, मैं हूँ काबिल",
  },

  gu: {
    nav: ["જાગૃતિ", "વાઉચર", "ક્લિનિક"],
    heroTitle: "બાટા કિશોરી સ્વાસ્થ્ય",
    heroSub: "યુવાન છોકરીઓને સ્વસ્થ જીવન માટે તૈયાર કરવું",
    button: "પ્રોગ્રામ જુઓ",

    topics: [
      "પોષણ અને એનિમિયા નિવારણ",
      "સ્વચ્છ માસિક પ્રથા",
      "HPV જાગૃતિ",
      "કેન્સર નિવારણ",
    ],

    duringAge: [
      "શરીર ઝડપથી બદલાય છે",
      "વિચાર અને ભાવનાઓ વિકસે છે",
      "મિત્રતા થાય છે",
    ],

    thisTime: [
      "આત્મવિશ્વાસ બનાવો",
      "સ્વસ્થ આદતો અપનાવો",
    ],

    nutritionTitle: "સ્વસ્થ આહાર",
    nutritionText: "સારો આહાર તમને મજબૂત બનાવે છે",

    anemiaTitle: "એનિમિયા",
    anemiaText: "લોહીની કમીથી થાય છે",

    menstrualTitle: "માસિક સ્વચ્છતા",
    menstrualText: "આ સ્વાભાવિક છે",

    wellbeingTitle: "સ્વાસ્થ્ય",
    voucherTitle: "વાઉચર",
    clinicTitle: "મદદ ક્યાં મળશે",

    footer: "હું સ્ત્રી છું, હું સક્ષમ છું",
  },

  mr: {
    nav: ["जागरूकता", "व्हाउचर", "क्लिनिक"],
    heroTitle: "बाटा किशोरी स्वास्थ्य",
    heroSub: "मुलींना निरोगी जीवनासाठी तयार करणे",
    button: "कार्यक्रम पहा",

    topics: [
      "पोषण आणि अॅनिमिया प्रतिबंध",
      "मासिक पाळी स्वच्छता",
      "HPV जागरूकता",
      "कर्करोग प्रतिबंध",
    ],

    duringAge: [
      "शरीर बदलते",
      "विचार वाढतात",
      "मैत्री होते",
    ],

    thisTime: [
      "आत्मविश्वास वाढवा",
      "चांगल्या सवयी लावा",
    ],

    nutritionTitle: "पोषण",
    anemiaTitle: "अॅनिमिया",
    menstrualTitle: "मासिक पाळी",
    wellbeingTitle: "आरोग्य",

    voucherTitle: "व्हाउचर",
    clinicTitle: "मदत कुठे मिळेल",

    footer: "मी स्त्री आहे, मी सक्षम आहे",
  },
};

function getText(lang) {
  return { ...content.en, ...content[lang] };
}

function SectionCard({ title, items, img }) {
  return (
    <div className="info-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = React.useState("en");
  const t = getText(lang);

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span>Bata</span> Kishori Swasthya
        </div>

        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="gu">Gujarati</option>
          <option value="mr">Marathi</option>
        </select>
      </header>

      <section className="hero">
        <div className="float f1"></div>
        <div className="float f2"></div>

        <div>
          <p className="tag">A CSR Initiative</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
          <a href="#awareness" className="btn">
            {t.button}
          </a>
        </div>

        <img className="hero-img" src={photos.hero} alt="young girls" />
      </section>

      <section className="intro">
        <h2>{t.age}</h2>
        <p>{t.intro}</p>

        <div className="topic-grid">
          {t.topics.map((topic) => (
            <div className="topic" key={topic}>
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section id="awareness" className="grid-section">
        <SectionCard title="During this age" items={t.duringAge} img={photos.sports} />
        <SectionCard title="This is time to" items={t.thisTime} img={photos.wellbeing} />
      </section>

      <section className="content-section">
        <h2>{t.nutritionTitle}</h2>
        <p>{t.nutritionText}</p>

        <div className="three-grid">
          <SectionCard title="Eat a Balanced Diet" items={t.balancedDiet} img={photos.nutrition} />
          <SectionCard title="Healthy Habits" items={t.habits} img={photos.hero} />
          <SectionCard title="Benefits of Good Nutrition" items={t.benefits} img={photos.sports} />
        </div>
      </section>

      <section className="content-section pink">
        <h2>{t.anemiaTitle}</h2>
        <p>{t.anemiaText}</p>

        <div className="two-grid">
          <SectionCard title="Signs of Anemia" items={t.anemiaSigns} img={photos.anemia} />
          <SectionCard title="Prevention" items={t.anemiaPrevention} img={photos.nutrition} />
        </div>
      </section>

      <section className="content-section green">
        <h2>{t.menstrualTitle}</h2>
        <p>{t.menstrualText}</p>

        <div className="two-grid">
          <SectionCard title="Good Hygiene Practices" items={t.hygiene} img={photos.menstrual} />
          <SectionCard title="Remember" items={t.remember} img={photos.wellbeing} />
        </div>
      </section>

      <section className="content-section">
        <h2>{t.wellbeingTitle}</h2>

        <div className="three-grid">
          <SectionCard title="Includes" items={t.wellbeing} img={photos.wellbeing} />
          <SectionCard title={t.pcosTitle} items={[...t.pcosSigns, ...t.pcosHelp]} img={photos.anemia} />
          <SectionCard title={t.rtiTitle} items={[...t.rtiSigns, ...t.rtiPrevention]} img={photos.clinic} />
        </div>
      </section>

      <section className="content-section blue">
        <h2>{t.cancerTitle}</h2>

        <div className="two-grid">
          <SectionCard title="Breast Health for Girls" items={t.breast} img={photos.wellbeing} />
          <SectionCard title="Cervical Health" items={t.cervical} img={photos.clinic} />
        </div>
      </section>

      <section id="vouchers" className="voucher-section">
        <h2>{t.voucherTitle}</h2>

        <div className="voucher-grid">
          {t.vouchers.map((voucher) => (
            <div className="voucher-card" key={voucher}>
              <img src={photos.voucher} alt={voucher} />
              <h3>{voucher}</h3>
              <p>Bata Stree Kishori Swasthya Gift Voucher</p>
            </div>
          ))}
        </div>

        <div className="terms">
          <h3>Terms & Conditions</h3>
          <ul>
            {t.terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="clinics" className="clinics">
        <h2>{t.clinicTitle}</h2>
        <p>{t.clinicText}</p>

        <img src={photos.clinic} alt="clinic" />

        <div className="clinic-grid">
          {t.cities.map((city) => (
            <div key={city}>
              <h3>{city}</h3>
              <p>+91-7703-9502-XX</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <h2>{t.footer}</h2>
        <p>www.parivarseva.org | Helpline: 1800-123-7075</p>
      </footer>
    </div>
  );
}