import React, { useState } from "react";
import "./App.css";

const ASSETS = {
  bataLogo: "/assets/bata-logo.png",
    bataHeroLogo: "/assets/bata-logo-hero.png",
  streeLogo: "/assets/stree-logo.png",
  parivarLogo: "/assets/parivar-seva-logo.png",
  heroGirl: "/assets/hero-girl.png",
  nutrition: "/assets/nutrition.png",
  hygiene: "/assets/hygiene.png",
  anemia: "/assets/anemia.png",
  vaccine: "/assets/vaccine.png",
  sports1: "/assets/sports-1.png",
  sports2: "/assets/sports-2.png",
  sports3: "/assets/sports-3.png",
  clinic: "/assets/clinic.png",
};

const content = {
  en: {
    langName: "English",
    nav: ["Home", "Awareness", "Health", "Vouchers", "Help"],
    heroTitle: "Bata Kishori Swasthya",
    heroSub: "Preparing Young Girls for a Healthy Transition to Adulthood",
    heroText:
      "A CSR initiative focused on adolescent girls, health awareness, confidence, hygiene, nutrition, anemia prevention, vaccine awareness, and early cancer prevention.",
    cta: "Explore Program",
    ageTitle: "Young Girls — 10 to 19 Years",
    ageText:
      "Adolescence is a special, exciting and sometimes challenging period of life. It is a time of rapid growth, learning, discovery and new opportunities.",
    duringAge: "During this age",
    duringPoints: [
      "Your body grows and changes rapidly",
      "Your thoughts and emotions develop",
      "You build friendships and relationships",
      "You learn independence and responsibility",
    ],
    timeTitle: "This is time to",
    timePoints: [
      "Discover your strengths",
      "Build confidence",
      "Develop healthy habits",
      "Shape your future",
      "Understand what is good and bad for your health",
    ],
    awarenessTitle: "Awareness Sessions",
    awarenessCards: [
      {
        title: "Nutrition & Healthy Food",
        img: ASSETS.nutrition,
        desc: "Good nutrition helps you stay active, focused and strong.",
        points: [
          "Eat grains, pulses and legumes",
          "Include green leafy vegetables and fresh fruits",
          "Drink 6–8 glasses of clean water daily",
          "Avoid junk food and sugary drinks",
          "Get adequate sleep",
        ],
      },
      {
        title: "Prevention & Anemia Awareness",
        img: ASSETS.anemia,
        desc: "Anemia is caused by low iron levels and may reduce energy and concentration.",
        points: [
          "Weakness, tiredness and fatigue can be signs",
          "Eat iron-rich foods like green leafy vegetables, jaggery and dates",
          "Include Vitamin-C rich foods",
          "Take supplements only if advised by a doctor",
        ],
      },
      {
        title: "Hygiene & Menstrual Health",
        img: ASSETS.hygiene,
        desc: "Menstruation is natural and healthy. It is not a disease.",
        points: [
          "Use clean sanitary pads or menstrual products",
          "Change every 4–6 hours",
          "Wash hands before and after changing",
          "Dispose used products safely",
          "Girls can continue studies, sports and daily activities",
        ],
      },
      {
        title: "HPV & Vaccine Awareness",
        img: ASSETS.vaccine,
        desc: "Vaccination and correct guidance can help protect long-term health.",
        points: [
          "Follow medical advice",
          "Understand vaccine benefits",
          "Speak to trusted health providers",
          "Take preventive care seriously",
        ],
      },
    ],
    healthTitle: "Health & Well Being",
    healthText:
      "Understanding your body helps you make safe and responsible choices.",
    healthCards: [
      "Awareness about reproductive organs and body changes",
      "Respectful and healthy relationships",
      "Awareness about infections",
      "Good personal hygiene",
      "PCOS / PCOD awareness",
      "Breast and cervical cancer awareness",
    ],
    vouchersTitle: "Bata Stree Kishori Swasthya Vouchers",
    vouchers: [
      "Flat 50% OFF on your health checkup at Stree Clinic",
      "Flat 30% OFF on your health checkup at Stree Clinic",
      "Flat 10% OFF on your health checkup at Stree Clinic",
      "Flat ₹200 OFF on purchases above ₹1000",
      "Flat ₹500 OFF on purchases above ₹1500",
      "Flat ₹1000 OFF on purchases above ₹3000",
    ],
    termsTitle: "Voucher Terms & Conditions",
    terms: [
      "All purchases using this voucher are strictly non-returnable and non-refundable.",
      "Voucher is valid only at authorised Bata retail stores or authorised Stree Clinic locations as applicable.",
      "Products purchased using this voucher cannot be exchanged or returned once transaction is completed.",
      "Voucher validity is six months from date of issue.",
      "The voucher is non-transferable and can be redeemed only by the named beneficiary.",
    ],
    helpTitle: "Where to Seek Help",
    helpText:
      "Adolescents can access safe, confidential and friendly health services at Stree Clinic and young-girls-friendly health clinics.",
    clinics: [
      "Barasat — Barrackpore Road",
      "Behala — 39, Diamond Harbour Road",
      "Gariahat — 48, Gariahat Road",
      "Hatibagan — 100, Arabindo Sarani",
      "Tollygunge — 284 NSC Bose Road",
    ],
    footer: "Main Hun Stree, Main Hun Kaabil",
  },

  hi: {
    langName: "हिंदी",
    nav: ["होम", "जागरूकता", "स्वास्थ्य", "वाउचर", "सहायता"],
    heroTitle: "बाटा किशोरी स्वास्थ्य",
    heroSub: "युवा लड़कियों को स्वस्थ बदलाव के लिए तैयार करना",
    heroText:
      "यह पहल किशोरियों के स्वास्थ्य, आत्मविश्वास, पोषण, स्वच्छता, एनीमिया रोकथाम, वैक्सीन जागरूकता और कैंसर की शुरुआती रोकथाम पर केंद्रित है।",
    cta: "प्रोग्राम देखें",
    ageTitle: "युवा लड़कियां — 10 से 19 वर्ष",
    ageText:
      "किशोरावस्था जीवन का खास, रोमांचक और कभी-कभी चुनौतीपूर्ण समय है। यह तेजी से बढ़ने, सीखने और नए अवसरों का समय है।",
    duringAge: "इस उम्र में",
    duringPoints: [
      "शरीर तेजी से बढ़ता और बदलता है",
      "विचार और भावनाएं विकसित होती हैं",
      "दोस्ती और रिश्ते बनते हैं",
      "स्वतंत्रता और जिम्मेदारी सीखते हैं",
    ],
    timeTitle: "यह समय है",
    timePoints: [
      "अपनी ताकत पहचानने का",
      "आत्मविश्वास बढ़ाने का",
      "स्वस्थ आदतें बनाने का",
      "अपना भविष्य संवारने का",
      "स्वास्थ्य के लिए सही-गलत समझने का",
    ],
    awarenessTitle: "जागरूकता सत्र",
    awarenessCards: [
      {
        title: "पोषण और स्वस्थ भोजन",
        img: ASSETS.nutrition,
        desc: "अच्छा पोषण आपको सक्रिय, केंद्रित और मजबूत रखता है।",
        points: [
          "अनाज, दालें और फलियां खाएं",
          "हरी सब्जियां और ताजे फल लें",
          "रोज 6–8 गिलास साफ पानी पिएं",
          "जंक फूड और मीठे पेय से बचें",
          "पर्याप्त नींद लें",
        ],
      },
      {
        title: "एनीमिया रोकथाम",
        img: ASSETS.anemia,
        desc: "एनीमिया शरीर में आयरन की कमी से होता है।",
        points: [
          "कमजोरी और थकान इसके संकेत हो सकते हैं",
          "हरी सब्जियां, गुड़ और खजूर खाएं",
          "विटामिन-C वाले भोजन शामिल करें",
          "डॉक्टर की सलाह पर ही सप्लीमेंट लें",
        ],
      },
      {
        title: "स्वच्छता और मासिक धर्म स्वास्थ्य",
        img: ASSETS.hygiene,
        desc: "मासिक धर्म प्राकृतिक और स्वस्थ प्रक्रिया है। यह बीमारी नहीं है।",
        points: [
          "साफ सैनिटरी पैड या उत्पाद इस्तेमाल करें",
          "हर 4–6 घंटे में बदलें",
          "हाथ धोना जरूरी है",
          "उपयोग किए गए उत्पाद सुरक्षित तरीके से फेंकें",
          "लड़कियां पढ़ाई और खेल जारी रख सकती हैं",
        ],
      },
      {
        title: "HPV और वैक्सीन जागरूकता",
        img: ASSETS.vaccine,
        desc: "वैक्सीन और सही सलाह लंबे समय तक स्वास्थ्य सुरक्षा देती है।",
        points: [
          "मेडिकल सलाह का पालन करें",
          "वैक्सीन के लाभ समझें",
          "विश्वसनीय स्वास्थ्य कर्मी से बात करें",
          "रोकथाम को गंभीरता से लें",
        ],
      },
    ],
    healthTitle: "स्वास्थ्य और कल्याण",
    healthText: "अपने शरीर को समझना सुरक्षित और जिम्मेदार चुनाव करने में मदद करता है।",
    healthCards: [
      "शरीर में बदलाव की जानकारी",
      "सम्मानजनक और स्वस्थ रिश्ते",
      "संक्रमणों की जागरूकता",
      "अच्छी व्यक्तिगत स्वच्छता",
      "PCOS / PCOD जागरूकता",
      "ब्रेस्ट और सर्वाइकल कैंसर जागरूकता",
    ],
    vouchersTitle: "बाटा स्त्री किशोरी स्वास्थ्य वाउचर",
    vouchers: [
      "Stree Clinic में हेल्थ चेकअप पर 50% छूट",
      "Stree Clinic में हेल्थ चेकअप पर 30% छूट",
      "Stree Clinic में हेल्थ चेकअप पर 10% छूट",
      "₹1000 से ऊपर खरीदारी पर ₹200 छूट",
      "₹1500 से ऊपर खरीदारी पर ₹500 छूट",
      "₹3000 से ऊपर खरीदारी पर ₹1000 छूट",
    ],
    termsTitle: "वाउचर नियम और शर्तें",
    terms: [
      "वाउचर से खरीदी गई वस्तुएं नॉन-रिटर्नेबल और नॉन-रिफंडेबल हैं।",
      "वाउचर केवल अधिकृत स्टोर या Stree Clinic पर मान्य है।",
      "खरीद पूरी होने के बाद एक्सचेंज या रिटर्न नहीं होगा।",
      "वाउचर जारी होने की तारीख से 6 महीने तक वैध है।",
      "वाउचर ट्रांसफर नहीं किया जा सकता।",
    ],
    helpTitle: "सहायता कहां लें",
    helpText:
      "किशोरियां Stree Clinic और young-girls-friendly health clinics में सुरक्षित और गोपनीय स्वास्थ्य सेवाएं ले सकती हैं।",
    clinics: [
      "बारासात — बैरकपुर रोड",
      "बेहाला — डायमंड हार्बर रोड",
      "गरियाहाट — गरियाहाट रोड",
      "हाटीबागान — अरबिंदो सरणी",
      "टॉलीगंज — NSC बोस रोड",
    ],
    footer: "मैं हूं स्त्री, मैं हूं काबिल",
  },

  gu: {
  langName: "ગુજરાતી",
  nav: ["હોમ", "જાગૃતિ", "આરોગ્ય", "વાઉચર", "મદદ"],
  heroTitle: "બાટા કિશોરી સ્વાસ્થ્ય",
  heroSub: "યુવા છોકરીઓને સ્વસ્થ બદલાવ માટે તૈયાર કરવું",
  heroText:
    "આ પહેલ કિશોરીઓના આરોગ્ય, આત્મવિશ્વાસ, પોષણ, સ્વચ્છતા, એનિમિયા નિવારણ, રસી જાગૃતિ અને કેન્સરના પ્રારંભિક નિવારણ પર કેન્દ્રિત છે.",
  cta: "પ્રોગ્રામ જુઓ",
  ageTitle: "યુવા છોકરીઓ — 10 થી 19 વર્ષ",
  ageText:
    "કિશોરાવસ્થા જીવનનો ખાસ, ઉત્સાહજનક અને ક્યારેક પડકારજનક સમય છે. આ ઝડપી વૃદ્ધિ, શીખવા અને નવી તકોનો સમય છે.",
  duringAge: "આ ઉંમરમાં",
  duringPoints: [
    "શરીર ઝડપથી વધે છે અને બદલાય છે",
    "વિચારો અને ભાવનાઓ વિકસે છે",
    "મિત્રતા અને સંબંધો બને છે",
    "સ્વતંત્રતા અને જવાબદારી શીખાય છે",
  ],
  timeTitle: "આ સમય છે",
  timePoints: [
    "તમારી શક્તિઓ ઓળખવાનો",
    "આત્મવિશ્વાસ વધારવાનો",
    "સ્વસ્થ આદતો બનાવવાનો",
    "તમારું ભવિષ્ય ઘડવાનો",
    "આરોગ્ય માટે શું સારું અને ખરાબ છે તે સમજવાનો",
  ],
  awarenessTitle: "જાગૃતિ સત્રો",
  awarenessCards: [
    {
      title: "પોષણ અને આરોગ્યદાયક ખોરાક",
      img: ASSETS.nutrition,
      desc: "સારું પોષણ તમને સક્રિય, કેન્દ્રિત અને મજબૂત રાખે છે.",
      points: [
        "અનાજ, દાળ અને કઠોળ ખાઓ",
        "લીલા શાકભાજી અને તાજા ફળો લો",
        "દરરોજ 6–8 ગ્લાસ સ્વચ્છ પાણી પીવો",
        "જંક ફૂડ અને મીઠાં પીણાં ટાળો",
        "પૂરતી ઊંઘ લો",
      ],
    },
    {
      title: "એનિમિયા નિવારણ",
      img: ASSETS.anemia,
      desc: "એનિમિયા શરીરમાં આયર્નની ઉણપને કારણે થાય છે.",
      points: [
        "નબળાઈ અને થાક તેના લક્ષણો હોઈ શકે છે",
        "લીલા શાકભાજી, ગોળ અને ખજૂર ખાઓ",
        "Vitamin-C ધરાવતો ખોરાક લો",
        "ડોક્ટરની સલાહથી જ સપ્લિમેન્ટ લો",
      ],
    },
    {
      title: "સ્વચ્છતા અને માસિક આરોગ્ય",
      img: ASSETS.hygiene,
      desc: "માસિક ધર્મ કુદરતી અને સ્વસ્થ પ્રક્રિયા છે. તે બીમારી નથી.",
      points: [
        "સ્વચ્છ sanitary products વાપરો",
        "દર 4–6 કલાકે બદલો",
        "હાથ સારી રીતે ધોવો",
        "વપરાયેલા products સુરક્ષિત રીતે ફેંકો",
        "છોકરીઓ અભ્યાસ અને રમત ચાલુ રાખી શકે છે",
      ],
    },
    {
      title: "HPV અને રસી જાગૃતિ",
      img: ASSETS.vaccine,
      desc: "રસી અને યોગ્ય સલાહ લાંબા સમય સુધી આરોગ્ય સુરક્ષા આપે છે.",
      points: [
        "મેડિકલ સલાહનું પાલન કરો",
        "રસીના લાભો સમજો",
        "વિશ્વાસપાત્ર આરોગ્ય કર્મચારી સાથે વાત કરો",
        "નિવારણને ગંભીરતાથી લો",
      ],
    },
  ],
  healthTitle: "આરોગ્ય અને સુખાકારી",
  healthText:
    "તમારા શરીરને સમજવાથી સુરક્ષિત અને જવાબદાર નિર્ણય લેવામાં મદદ મળે છે.",
  healthCards: [
    "શરીરમાં થતા ફેરફારોની માહિતી",
    "સન્માનપૂર્ણ અને સ્વસ્થ સંબંધો",
    "સંક્રમણ વિશે જાગૃતિ",
    "સારી વ્યક્તિગત સ્વચ્છતા",
    "PCOS / PCOD જાગૃતિ",
    "બ્રેસ્ટ અને સર્વિકલ કેન્સર જાગૃતિ",
  ],
  vouchersTitle: "બાટા સ્ત્રી કિશોરી સ્વાસ્થ્ય વાઉચર",
  vouchers: [
    "Stree Clinic માં હેલ્થ ચેકઅપ પર 50% છૂટ",
    "Stree Clinic માં હેલ્થ ચેકઅપ પર 30% છૂટ",
    "Stree Clinic માં હેલ્થ ચેકઅપ પર 10% છૂટ",
    "₹1000 થી વધુ ખરીદી પર ₹200 છૂટ",
    "₹1500 થી વધુ ખરીદી પર ₹500 છૂટ",
    "₹3000 થી વધુ ખરીદી પર ₹1000 છૂટ",
  ],
  termsTitle: "વાઉચર નિયમો અને શરતો",
  terms: [
    "વાઉચરથી ખરીદેલી વસ્તુઓ non-returnable અને non-refundable છે.",
    "વાઉચર માત્ર authorized Bata retail store અથવા Stree Clinic પર માન્ય છે.",
    "ખરીદી પૂર્ણ થયા પછી exchange અથવા return નહીં થાય.",
    "વાઉચર issue date થી 6 મહિના માટે માન્ય છે.",
    "વાઉચર transfer કરી શકાતું નથી.",
  ],
  helpTitle: "મદદ ક્યાંથી લેવી",
  helpText:
    "કિશોરીઓ Stree Clinic અને young-girls-friendly health clinics માં સુરક્ષિત અને ગુપ્ત આરોગ્ય સેવાઓ લઈ શકે છે.",
  clinics: [
    "બારાસાત — Barrackpore Road",
    "બેહાલા — Diamond Harbour Road",
    "ગરિયાહાટ — Gariahat Road",
    "હાટીબાગાન — Arabindo Sarani",
    "ટોલીગંજ — NSC Bose Road",
  ],
  footer: "હું છું સ્ત્રી, હું છું કાબિલ",
},
bn: {
  langName: "বাংলা",
  nav: ["হোম", "সচেতনতা", "স্বাস্থ্য", "ভাউচার", "সাহায্য"],
  heroTitle: "বাটা কিশোরী স্বাস্থ্য",
  heroSub: "তরুণীদের সুস্থ পরিবর্তনের জন্য প্রস্তুত করা",
  heroText:
    "এই উদ্যোগটি কিশোরীদের স্বাস্থ্য, আত্মবিশ্বাস, পুষ্টি, পরিচ্ছন্নতা, অ্যানিমিয়া প্রতিরোধ, টিকা সচেতনতা এবং ক্যান্সারের প্রাথমিক প্রতিরোধের উপর কেন্দ্রিত।",
  cta: "প্রোগ্রাম দেখুন",
  ageTitle: "তরুণী মেয়েরা — ১০ থেকে ১৯ বছর",
  ageText:
    "কৈশোর জীবনের একটি বিশেষ, উত্তেজনাপূর্ণ এবং কখনও কখনও চ্যালেঞ্জিং সময়। এটি দ্রুত বৃদ্ধি, শেখা এবং নতুন সুযোগের সময়।",
  duringAge: "এই বয়সে",
  duringPoints: [
    "শরীর দ্রুত বাড়ে এবং পরিবর্তিত হয়",
    "চিন্তা ও আবেগের বিকাশ হয়",
    "বন্ধুত্ব ও সম্পর্ক তৈরি হয়",
    "স্বাধীনতা ও দায়িত্ব শেখা হয়",
  ],
  timeTitle: "এই সময়টি হলো",
  timePoints: [
    "নিজের শক্তি চিনে নেওয়ার",
    "আত্মবিশ্বাস বাড়ানোর",
    "স্বাস্থ্যকর অভ্যাস গড়ে তোলার",
    "নিজের ভবিষ্যৎ গড়ার",
    "স্বাস্থ্যের জন্য ভালো-মন্দ বোঝার",
  ],
  awarenessTitle: "সচেতনতা সেশন",
  awarenessCards: [
    {
      title: "পুষ্টি ও স্বাস্থ্যকর খাবার",
      img: ASSETS.nutrition,
      desc: "ভালো পুষ্টি আপনাকে সক্রিয়, মনোযোগী এবং শক্তিশালী রাখে।",
      points: [
        "শস্য, ডাল এবং ডালজাতীয় খাবার খান",
        "সবুজ শাকসবজি এবং তাজা ফল খান",
        "প্রতিদিন ৬–৮ গ্লাস পরিষ্কার জল পান করুন",
        "জাঙ্ক ফুড এবং মিষ্টি পানীয় এড়িয়ে চলুন",
        "পর্যাপ্ত ঘুম নিন",
      ],
    },
    {
      title: "অ্যানিমিয়া প্রতিরোধ",
      img: ASSETS.anemia,
      desc: "শরীরে আয়রনের ঘাটতির কারণে অ্যানিমিয়া হয়।",
      points: [
        "দুর্বলতা ও ক্লান্তি এর লক্ষণ হতে পারে",
        "সবুজ শাকসবজি, গুড় এবং খেজুর খান",
        "Vitamin-C সমৃদ্ধ খাবার খান",
        "ডাক্তারের পরামর্শ ছাড়া supplement নেবেন না",
      ],
    },
    {
      title: "পরিচ্ছন্নতা ও মাসিক স্বাস্থ্য",
      img: ASSETS.hygiene,
      desc: "মাসিক একটি স্বাভাবিক ও স্বাস্থ্যকর প্রক্রিয়া। এটি কোনো রোগ নয়।",
      points: [
        "পরিষ্কার sanitary products ব্যবহার করুন",
        "প্রতি ৪–৬ ঘণ্টায় পরিবর্তন করুন",
        "হাত ভালোভাবে ধুয়ে নিন",
        "ব্যবহৃত products নিরাপদে ফেলুন",
        "মেয়েরা পড়াশোনা ও খেলাধুলা চালিয়ে যেতে পারে",
      ],
    },
    {
      title: "HPV ও টিকা সচেতনতা",
      img: ASSETS.vaccine,
      desc: "টিকা এবং সঠিক পরামর্শ দীর্ঘমেয়াদি স্বাস্থ্য সুরক্ষা দেয়।",
      points: [
        "চিকিৎসকের পরামর্শ মেনে চলুন",
        "টিকার উপকারিতা বুঝুন",
        "বিশ্বস্ত স্বাস্থ্যকর্মীর সঙ্গে কথা বলুন",
        "প্রতিরোধকে গুরুত্ব দিন",
      ],
    },
  ],
  healthTitle: "স্বাস্থ্য ও সুস্থতা",
  healthText:
    "নিজের শরীরকে বোঝা নিরাপদ এবং দায়িত্বশীল সিদ্ধান্ত নিতে সাহায্য করে।",
  healthCards: [
    "শরীরের পরিবর্তন সম্পর্কে সচেতনতা",
    "সম্মানজনক ও স্বাস্থ্যকর সম্পর্ক",
    "সংক্রমণ সম্পর্কে সচেতনতা",
    "ভালো ব্যক্তিগত পরিচ্ছন্নতা",
    "PCOS / PCOD সচেতনতা",
    "স্তন ও সার্ভিক্যাল ক্যান্সার সচেতনতা",
  ],
  vouchersTitle: "বাটা স্ত্রী কিশোরী স্বাস্থ্য ভাউচার",
  vouchers: [
    "Stree Clinic-এ health checkup-এ ৫০% ছাড়",
    "Stree Clinic-এ health checkup-এ ৩০% ছাড়",
    "Stree Clinic-এ health checkup-এ ১০% ছাড়",
    "₹1000-এর বেশি কেনাকাটায় ₹200 ছাড়",
    "₹1500-এর বেশি কেনাকাটায় ₹500 ছাড়",
    "₹3000-এর বেশি কেনাকাটায় ₹1000 ছাড়",
  ],
  termsTitle: "ভাউচারের নিয়ম ও শর্তাবলী",
  terms: [
    "ভাউচার দিয়ে কেনা জিনিস non-returnable এবং non-refundable।",
    "ভাউচার শুধুমাত্র authorized Bata retail store বা Stree Clinic-এ বৈধ।",
    "কেনাকাটা সম্পূর্ণ হলে exchange বা return করা যাবে না।",
    "ভাউচার issue date থেকে ৬ মাস পর্যন্ত বৈধ।",
    "ভাউচার transfer করা যাবে না।",
  ],
  helpTitle: "কোথায় সাহায্য পাবেন",
  helpText:
    "কিশোরীরা Stree Clinic এবং young-girls-friendly health clinics থেকে নিরাপদ ও গোপনীয় স্বাস্থ্যসেবা পেতে পারে।",
  clinics: [
    "বারাসাত — Barrackpore Road",
    "বেহালা — Diamond Harbour Road",
    "গড়িয়াহাট — Gariahat Road",
    "হাতিবাগান — Arabindo Sarani",
    "টালিগঞ্জ — NSC Bose Road",
  ],
  footer: "আমি নারী, আমি সক্ষম",
},
};

function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="app">
      <div className="float-circle circle-one"></div>
      <div className="float-circle circle-two"></div>
      <div className="float-circle circle-three"></div>

      <header className="navbar">
        <div className="brand">
          <img src={ASSETS.bataLogo} alt="Bata" />
          {/* <span>Kishori Swasthya</span> */}
        </div>

        <nav>
          {t.nav.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="language-box">
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={lang === "hi" ? "active" : ""}
            onClick={() => setLang("hi")}
          >
            HI
          </button>
          <button
            className={lang === "gu" ? "active" : ""}
            onClick={() => setLang("gu")}
          >
            GU
          </button>
          <button
  className={lang === "bn" ? "active" : ""}
  onClick={() => setLang("bn")}
>
  BN
</button>
        </div>
      </header>

      <section className="hero" id={t.nav[0]}>
        <div className="hero-content">
          <div className="logo-strip">
            <img src={ASSETS.bataLogo} alt="Bata" />
            <img src={ASSETS.parivarLogo} alt="Parivar Seva" />
            <img src={ASSETS.streeLogo} alt="Stree Clinic" />
          </div>

          <p className="eyebrow">Bata Children’s Program • CSR Initiative</p>
          {/* <h1>{t.heroTitle}</h1> */}
          <h1 className="hero-title">
  {/* <img src={ASSETS.bataLogo} alt="Bata" className="hero-bata-logo" /> */}
  <img src={ASSETS.bataHeroLogo} alt="Bata" className="hero-bata-logo" />
  <span>{t.heroTitle.replace("Bata ", "")}</span>
</h1>
<img src="/assets/keep-her-smiling.png" alt="tagline" className="tagline-img" />
{/* <h2>{t.heroSub}</h2> */}
{/* <p>{t.heroText}</p> */}
          <h2>{t.heroSub}</h2>
          <p>{t.heroText}</p>

          <div className="hero-actions">
            <a href="#awareness" className="primary-btn">
              {t.cta}
            </a>
            <span className="helpline">Helpline: 1800-123-7075</span>
          </div>
        </div>

        <div className="hero-visual">
          <img src={ASSETS.heroGirl} alt="Young girl health awareness" />
          <div className="badge-card">
            <strong>10–19</strong>
            <span>Years</span>
          </div>
        </div>
      </section>

      <section className="age-section">
        <h2>{t.ageTitle}</h2>
        <p>{t.ageText}</p>

        <div className="age-grid">
          <div className="info-card green">
            <h3>{t.duringAge}</h3>
            {t.duringPoints.map((p) => (
              <p key={p}>✦ {p}</p>
            ))}
          </div>

          <div className="info-card pink">
            <h3>{t.timeTitle}</h3>
            {t.timePoints.map((p) => (
              <p key={p}>✦ {p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="awareness" id="awareness">
        <div className="section-heading">
          <p>Learn • Grow • Shine</p>
          <h2>{t.awarenessTitle}</h2>
        </div>

        <div className="cards-grid">
          {t.awarenessCards.map((card) => (
            <article className="awareness-card" key={card.title}>
              <img src={card.img} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="health-section">
        <div className="health-text">
          <p>Safe Choices • Better Future</p>
          <h2>{t.healthTitle}</h2>
          <span>{t.healthText}</span>
        </div>

        <div className="health-grid">
          {t.healthCards.map((item, index) => (
            <div className="health-pill" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="sports-banner">
        <img src={ASSETS.sports1} alt="sports" />
        <img src={ASSETS.sports2} alt="sports" />
        <img src={ASSETS.sports3} alt="sports" />
      </section>
        


        
      <section className="voucher-section">
        <div className="section-heading">
          <p>Bata • Stree Clinic</p>
          <h2>{t.vouchersTitle}</h2>
        </div>

        <div className="voucher-grid">
          {t.vouchers.map((v, index) => (
            <div className="voucher-card" key={v}>
              <span>Voucher {index + 1}</span>
              <h3>{v}</h3>
              <p>Valid with authorised signature and beneficiary verification.</p>
            </div>
          ))}
        </div>

        <div className="terms-card">
          <h3>{t.termsTitle}</h3>
          <ol>
            {t.terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="help-section">
        <div>
          <p className="eyebrow">Confidential • Friendly • Safe</p>
          <h2>{t.helpTitle}</h2>
          <p>{t.helpText}</p>

          <div className="clinic-list">
            {t.clinics.map((clinic) => (
              <span key={clinic}>📍 {clinic}</span>
            ))}
          </div>
        </div>

        <img src={ASSETS.clinic} alt="Stree clinic" />
      </section>

      <footer>
        <h2>{t.footer}</h2>
        <p>www.parivarseva.org • www.streeclinic.com</p>
        <p>Stay Connected: Facebook | X | Instagram | YouTube</p>
      </footer>
    </div>
  );
}

export default App;
