// import React from "react";
// import "./App.css";

// const photos = {
//   hero:
//     "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2477652.jpg",
//   nutrition:
//     "https://www.shutterstock.com/image-photo/young-indian-girl-working-out-260nw-2133599823.jpg",
//   anemia:
//     "https://www.verywellmind.com/thmb/qqVI7IaGg9MOChmqDqQai8tT1pA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/86482529-56a6f4495f9b58b7d0e5a9f2.jpg",
//   menstrual:
//     "https://www.globalgiving.org/pfil/24721/ph_24721_90124.jpg",
//   wellbeing:
//     "https://www.globalgiving.org/pfil/24721/ph_24721_90109.jpg",
//   clinic:
//     "https://www.unicef.org/sites/default/files/styles/media_large_image/public/UNI188210.JPG.webp?itok=G94lLZR0",
//   sports:
//     "https://www.globalgiving.org/pfil/24721/ph_24721_221931.jpg",
//   voucher:
//     "https://sesamism.com/cdn/shop/files/GiftVoucher_1080x.png?v=1702978552",
// };

// const content = {
//   en: {
//     heroTitle: "Bata Kishori Swasthya",
//     heroSub: "Preparing young girls for a healthy transition to adulthood.",
//     age: "Young Girls — 10 to 19 Years",
//     intro:
//       "Adolescence is a special, exciting and sometimes challenging period of life — transition from childhood to adulthood.",
//     button: "Explore Program",
//     topics: [
//       "Nutrition & Anemia Prevention",
//       "Hygienic Menstrual Practices",
//       "Anemia Prevention",
//       "HPV & Other Vaccine Awareness",
//       "Prevention of Breast & Cervical Cancers",
//     ],
//     duringAge: [
//       "Your body grows and changes rapidly",
//       "Your thoughts and emotions develop",
//       "You build friendships and relationships",
//       "You learn independence and responsibility",
//     ],
//     thisTime: [
//       "Discover your strengths",
//       "Build confidence",
//       "Develop healthy habits",
//       "Shape your future",
//       "Understand what is good and bad for your health",
//     ],
//     nutritionTitle: "Nutrition & Healthy Food",
//     nutritionText: "Good nutrition helps you stay active, focused, and strong.",
//     balancedDiet: [
//       "Grains, pulses and legumes",
//       "Green leafy vegetables",
//       "Fresh fruits",
//       "Milk and dairy products",
//       "Eggs, nuts and seeds",
//       "Animal proteins if preferred",
//     ],
//     habits: [
//       "Do not skip breakfast",
//       "Eat meals at regular intervals",
//       "Drink 6–8 glasses of clean water daily",
//       "Limit junk food and sugary drinks",
//       "Stay physically active",
//       "Get adequate sleep",
//     ],
//     benefits: [
//       "Strong immunity",
//       "Healthy growth",
//       "Better academic performance",
//       "Increased energy",
//       "Improved confidence",
//       "Better menstrual health in girls",
//     ],
//     anemiaTitle: "Prevention & Anemia Awareness",
//     anemiaText:
//       "Anemia is caused by low iron levels in the body. It can reduce energy and concentration.",
//     anemiaSigns: [
//       "Weakness",
//       "Tiredness",
//       "Fatigue",
//       "Dizziness",
//       "Headache",
//       "Pale skin",
//       "Difficulty concentrating",
//     ],
//     anemiaPrevention: [
//       "Eat iron-rich foods",
//       "Include Vitamin-C rich foods",
//       "Take iron supplements if advised by a doctor",
//       "Go for regular health check-ups",
//     ],
//     menstrualTitle: "Hygiene & Menstrual Health",
//     menstrualText:
//       "Menstruation is a natural and healthy part of growing up for girls. It is normal — not a disease.",
//     hygiene: [
//       "Use clean sanitary pads or menstrual products",
//       "Change every 4–6 hours",
//       "Wash hands before and after changing",
//       "Maintain daily bathing and cleanliness",
//       "Dispose used products safely",
//     ],
//     remember: [
//       "Periods are normal and natural",
//       "Girls can continue studies, sports and daily activities",
//       "Open conversations help remove myths and stigma",
//     ],
//     wellbeingTitle: "Health & Well Being",
//     wellbeing: [
//       "Awareness about reproductive organs and anatomy",
//       "Understanding body changes",
//       "Awareness about contraception",
//       "Respectful and healthy relationships",
//       "Awareness about infections",
//       "Good personal hygiene",
//     ],
//     pcosTitle: "PCOS / PCOD Awareness",
//     pcosSigns: [
//       "Irregular periods",
//       "Acne",
//       "Weight changes",
//       "Excess hair growth",
//     ],
//     pcosHelp: [
//       "Balanced diet",
//       "Regular exercise",
//       "Stress management",
//       "Medical advice when needed",
//     ],
//     rtiTitle: "RTI / STI Awareness",
//     rtiSigns: ["Unusual discharge", "Itching or irritation", "Pain or discomfort"],
//     rtiPrevention: [
//       "Maintain personal hygiene",
//       "Seek early medical care",
//       "Avoid unsafe practices",
//       "Talk to a trusted health provider",
//     ],
//     cancerTitle: "Cancer Awareness",
//     breast: [
//       "Be aware of unusual lump, swelling or pain",
//       "Report changes to a doctor promptly",
//       "Early awareness helps detection",
//     ],
//     cervical: [
//       "Maintain good hygiene",
//       "Follow vaccination advice",
//       "Regular screening later in life is important",
//     ],
//     voucherTitle: "Gift Vouchers",
//     vouchers: [
//       "Flat 50% OFF",
//       "Flat 30% OFF",
//       "Flat 10% OFF",
//       "Flat ₹200 OFF",
//       "Flat ₹500 OFF",
//       "Flat ₹1000 OFF",
//     ],
//     terms: [
//       "Non-returnable purchase.",
//       "Valid only at authorised Bata retail stores / Stree Clinic as applicable.",
//       "No exchange or return policy.",
//       "Voucher is valid for six months from date of issue.",
//       "Identity verification may be required.",
//     ],
//     clinicTitle: "Where to Seek Help",
//     clinicText:
//       "Adolescents can access safe, confidential and friendly health services at Stree Clinic and young-girls friendly health clinics.",
//     cities: ["Barasat", "Behala", "Gariahat", "Hatibagan", "Tollygunge"],
//     footer: "Main Hun Stree, Main Hun Kaabil",
//   },

//  hi: {
//     nav: ["जागरूकता", "वाउचर", "क्लिनिक"],
//     heroTitle: "बाटा किशोरी स्वास्थ्य",
//     heroSub: "किशोरियों को स्वस्थ रूप से वयस्कता की ओर बढ़ने के लिए तैयार करना",
//     age: "किशोरियाँ — 10 से 19 वर्ष",
//     intro:
//       "किशोरावस्था जीवन का एक विशेष, रोमांचक और कभी-कभी चुनौतीपूर्ण समय होता है — बचपन से वयस्कता की ओर परिवर्तन।",
//     button: "कार्यक्रम देखें",

//     topicsTitle: "जागरूकता सत्र",
//     topics: [
//       "पोषण और एनीमिया की रोकथाम",
//       "स्वच्छ मासिक धर्म अभ्यास",
//       "एनीमिया की रोकथाम",
//       "एचपीवी और अन्य टीकों की जानकारी",
//       "स्तन और गर्भाशय कैंसर की रोकथाम",
//     ],

//     duringAge: [
//       "आपका शरीर तेजी से बढ़ता और बदलता है",
//       "आपके विचार और भावनाएँ विकसित होती हैं",
//       "आप दोस्ती और रिश्ते बनाते हैं",
//       "आप स्वतंत्रता और जिम्मेदारी सीखते हैं",
//     ],

//     thisTime: [
//       "अपनी ताकत पहचानें",
//       "आत्मविश्वास बढ़ाएं",
//       "स्वस्थ आदतें विकसित करें",
//       "अपने भविष्य को आकार दें",
//       "स्वास्थ्य के लिए क्या अच्छा और क्या बुरा है समझें",
//     ],

//     nutritionTitle: "पोषण और स्वस्थ भोजन",
//     nutritionText: "अच्छा पोषण आपको सक्रिय, केंद्रित और मजबूत रखता है",

//     balancedDiet: [
//       "अनाज, दालें और फलियां",
//       "हरी पत्तेदार सब्जियाँ",
//       "ताजे फल",
//       "दूध और डेयरी उत्पाद",
//       "अंडे, मेवे और बीज",
//       "मांसाहारी प्रोटीन (यदि पसंद हो)",
//     ],

//     habits: [
//       "नाश्ता न छोड़ें",
//       "समय पर भोजन करें",
//       "रोज 6–8 गिलास पानी पिएं",
//       "जंक फूड कम करें",
//       "शारीरिक रूप से सक्रिय रहें",
//       "पर्याप्त नींद लें",
//     ],

//     benefits: [
//       "मजबूत प्रतिरक्षा",
//       "स्वस्थ विकास",
//       "बेहतर पढ़ाई प्रदर्शन",
//       "अधिक ऊर्जा",
//       "आत्मविश्वास में सुधार",
//       "बेहतर मासिक धर्म स्वास्थ्य",
//     ],

//     anemiaTitle: "एनीमिया जागरूकता",
//     anemiaText:
//       "एनीमिया शरीर में आयरन की कमी से होता है, जिससे ऊर्जा और ध्यान कम हो सकता है",

//     anemiaSigns: [
//       "कमजोरी",
//       "थकान",
//       "चक्कर आना",
//       "सिरदर्द",
//       "पीली त्वचा",
//       "ध्यान में कमी",
//     ],

//     anemiaPrevention: [
//       "आयरन युक्त भोजन करें",
//       "विटामिन C लें",
//       "डॉक्टर की सलाह पर आयरन लें",
//       "नियमित जांच करवाएं",
//     ],

//     menstrualTitle: "मासिक धर्म और स्वच्छता",
//     menstrualText:
//       "मासिक धर्म एक प्राकृतिक प्रक्रिया है, यह कोई बीमारी नहीं है",

//     hygiene: [
//       "साफ सैनिटरी उत्पाद का उपयोग करें",
//       "हर 4–6 घंटे में बदलें",
//       "हाथ धोएं",
//       "दैनिक स्वच्छता रखें",
//       "सुरक्षित निपटान करें",
//     ],

//     remember: [
//       "पीरियड्स सामान्य हैं",
//       "लड़कियाँ सब कर सकती हैं",
//       "खुलकर बात करें",
//     ],

//     wellbeingTitle: "स्वास्थ्य और कल्याण",
//     wellbeing: [
//       "शरीर की समझ",
//       "शारीरिक बदलाव",
//       "गर्भनिरोधक जानकारी",
//       "स्वस्थ रिश्ते",
//       "संक्रमण की जानकारी",
//       "व्यक्तिगत स्वच्छता",
//     ],

//     pcosTitle: "पीसीओएस जागरूकता",
//     pcosSigns: ["अनियमित पीरियड्स", "मुंहासे", "वजन बदलाव", "अधिक बाल"],
//     pcosHelp: ["संतुलित आहार", "व्यायाम", "तनाव नियंत्रण", "डॉक्टर सलाह"],

//     rtiTitle: "आरटीआई / एसटीआई जागरूकता",
//     rtiSigns: ["असामान्य डिस्चार्ज", "खुजली", "दर्द"],
//     rtiPrevention: ["स्वच्छता", "डॉक्टर से मिलें", "सुरक्षित व्यवहार"],

//     cancerTitle: "कैंसर जागरूकता",
//     breast: ["गांठ पर ध्यान दें", "डॉक्टर को दिखाएं", "जल्दी पहचान जरूरी"],
//     cervical: ["स्वच्छता रखें", "टीकाकरण लें", "जांच जरूरी"],

//     voucherTitle: "उपहार वाउचर",
//     vouchers: ["50% छूट", "30% छूट", "10% छूट", "₹200 छूट"],

//     terms: [
//       "कोई रिफंड नहीं",
//       "केवल अधिकृत स्टोर में मान्य",
//       "कोई एक्सचेंज नहीं",
//       "6 महीने तक मान्य",
//     ],

//     clinicTitle: "मदद कहाँ मिलेगी",
//     clinicText: "सुरक्षित स्वास्थ्य सेवाएं उपलब्ध हैं",
//     cities: ["बरासात", "बेहाला", "गरियाहाट", "हाटीबागान", "टॉलीगंज"],

//     footer: "मैं हूँ स्त्री, मैं हूँ काबिल",
//   },

//   gu: {
//     nav: ["જાગૃતિ", "વાઉચર", "ક્લિનિક"],
//     heroTitle: "બાટા કિશોરી સ્વાસ્થ્ય",
//     heroSub: "યુવાન છોકરીઓને સ્વસ્થ જીવન માટે તૈયાર કરવું",
//     button: "પ્રોગ્રામ જુઓ",

//     topics: [
//       "પોષણ અને એનિમિયા નિવારણ",
//       "સ્વચ્છ માસિક પ્રથા",
//       "HPV જાગૃતિ",
//       "કેન્સર નિવારણ",
//     ],

//     duringAge: [
//       "શરીર ઝડપથી બદલાય છે",
//       "વિચાર અને ભાવનાઓ વિકસે છે",
//       "મિત્રતા થાય છે",
//     ],

//     thisTime: [
//       "આત્મવિશ્વાસ બનાવો",
//       "સ્વસ્થ આદતો અપનાવો",
//     ],

//     nutritionTitle: "સ્વસ્થ આહાર",
//     nutritionText: "સારો આહાર તમને મજબૂત બનાવે છે",

//     anemiaTitle: "એનિમિયા",
//     anemiaText: "લોહીની કમીથી થાય છે",

//     menstrualTitle: "માસિક સ્વચ્છતા",
//     menstrualText: "આ સ્વાભાવિક છે",

//     wellbeingTitle: "સ્વાસ્થ્ય",
//     voucherTitle: "વાઉચર",
//     clinicTitle: "મદદ ક્યાં મળશે",

//     footer: "હું સ્ત્રી છું, હું સક્ષમ છું",
//   },

//   mr: {
//     nav: ["जागरूकता", "व्हाउचर", "क्लिनिक"],
//     heroTitle: "बाटा किशोरी स्वास्थ्य",
//     heroSub: "मुलींना निरोगी जीवनासाठी तयार करणे",
//     button: "कार्यक्रम पहा",

//     topics: [
//       "पोषण आणि अॅनिमिया प्रतिबंध",
//       "मासिक पाळी स्वच्छता",
//       "HPV जागरूकता",
//       "कर्करोग प्रतिबंध",
//     ],

//     duringAge: [
//       "शरीर बदलते",
//       "विचार वाढतात",
//       "मैत्री होते",
//     ],

//     thisTime: [
//       "आत्मविश्वास वाढवा",
//       "चांगल्या सवयी लावा",
//     ],

//     nutritionTitle: "पोषण",
//     anemiaTitle: "अॅनिमिया",
//     menstrualTitle: "मासिक पाळी",
//     wellbeingTitle: "आरोग्य",

//     voucherTitle: "व्हाउचर",
//     clinicTitle: "मदत कुठे मिळेल",

//     footer: "मी स्त्री आहे, मी सक्षम आहे",
//   },
// };

// function getText(lang) {
//   return { ...content.en, ...content[lang] };
// }

// function SectionCard({ title, items, img }) {
//   return (
//     <div className="info-card">
//       <img src={img} alt={title} />
//       <h3>{title}</h3>
//       <ul>
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function App() {
//   const [lang, setLang] = React.useState("en");
//   const t = getText(lang);

//   return (
//     <div className="app">
//       <header className="navbar">
//         <div className="logo">
//           <span>Bata</span> Kishori Swasthya
//         </div>

//         <select value={lang} onChange={(e) => setLang(e.target.value)}>
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="gu">Gujarati</option>
//           <option value="mr">Marathi</option>
//         </select>
//       </header>

//       <section className="hero">
//         <div className="float f1"></div>
//         <div className="float f2"></div>

//         <div>
//           <p className="tag">A CSR Initiative</p>
//           <h1>{t.heroTitle}</h1>
//           <p>{t.heroSub}</p>
//           <a href="#awareness" className="btn">
//             {t.button}
//           </a>
//         </div>

//         <img className="hero-img" src={photos.hero} alt="young girls" />
//       </section>

//       <section className="intro">
//         <h2>{t.age}</h2>
//         <p>{t.intro}</p>

//         <div className="topic-grid">
//           {t.topics.map((topic) => (
//             <div className="topic" key={topic}>
//               {topic}
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="awareness" className="grid-section">
//         <SectionCard title="During this age" items={t.duringAge} img={photos.sports} />
//         <SectionCard title="This is time to" items={t.thisTime} img={photos.wellbeing} />
//       </section>

//       <section className="content-section">
//         <h2>{t.nutritionTitle}</h2>
//         <p>{t.nutritionText}</p>

//         <div className="three-grid">
//           <SectionCard title="Eat a Balanced Diet" items={t.balancedDiet} img={photos.nutrition} />
//           <SectionCard title="Healthy Habits" items={t.habits} img={photos.hero} />
//           <SectionCard title="Benefits of Good Nutrition" items={t.benefits} img={photos.sports} />
//         </div>
//       </section>

//       <section className="content-section pink">
//         <h2>{t.anemiaTitle}</h2>
//         <p>{t.anemiaText}</p>

//         <div className="two-grid">
//           <SectionCard title="Signs of Anemia" items={t.anemiaSigns} img={photos.anemia} />
//           <SectionCard title="Prevention" items={t.anemiaPrevention} img={photos.nutrition} />
//         </div>
//       </section>

//       <section className="content-section green">
//         <h2>{t.menstrualTitle}</h2>
//         <p>{t.menstrualText}</p>

//         <div className="two-grid">
//           <SectionCard title="Good Hygiene Practices" items={t.hygiene} img={photos.menstrual} />
//           <SectionCard title="Remember" items={t.remember} img={photos.wellbeing} />
//         </div>
//       </section>

//       <section className="content-section">
//         <h2>{t.wellbeingTitle}</h2>

//         <div className="three-grid">
//           <SectionCard title="Includes" items={t.wellbeing} img={photos.wellbeing} />
//           <SectionCard title={t.pcosTitle} items={[...t.pcosSigns, ...t.pcosHelp]} img={photos.anemia} />
//           <SectionCard title={t.rtiTitle} items={[...t.rtiSigns, ...t.rtiPrevention]} img={photos.clinic} />
//         </div>
//       </section>

//       <section className="content-section blue">
//         <h2>{t.cancerTitle}</h2>

//         <div className="two-grid">
//           <SectionCard title="Breast Health for Girls" items={t.breast} img={photos.wellbeing} />
//           <SectionCard title="Cervical Health" items={t.cervical} img={photos.clinic} />
//         </div>
//       </section>

//       <section id="vouchers" className="voucher-section">
//         <h2>{t.voucherTitle}</h2>

//         <div className="voucher-grid">
//           {t.vouchers.map((voucher) => (
//             <div className="voucher-card" key={voucher}>
//               <img src={photos.voucher} alt={voucher} />
//               <h3>{voucher}</h3>
//               <p>Bata Stree Kishori Swasthya Gift Voucher</p>
//             </div>
//           ))}
//         </div>

//         <div className="terms">
//           <h3>Terms & Conditions</h3>
//           <ul>
//             {t.terms.map((term) => (
//               <li key={term}>{term}</li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       <section id="clinics" className="clinics">
//         <h2>{t.clinicTitle}</h2>
//         <p>{t.clinicText}</p>

//         <img src={photos.clinic} alt="clinic" />

//         <div className="clinic-grid">
//           {t.cities.map((city) => (
//             <div key={city}>
//               <h3>{city}</h3>
//               <p>+91-7703-9502-XX</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer>
//         <h2>{t.footer}</h2>
//         <p>www.parivarseva.org | Helpline: 1800-123-7075</p>
//       </footer>
//     </div>
//   );
// }



import React from "react";
import "./App.css";

const img = {
  hero: "https://www.theigc.org/sites/default/files/styles/og_image/public/2024-03/Mother%20holds%20child%20while%20health%20worker%20administers%20an%20immunisation%20shot_0.jpg?h=d3b3e1d7&itok=-WkR8zy_?auto=format&fit=crop&w=1200&q=80",
  nutrition: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Community_health_worker_gives_a_vaccination_in_Odisha_state%2C_India_%288380317750%29.jpg/960px-Community_health_worker_gives_a_vaccination_in_Odisha_state%2C_India_%288380317750%29.jpg",
  pad: "https://cdn.prod.website-files.com/67f3913067a711c244440894/69d33eab86fe792c6544c5dd_womenguju.jpg",
  blood: "https://www.shutterstock.com/image-photo/concept-indian-rural-women-health-260nw-2559820611.jpg",
  vaccine: "https://www.shutterstock.com/image-photo/young-woman-doctor-checking-blood-260nw-2249870979.jpg",
  cancer: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguJzaU1YOsw0DZqbKsL_eUWa0DcmY-A9y4w&s",
  sports: "https://terredeshommessuisse.ch/wp-content/uploads/2024/05/jeune-fille-inde-768x576.jpg",
  study: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFJv1zPFRmysgXjjl44uknEdqBJgMEOW8lw&s",
  doctor: "https://www.shutterstock.com/image-photo/concept-indian-rural-women-health-260nw-2559437759.jpg",
  clinic: "https://www.shutterstock.com/image-photo/concept-indian-rural-women-health-260nw-2559820611.jpg",
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80",
};

const translations = {
  en: {
    home: "🏠 Home",
    awareness: "🧑‍🏫 Awareness Sessions",
    nutrition: "🥗 Nutrition & Health",
    women: "💎 Women’s Health",
    wellbeing: "💙 Well Being",
    vouchers: "🎁 Gift Vouchers",
    clinics: "🏥 Stree Clinics",
    contact: "☎ Contact Us",

    hero1: "Main Hun",
    hero2: "Stree,",
    hero3: "Main Hun",
    hero4: "Kaabil",
    shine: "Your Time to Grow, Learn & Shine",
    prepare: "Preparing Young Girls For A Healthy Transition To Adulthood",
    age: "Young Girls — 10 to 19 Years",

    awarenessTitle: "Awareness Sessions on",
    nutritionTitle: "Nutrition & Healthy Food",
    nutritionSub: "Good nutrition helps you stay active, focused and strong.",
    wellbeingTitle: "Health & Well Being",
    wellbeingSub: "Safe choices start with right information.",
    voucherTitle: "Gift Vouchers",
    termsTitle: "TERMS & CONDITIONS",
    helpTitle: "Where to Seek Help",
    helpText:
      "Adolescents can access safe, confidential and friendly health services at Stree Clinic and young-girls friendly health clinics.",
    clinicTitle: "Stree Clinics in Kolkata",
    footerWebsite: "🌐 www.parivarseva.org",
    footerHelpline: "📞 Helpline : 1800-123-7075",

    topics: [
      "Nutrition & Anemia Prevention",
      "Hygienic Menstrual Practices",
      "Anemia Prevention",
      "HPV & Other Vaccine Awareness",
      "Prevention of Breast & Cervical Cancers",
    ],

    duringTitle: "During this Age:",
    during: [
      "Your body grows & changes rapidly",
      "Your thoughts and emotions develop",
      "You build friendships and relationships",
      "You learn independence and responsibility",
    ],

    timeTitle: "This is time to:",
    time: [
      "Discover your strengths",
      "Build confidence",
      "Develop healthy habits",
      "Shape your future",
      "Understand what is good and bad for your health",
    ],

    balancedTitle: "Eat a Balanced Diet",
    balanced: [
      "Grains, pulses & legumes",
      "Green leafy vegetables",
      "Fresh fruits",
      "Milk & dairy products",
      "Eggs, nuts & seeds",
      "Animal proteins if preferred",
    ],

    habitsTitle: "Healthy Habits",
    habits: [
      "Do not skip breakfast",
      "Eat meals at regular intervals",
      "Drink 6–8 glasses of water daily",
      "Limit junk food",
      "Stay physically active",
      "Get adequate sleep",
    ],

    benefitsTitle: "Benefits of Good Nutrition",
    benefits: [
      "Strong immunity",
      "Healthy growth",
      "Better academic performance",
      "Increased energy",
      "Improved confidence",
      "Better menstrual health",
    ],

    pcosTitle: "PCOS / PCOD Awareness",
    pcos: [
      "Irregular periods",
      "Acne",
      "Weight changes",
      "Excess hair growth",
      "Balanced diet",
      "Exercise & stress management",
    ],

    rtiTitle: "RTI / STI Awareness",
    rti: [
      "Unusual discharge",
      "Itching or irritation",
      "Pain or discomfort",
      "Maintain hygiene",
      "Seek early medical care",
    ],

    cancerTitle: "Cancer Awareness",
    cancer: [
      "Breast health for girls",
      "Report unusual lump or pain",
      "Cervical health",
      "Follow vaccination advice",
      "Regular screening later in life",
    ],

    vouchersList: [
      "FLAT 50% OFF",
      "FLAT 30% OFF",
      "FLAT 10% OFF",
      "FLAT ₹200 OFF",
      "FLAT ₹500 OFF",
      "FLAT ₹1000 OFF",
    ],

    voucherSub: "On Your Health Checkup / Purchases",

    terms: [
      "Non-returnable purchase.",
      "Valid only at authorised Bata retail stores / Stree Clinic as applicable.",
      "No exchange or return policy.",
      "Voucher is valid for six months from the date of issue.",
      "Identity verification may be required.",
    ],
  },

  hi: {
    home: "🏠 होम",
    awareness: "🧑‍🏫 जागरूकता सत्र",
    nutrition: "🥗 पोषण और स्वास्थ्य",
    women: "💎 महिला स्वास्थ्य",
    wellbeing: "💙 स्वास्थ्य व कल्याण",
    vouchers: "🎁 उपहार वाउचर",
    clinics: "🏥 स्त्री क्लिनिक",
    contact: "☎ संपर्क करें",

    hero1: "मैं हूँ",
    hero2: "स्त्री,",
    hero3: "मैं हूँ",
    hero4: "काबिल",
    shine: "बढ़ने, सीखने और चमकने का समय",
    prepare: "किशोरियों को स्वस्थ वयस्कता के लिए तैयार करना",
    age: "किशोरियाँ — 10 से 19 वर्ष",

    awarenessTitle: "जागरूकता सत्र",
    nutritionTitle: "पोषण और स्वस्थ भोजन",
    nutritionSub: "अच्छा पोषण आपको सक्रिय, केंद्रित और मजबूत रखता है।",
    wellbeingTitle: "स्वास्थ्य और कल्याण",
    wellbeingSub: "सही जानकारी से सुरक्षित निर्णय शुरू होते हैं।",
    voucherTitle: "उपहार वाउचर",
    termsTitle: "नियम और शर्तें",
    helpTitle: "मदद कहाँ मिलेगी",
    helpText:
      "किशोरियाँ स्त्री क्लिनिक और युवा-मैत्री स्वास्थ्य केंद्रों पर सुरक्षित, गोपनीय और friendly स्वास्थ्य सेवाएँ ले सकती हैं।",
    clinicTitle: "कोलकाता में स्त्री क्लिनिक",
    footerWebsite: "🌐 www.parivarseva.org",
    footerHelpline: "📞 हेल्पलाइन : 1800-123-7075",

    topics: [
      "पोषण और एनीमिया की रोकथाम",
      "स्वच्छ मासिक धर्म अभ्यास",
      "एनीमिया की रोकथाम",
      "HPV और अन्य टीकों की जानकारी",
      "स्तन और गर्भाशय कैंसर की रोकथाम",
    ],

    duringTitle: "इस उम्र में:",
    during: [
      "आपका शरीर तेजी से बढ़ता और बदलता है",
      "आपके विचार और भावनाएँ विकसित होती हैं",
      "आप दोस्ती और रिश्ते बनाते हैं",
      "आप स्वतंत्रता और जिम्मेदारी सीखते हैं",
    ],

    timeTitle: "यह समय है:",
    time: [
      "अपनी ताकत पहचानने का",
      "आत्मविश्वास बढ़ाने का",
      "स्वस्थ आदतें विकसित करने का",
      "अपने भविष्य को आकार देने का",
      "स्वास्थ्य के लिए क्या अच्छा और बुरा है समझने का",
    ],

    balancedTitle: "संतुलित आहार लें",
    balanced: [
      "अनाज, दालें और फलियाँ",
      "हरी पत्तेदार सब्जियाँ",
      "ताजे फल",
      "दूध और डेयरी उत्पाद",
      "अंडे, मेवे और बीज",
      "यदि पसंद हो तो पशु प्रोटीन",
    ],

    habitsTitle: "स्वस्थ आदतें",
    habits: [
      "नाश्ता न छोड़ें",
      "समय पर भोजन करें",
      "रोज 6–8 गिलास पानी पिएं",
      "जंक फूड कम करें",
      "शारीरिक रूप से सक्रिय रहें",
      "पर्याप्त नींद लें",
    ],

    benefitsTitle: "अच्छे पोषण के फायदे",
    benefits: [
      "मजबूत प्रतिरक्षा",
      "स्वस्थ विकास",
      "बेहतर पढ़ाई प्रदर्शन",
      "अधिक ऊर्जा",
      "आत्मविश्वास में सुधार",
      "बेहतर मासिक धर्म स्वास्थ्य",
    ],

    pcosTitle: "PCOS / PCOD जागरूकता",
    pcos: [
      "अनियमित पीरियड्स",
      "मुंहासे",
      "वजन में बदलाव",
      "अधिक बाल बढ़ना",
      "संतुलित आहार",
      "व्यायाम और तनाव नियंत्रण",
    ],

    rtiTitle: "RTI / STI जागरूकता",
    rti: [
      "असामान्य डिस्चार्ज",
      "खुजली या जलन",
      "दर्द या असुविधा",
      "स्वच्छता बनाए रखें",
      "जल्दी डॉक्टर से सलाह लें",
    ],

    cancerTitle: "कैंसर जागरूकता",
    cancer: [
      "लड़कियों के लिए स्तन स्वास्थ्य",
      "गांठ या दर्द दिखे तो डॉक्टर को बताएं",
      "गर्भाशय स्वास्थ्य",
      "टीकाकरण सलाह का पालन करें",
      "बाद के जीवन में नियमित जांच जरूरी",
    ],

    vouchersList: [
      "50% छूट",
      "30% छूट",
      "10% छूट",
      "₹200 छूट",
      "₹500 छूट",
      "₹1000 छूट",
    ],

    voucherSub: "हेल्थ चेकअप / खरीदारी पर",

    terms: [
      "खरीदारी नॉन-रिटर्नेबल है।",
      "केवल अधिकृत Bata स्टोर / Stree Clinic में मान्य।",
      "एक्सचेंज या रिटर्न मान्य नहीं।",
      "वाउचर जारी होने की तारीख से 6 महीने तक मान्य है।",
      "पहचान सत्यापन की आवश्यकता हो सकती है।",
    ],
  },

  gu: {
    home: "🏠 હોમ",
    awareness: "🧑‍🏫 જાગૃતિ સત્ર",
    nutrition: "🥗 પોષણ અને આરોગ્ય",
    women: "💎 મહિલા આરોગ્ય",
    wellbeing: "💙 સુખાકારી",
    vouchers: "🎁 ગિફ્ટ વાઉચર",
    clinics: "🏥 સ્ત્રી ક્લિનિક",
    contact: "☎ સંપર્ક",

    hero1: "હું છું",
    hero2: "સ્ત્રી,",
    hero3: "હું છું",
    hero4: "કાબિલ",
    shine: "વધવાનો, શીખવાનો અને ચમકવાનો સમય",
    prepare: "યુવાન છોકરીઓને સ્વસ્થ વયસ્કતા માટે તૈયાર કરવું",
    age: "યુવાન છોકરીઓ — 10 થી 19 વર્ષ",

    awarenessTitle: "જાગૃતિ સત્રો",
    nutritionTitle: "પોષણ અને સ્વસ્થ ખોરાક",
    nutritionSub: "સારો પોષણ તમને સક્રિય, કેન્દ્રિત અને મજબૂત રાખે છે.",
    wellbeingTitle: "આરોગ્ય અને સુખાકારી",
    wellbeingSub: "સાચી માહિતીથી સલામત પસંદગી શરૂ થાય છે.",
    voucherTitle: "ગિફ્ટ વાઉચર",
    termsTitle: "નિયમો અને શરતો",
    helpTitle: "મદદ ક્યાં મળશે",
    helpText:
      "કિશોરીઓ સ્ત્રી ક્લિનિક અને યુવતીઓ માટે અનુકૂળ આરોગ્ય કેન્દ્રોમાં સલામત અને ગોપનીય સેવાઓ મેળવી શકે છે.",
    clinicTitle: "કોલકાતામાં સ્ત્રી ક્લિનિક",
    footerWebsite: "🌐 www.parivarseva.org",
    footerHelpline: "📞 હેલ્પલાઇન : 1800-123-7075",

    topics: [
      "પોષણ અને એનિમિયા નિવારણ",
      "સ્વચ્છ માસિક પ્રથા",
      "એનિમિયા નિવારણ",
      "HPV અને અન્ય રસીની જાગૃતિ",
      "સ્તન અને સર્વિકલ કેન્સર નિવારણ",
    ],

    duringTitle: "આ ઉંમરમાં:",
    during: [
      "તમારું શરીર ઝડપથી વધે અને બદલાય છે",
      "તમારા વિચારો અને ભાવનાઓ વિકસે છે",
      "તમે મિત્રતા અને સંબંધો બનાવો છો",
      "તમે સ્વતંત્રતા અને જવાબદારી શીખો છો",
    ],

    timeTitle: "આ સમય છે:",
    time: [
      "તમારી શક્તિઓ ઓળખવાનો",
      "આત્મવિશ્વાસ વધારવાનો",
      "સ્વસ્થ આદતો વિકસાવવાનો",
      "તમારું ભવિષ્ય ઘડવાનો",
      "આરોગ્ય માટે શું સારું અને ખરાબ છે તે સમજવાનો",
    ],

    balancedTitle: "સંતુલિત આહાર લો",
    balanced: [
      "અનાજ, દાળ અને કઠોળ",
      "લીલા પાંદડાવાળી શાકભાજી",
      "તાજા ફળો",
      "દૂધ અને ડેરી ઉત્પાદનો",
      "ઈંડા, બદામ અને બીજ",
      "જો પસંદ હોય તો પ્રાણી પ્રોટીન",
    ],

    habitsTitle: "સ્વસ્થ આદતો",
    habits: [
      "નાસ્તો છોડશો નહીં",
      "નિયમિત સમયે ભોજન લો",
      "દરરોજ 6–8 ગ્લાસ પાણી પીઓ",
      "જંક ફૂડ ઓછું કરો",
      "શારીરિક રીતે સક્રિય રહો",
      "પૂરતી ઊંઘ લો",
    ],

    benefitsTitle: "સારા પોષણના ફાયદા",
    benefits: [
      "મજબૂત રોગપ્રતિકારક શક્તિ",
      "સ્વસ્થ વિકાસ",
      "વધુ સારું શૈક્ષણિક પ્રદર્શન",
      "વધુ ઊર્જા",
      "આત્મવિશ્વાસમાં વધારો",
      "વધુ સારું માસિક આરોગ્ય",
    ],

    pcosTitle: "PCOS / PCOD જાગૃતિ",
    pcos: [
      "અનિયમિત પીરિયડ્સ",
      "ખીલ",
      "વજનમાં ફેરફાર",
      "વધારે વાળ વધવા",
      "સંતુલિત આહાર",
      "વ્યાયામ અને તણાવ નિયંત્રણ",
    ],

    rtiTitle: "RTI / STI જાગૃતિ",
    rti: [
      "અસામાન્ય સ્રાવ",
      "ખંજવાળ અથવા ચળવળ",
      "દર્દ અથવા અસુવિધા",
      "વ્યક્તિગત સ્વચ્છતા રાખો",
      "વહેલી તકે ડોક્ટરની સલાહ લો",
    ],

    cancerTitle: "કેન્સર જાગૃતિ",
    cancer: [
      "છોકરીઓ માટે સ્તન આરોગ્ય",
      "ગાંઠ અથવા દુખાવો જણાય તો ડોક્ટરને કહો",
      "સર્વિકલ આરોગ્ય",
      "રસીકરણની સલાહ અનુસરો",
      "પછીના જીવનમાં નિયમિત તપાસ જરૂરી છે",
    ],

    vouchersList: [
      "50% છૂટ",
      "30% છૂટ",
      "10% છૂટ",
      "₹200 છૂટ",
      "₹500 છૂટ",
      "₹1000 છૂટ",
    ],

    voucherSub: "હેલ્થ ચેકઅપ / ખરીદી પર",

    terms: [
      "ખરીદી નોન-રિટર્નેબલ છે.",
      "માત્ર અધિકૃત Bata સ્ટોર / Stree Clinic માં માન્ય.",
      "એક્સચેન્જ અથવા રિટર્ન માન્ય નથી.",
      "વાઉચર જારી તારીખથી 6 મહિના માટે માન્ય છે.",
      "ઓળખ ચકાસણી જરૂરી હોઈ શકે છે.",
    ],
  },

  mr: {
    home: "🏠 होम",
    awareness: "🧑‍🏫 जागरूकता सत्र",
    nutrition: "🥗 पोषण आणि आरोग्य",
    women: "💎 महिलांचे आरोग्य",
    wellbeing: "💙 आरोग्य व कल्याण",
    vouchers: "🎁 गिफ्ट व्हाउचर",
    clinics: "🏥 स्त्री क्लिनिक",
    contact: "☎ संपर्क",

    hero1: "मी आहे",
    hero2: "स्त्री,",
    hero3: "मी आहे",
    hero4: "काबिल",
    shine: "वाढण्याचा, शिकण्याचा आणि चमकण्याचा वेळ",
    prepare: "मुलींना निरोगी प्रौढत्वासाठी तयार करणे",
    age: "मुली — 10 ते 19 वर्षे",

    awarenessTitle: "जागरूकता सत्र",
    nutritionTitle: "पोषण आणि आरोग्यदायी अन्न",
    nutritionSub: "चांगले पोषण तुम्हाला सक्रिय, लक्ष केंद्रित आणि मजबूत ठेवते.",
    wellbeingTitle: "आरोग्य आणि कल्याण",
    wellbeingSub: "योग्य माहितीमुळे सुरक्षित निवडी सुरू होतात.",
    voucherTitle: "गिफ्ट व्हाउचर",
    termsTitle: "नियम आणि अटी",
    helpTitle: "मदत कुठे मिळेल",
    helpText:
      "किशोरवयीन मुलींना स्त्री क्लिनिक आणि मुलींसाठी अनुकूल आरोग्य केंद्रांमध्ये सुरक्षित, गोपनीय आणि मैत्रीपूर्ण आरोग्य सेवा मिळू शकतात.",
    clinicTitle: "कोलकाता येथील स्त्री क्लिनिक",
    footerWebsite: "🌐 www.parivarseva.org",
    footerHelpline: "📞 हेल्पलाइन : 1800-123-7075",

    topics: [
      "पोषण आणि अॅनिमिया प्रतिबंध",
      "स्वच्छ मासिक पाळी पद्धती",
      "अॅनिमिया प्रतिबंध",
      "HPV आणि इतर लसींची जागरूकता",
      "स्तन आणि गर्भाशय मुख कर्करोग प्रतिबंध",
    ],

    duringTitle: "या वयात:",
    during: [
      "तुमचे शरीर वेगाने वाढते आणि बदलते",
      "तुमचे विचार आणि भावना विकसित होतात",
      "तुम्ही मैत्री आणि नाती निर्माण करता",
      "तुम्ही स्वातंत्र्य आणि जबाबदारी शिकता",
    ],

    timeTitle: "हा वेळ आहे:",
    time: [
      "तुमची ताकद ओळखण्याचा",
      "आत्मविश्वास वाढवण्याचा",
      "आरोग्यदायी सवयी लावण्याचा",
      "तुमचे भविष्य घडवण्याचा",
      "आरोग्यासाठी काय चांगले व वाईट आहे ते समजण्याचा",
    ],

    balancedTitle: "संतुलित आहार घ्या",
    balanced: [
      "धान्य, डाळी आणि कडधान्ये",
      "हिरव्या पालेभाज्या",
      "ताजी फळे",
      "दूध आणि दुग्धजन्य पदार्थ",
      "अंडी, सुका मेवा आणि बिया",
      "आवड असल्यास प्राणी प्रोटीन",
    ],

    habitsTitle: "आरोग्यदायी सवयी",
    habits: [
      "नाश्ता टाळू नका",
      "नियमित वेळेत जेवण करा",
      "दररोज 6–8 ग्लास पाणी प्या",
      "जंक फूड कमी करा",
      "शारीरिकदृष्ट्या सक्रिय रहा",
      "पुरेशी झोप घ्या",
    ],

    benefitsTitle: "चांगल्या पोषणाचे फायदे",
    benefits: [
      "मजबूत रोगप्रतिकारक शक्ती",
      "निरोगी वाढ",
      "चांगली शैक्षणिक कामगिरी",
      "अधिक ऊर्जा",
      "आत्मविश्वासात वाढ",
      "चांगले मासिक पाळी आरोग्य",
    ],

    pcosTitle: "PCOS / PCOD जागरूकता",
    pcos: [
      "अनियमित पाळी",
      "मुरुम",
      "वजनात बदल",
      "जास्त केस वाढणे",
      "संतुलित आहार",
      "व्यायाम आणि ताण नियंत्रण",
    ],

    rtiTitle: "RTI / STI जागरूकता",
    rti: [
      "असामान्य स्त्राव",
      "खाज किंवा जळजळ",
      "दुखणे किंवा अस्वस्थता",
      "स्वच्छता ठेवा",
      "लवकर वैद्यकीय सल्ला घ्या",
    ],

    cancerTitle: "कर्करोग जागरूकता",
    cancer: [
      "मुलींसाठी स्तन आरोग्य",
      "गाठ किंवा वेदना दिसल्यास डॉक्टरांना सांगा",
      "गर्भाशय मुख आरोग्य",
      "लसीकरण सल्ला पाळा",
      "नंतरच्या आयुष्यात नियमित तपासणी महत्त्वाची",
    ],

    vouchersList: [
      "50% सूट",
      "30% सूट",
      "10% सूट",
      "₹200 सूट",
      "₹500 सूट",
      "₹1000 सूट",
    ],

    voucherSub: "हेल्थ चेकअप / खरेदीवर",

    terms: [
      "खरेदी नॉन-रिटर्नेबल आहे.",
      "फक्त अधिकृत Bata स्टोअर / Stree Clinic मध्ये वैध.",
      "एक्सचेंज किंवा रिटर्न मान्य नाही.",
      "व्हाउचर जारी तारखेपासून 6 महिन्यांसाठी वैध आहे.",
      "ओळख पडताळणी आवश्यक असू शकते.",
    ],
  },
};

export default function App() {
  const [lang, setLang] = React.useState("en");
  const t = translations[lang];

  return (
    <div className="page">
      <header className="topHeader">
        <div className="bataLogo">
          <div className="shoeMark">👟</div>
          <div>
            <h1>Bata</h1>
            <p>WOMEN'S PROGRAM</p>
            <small>Giving women a step ahead</small>
          </div>
        </div>

        <div className="partnerLogos">
          <div className="miniLogo">
            PARIVAR
            <br />
            SEVA
          </div>
          <div className="streeLogo">
            Stree
            <br />
            <span>+ CLINIC</span>
          </div>
          <p>
            A Unit of Parivar Seva Sanstha
            <br />
            <b>for Women of all Ages</b>
          </p>
        </div>

        <div className="languageBox">
          <label>Language / भाषा / ભાષા / भाषा</label>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujarati</option>
            <option value="mr">Marathi</option>
          </select>
        </div>
      </header>

      <nav className="nav">
        {[
          t.home,
          t.awareness,
          t.nutrition,
          t.women,
          t.wellbeing,
          t.vouchers,
          t.clinics,
          t.contact,
        ].map((item) => (
          <a key={item}>{item}</a>
        ))}
      </nav>

      <section className="hero">
        <div className="floatingBubble bubble1"></div>
        <div className="floatingBubble bubble2"></div>
        <div className="floatingBubble bubble3"></div>

        <div className="heroText">
          <h2>
            {t.hero1} <span>{t.hero2}</span>
            <br />
            {t.hero3} <b>{t.hero4}</b>
          </h2>
          <p>{t.shine}</p>
          <div className="pill pink">{t.prepare}</div>
          <div className="pill blue">{t.age}</div>
        </div>

        <img src={img.hero} alt="young girls" />
      </section>

      <section className="awareness">
        <h2 className="title">{t.awarenessTitle}</h2>

        <div className="topicGrid">
          {t.topics.map((title, index) => {
            const photos = [
              img.nutrition,
              img.pad,
              img.blood,
              img.vaccine,
              img.cancer,
            ];
            const icons = ["🥗", "🌸", "🩸", "💉", "🎗️"];

            return (
              <div className="topicCard" key={title}>
                <div className="topicIcon">{icons[index]}</div>
                <img src={photos[index]} alt={title} />
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>

        <div className="ageGrid">
          <img src={img.sports} alt="sports" />

          <div className="softCard green">
            <h3>{t.duringTitle}</h3>
            <ul>
              {t.during.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="softCard pink">
            <h3>{t.timeTitle}</h3>
            <ul>
              {t.time.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <img src={img.study} alt="study" />
        </div>
      </section>

      <main className="mainGrid">
        <section className="leftCol">
          <h2 className="blueTitle">{t.nutritionTitle}</h2>
          <p>{t.nutritionSub}</p>

          <div className="cards3">
            <InfoCard title={t.balancedTitle} img={img.nutrition} items={t.balanced} />
            <InfoCard title={t.habitsTitle} img={img.doctor} items={t.habits} />
            <InfoCard title={t.benefitsTitle} img={img.sports} items={t.benefits} />
          </div>

          <h2 className="blueTitle">{t.wellbeingTitle}</h2>
          <p>{t.wellbeingSub}</p>

          <div className="healthGrid">
            <InfoCard title={t.pcosTitle} img={img.doctor} items={t.pcos} />
            <InfoCard title={t.rtiTitle} img={img.clinic} items={t.rti} />
            <InfoCard title={t.cancerTitle} img={img.cancer} items={t.cancer} />
          </div>
        </section>

        <aside className="rightCol">
          <section className="voucherBox">
            <h2>
              <span>Bata</span> KISHORI SWASTHYA
            </h2>
            <h3>{t.voucherTitle} 🎁</h3>

            <div className="voucherGrid">
              {t.vouchersList.map((v) => (
                <div className="voucher" key={v}>
                  <strong>{v}</strong>
                  <p>{t.voucherSub}</p>
                </div>
              ))}
            </div>

            <div className="terms">
              <h4>{t.termsTitle}</h4>
              <ul>
                {t.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </div>
          </section>
        </aside>
      </main>

      <section className="clinicSection">
        <div className="helpCard">
          <h2>{t.helpTitle}</h2>
          <p>{t.helpText}</p>
          <img src={img.doctor} alt="doctor" />
        </div>

        <div className="mapCard">
          <h2>{t.clinicTitle}</h2>
          <img src={img.map} alt="map" />
          <ul>
            <li>📍 BARASAT — Barrackpore Road — +91-7703-9502-84</li>
            <li>📍 BEHALA — 39, Diamond Harbour Road — +91-7703-9503-11</li>
            <li>📍 GARIAHAT — 48, Gariahat Road — +91-7703-9502-94</li>
            <li>📍 HATIBAGAN — 100, Arabindo Sarani — +91-7703-9502-93</li>
            <li>📍 TOLLYGUNGE — 284 NSC Bose Road — +91-7703-9503-52</li>
          </ul>
        </div>

        <div className="streePanel">
          <div className="bigStree">
            Stree
            <br />
            <span>+ CLINIC</span>
          </div>
          <p>A Unit of Parivar Seva Sanstha</p>
          <h3>for Women of all Ages</h3>
          <h2>www.streeclinic.com</h2>
          <p>Stay Connected on: Facebook | X | Instagram | YouTube</p>
          <div className="stats">
            <b>30</b> Stree Clinics in <b>11</b> States & <b>15</b> Key Cities of
            India
          </div>
        </div>
      </section>

      <footer>
        <div>{t.footerWebsite}</div>
        <div>{t.footerHelpline}</div>
      </footer>
    </div>
  );
}

function InfoCard({ title, img, items }) {
  return (
    <div className="infoCard">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}