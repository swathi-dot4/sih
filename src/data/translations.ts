import { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    appName: "Aarogyavaani",
    tagline: "Your AI-powered guide to accessible healthcare",
    heroDesc: "Understand your health needs, communicate clearly with doctors, scan medicine labels, and connect with local healthcare workers — in your language.",
    primaryCta: "Get Healthcare Assistance",
    secondaryCta: "Try AI Voice Guide",
    trustMessage: "AI-guided • Multilingual • Simple • Designed for rural & underserved communities",
    safetyDisclaimer: "Aarogyavaani provides health communication guidance only. It does not diagnose diseases or replace licensed doctors.",
    aiPhilosophy: "AI should act as a GUIDE, not a JUDGE.",

    // Nav
    navHome: "Home",
    navGuide: "AI Guide",
    navDoctor: "Explain to Doctor",
    navMedicine: "Scan Medicine",
    navCalls: "Healthcare Calls",
    navFacilities: "Find Care",
    navOffline: "Offline Mode",
    navWorker: "Worker Portal",
    navProfile: "Family Health",

    // Dashboard Cards
    dashTitle: "How can we help you today?",
    cardGuideTitle: "🤖 AI Healthcare Guide",
    cardGuideDesc: "Describe what you are feeling in your own words.",
    cardDoctorTitle: "🩺 Explain to Doctor",
    cardDoctorDesc: "Prepare a clear, structured summary for your consultation.",
    cardMedicineTitle: "💊 Scan Medicine",
    cardMedicineDesc: "Scan packaging or upload photos for medicine label info.",
    cardCallsTitle: "📞 Call Healthcare",
    cardCallsDesc: "Connect directly with local ASHA workers, PHC, or doctors.",
    cardFacilitiesTitle: "🏥 Find Healthcare",
    cardFacilitiesDesc: "Locate nearby Primary Health Centres and hospitals.",
    cardOfflineTitle: "📡 Offline Requests",
    cardOfflineDesc: "View saved health requests and sync when connected.",

    // Status bar
    statusInternet: "Internet",
    statusLanguage: "Language",
    statusContext: "Active Context",
    statusSaved: "Saved Requests",
    statusFollowups: "Follow-ups",
    online: "Online",
    offline: "Offline",

    // Guide section
    guideTitle: "AI Healthcare Communication Guide",
    guideSubtitle: "Speak or type your symptoms. The AI will organize your concern for your doctor.",
    speakBtn: "Speak (Microphone)",
    stopSpeakBtn: "Stop Recording",
    typePlaceholder: "Type your health concern here (e.g., stomach pain since yesterday)...",
    sendBtn: "Send Concern",
    listening: "Listening to your voice...",

    // Doctor section
    docTitle: "Explain My Problem to Doctor",
    docSubtitle: "Convert your raw thoughts into a clean summary doctors love.",
    concernHeader: "My Health Concern",
    youCanTellDoctor: "You can tell your doctor:",
    addMoreInfo: "Add More Info",
    editSummary: "Edit Summary",
    listenAudio: "Listen Audio",
    talkToDoctor: "Talk to Doctor",
    copySummary: "Copy Summary",

    // Medicine Section
    medTitle: "Medicine Label Scanner",
    medSubtitle: "Scan or upload medicine packaging to view clear label details.",
    uploadLabel: "Upload Photo",
    cameraLabel: "Use Camera",
    scanBtn: "Analyze Packaging Label",
    medInfo: "Medicine Information",
    name: "Medicine Name",
    strength: "Strength / Concentration",
    form: "Dosage Form",
    manufacturer: "Manufacturer",
    batch: "Batch Number",
    expiry: "Expiry Date",
    notDetected: "Could not be detected",
    askWorkerBtn: "Ask Healthcare Worker About This Medicine",
    medSafetyNotice: "Please verify medicine information and dosage with a qualified healthcare professional. Do not use medicine solely based on this scan.",

    // Calls Section
    callTitle: "Healthcare Call Kiosk",
    callSubtitle: "Instant voice connection with local healthcare personnel in Telugu or English.",
    ashaTitle: "Call ASHA Worker",
    ashaDesc: "Local village health worker • Speaks Telugu & Hindi",
    phcTitle: "Call PHC (Primary Health Centre)",
    phcDesc: "Government Rural Clinic • 24/7 Helpline",
    docCallTitle: "Call Doctor",
    docCallDesc: "Tele-consultation Doctor • Scheduled or Urgent",
    emergTitle: "Emergency 108 / 104",
    emergDesc: "Government Ambulance & Health Information",
    startCall: "Call Now",
    preferredLang: "Preferred Language",

    // Facility Finder
    facTitle: "Nearby Healthcare Facilities",
    facSubtitle: "Find PHCs, CHCs, and hospitals with local language support.",
    filterAll: "All Facilities",
    filterGeneral: "General Care",
    filterPeds: "Pediatrics",
    filterWomen: "Women's Health",
    filterEmergency: "Emergency",
    filterPharmacy: "Pharmacy",
    filterTele: "Teleconsultation",
    callFacility: "Call Facility",
    getDirections: "Get Directions",

    // Offline Section
    offTitle: "Offline & Low Connectivity Sync",
    offSubtitle: "Your requests are safely stored on your device and will sync automatically when back online.",
    simOfflineToggle: "Simulate Offline Mode",
    savedOfflineCount: "Saved Offline Requests",
    syncingText: "Syncing your saved requests...",
    syncedSuccess: "All requests synchronized successfully.",

    // Worker Dashboard
    workerTitle: "Aarogyavaani — Healthcare Worker Portal",
    workerSubtitle: "Review patient concerns, Telugu summaries, and schedule follow-ups.",
    tblPatient: "Patient",
    tblConcern: "Concern",
    tblLang: "Language",
    tblStatus: "Status",
    tblActions: "Actions",

    // Family Health
    familyTitle: "Family Health Profile",
    familySubtitle: "Keep track of health records and follow-ups for your loved ones.",
    addMember: "Add Family Member",

    // Demo Mode
    demoBtnText: "🎯 Interactive Demo Tour",

    // USP Text
    uspTitle: "From describing the problem to reaching the right care.",
    usp1: "🗣️ Speak in your language",
    usp2: "🤖 AI-guided communication",
    usp3: "💊 Medicine information",
    usp4: "📞 Connect with healthcare",
    usp5: "🏥 Find the right facility",
    usp6: "📡 Works with poor connectivity"
  },
  te: {
    appName: "ఆరోగ్యవాణి",
    tagline: "సులభమైన ఆరోగ్య సంరక్షణ కోసం మీ AI మార్గదర్శి",
    heroDesc: "మీ ఆరోగ్య అవసరాలను అర్థం చేసుకోవడంలో, డాక్టర్లతో స్పష్టంగా మాట్లాడడంలో, ఔషధాల వివరాలను తెలుసుకోవడంలో మరియు సమీపంలోని ఆరోగ్య కేంద్రాలను కనుగొనడంలో సహాయం పొందండి — మీ భాషలో.",
    primaryCta: "ఆరోగ్య సహాయం పొందండి",
    secondaryCta: "AI వాయిస్ మార్గదర్శి",
    trustMessage: "AI మార్గదర్శకత్వం • బహుభాషా మద్దతు • సులభం • గ్రామీణ ప్రజల కోసం రూపొందించబడింది",
    safetyDisclaimer: "ఆరోగ్యవాణి ఆరోగ్య సమాచార సేకరణ మరియు మార్గదర్శకత్వం మాత్రమే అందిస్తుంది. ఇది రోగనిర్ధారణ చేయదు లేదా వైద్యుడికి ప్రత్యామ్నాయం కాదు.",
    aiPhilosophy: "AI ఒక మార్గదర్శిగా పనిచేయాలి, తీర్పరిగా కాదు.",

    // Nav
    navHome: "హోమ్",
    navGuide: "AI గైడ్",
    navDoctor: "డాక్టర్‌కు వివరణ",
    navMedicine: "మందుల స్కాన్",
    navCalls: "ఆరోగ్య కాల్స్",
    navFacilities: "ఆసుపత్రులు",
    navOffline: "ఆఫ్‌లైన్ మోడ్",
    navWorker: "ఆరోగ్య కార్యకర్త",
    navProfile: "కుటుంబ ఆరోగ్యం",

    // Dashboard Cards
    dashTitle: "ఈ రోజు మేము మీకు ఏ విధంగా సహాయపడగలము?",
    cardGuideTitle: "🤖 AI ఆరోగ్య గైడ్",
    cardGuideDesc: "మీ అనారోగ్య సమస్యను మీ స్వంత మాటల్లో చెప్పండి.",
    cardDoctorTitle: "🩺 డాక్టర్‌కు వివరించండి",
    cardDoctorDesc: "డాక్టర్ సంప్రదింపుల కోసం మీ ఆరోగ్య సమస్యను సిద్ధం చేయండి.",
    cardMedicineTitle: "💊 మందుల స్కాన్",
    cardMedicineDesc: "మందుల లేబుల్ వివరాలు తెలుసుకోవడానికి స్కాన్ చేయండి.",
    cardCallsTitle: "📞 ఆరోగ్య కేంద్రానికి కాల్ చేయండి",
    cardCallsDesc: "ఆశా కార్యకర్త, PHC లేదా డాక్టర్‌తో నేరుగా మాట్లాడండి.",
    cardFacilitiesTitle: "🏥 సమీప ఆసుపత్రులు",
    cardFacilitiesDesc: "సమీపంలోని ప్రాథమిక ఆరోగ్య కేంద్రాలను కనుగొనండి.",
    cardOfflineTitle: "📡 ఆఫ్‌లైన్ కోరికలు",
    cardOfflineDesc: "ఇంటర్నెట్ లేనప్పుడు సేవ్ చేసిన అభ్యర్థనలను చూడండి.",

    // Status bar
    statusInternet: "ఇంటర్నెట్",
    statusLanguage: "భాష",
    statusContext: "ప్రస్తుత స్థితి",
    statusSaved: "సేవ్ చేసినవి",
    statusFollowups: "ఫాలో-అప్‌లు",
    online: "ఆన్‌లైన్",
    offline: "ఆఫ్‌లైన్",

    // Guide section
    guideTitle: "AI ఆరోగ్య సంభాషణ మార్గదర్శి",
    guideSubtitle: "మీ సమస్యను చెప్పండి లేదా టైప్ చేయండి. AI దానిని క్రమబద్ధీకరిస్తుంది.",
    speakBtn: "మాట్లాడండి (మైక్రోఫోన్)",
    stopSpeakBtn: "రికార్డింగ్ ఆపండి",
    typePlaceholder: "మీ ఆరోగ్య సమస్యను ఇక్కడ టైప్ చేయండి (ఉదా: నిన్నటి నుండి కడుపునొప్పి)...",
    sendBtn: "పంపండి",
    listening: "మీ మాటలను వింటున్నాము...",

    // Doctor section
    docTitle: "నా సమస్యను డాక్టర్‌కు వివరించండి",
    docSubtitle: "మీ మాటలను డాక్టర్ సులభంగా అర్థం చేసుకునే రీతిలో మార్చండి.",
    concernHeader: "నా ఆరోగ్య సమస్య",
    youCanTellDoctor: "మీరు మీ డాక్టర్‌తో ఇలా చెప్పవచ్చు:",
    addMoreInfo: "మరింత సమాచారం ചേర్చండి",
    editSummary: "సవరించు",
    listenAudio: "తెలుగు వాయిస్ వినండి",
    talkToDoctor: "డాక్టర్‌తో మాట్లాడండి",
    copySummary: "సారాంశాన్ని కాపీ చేయండి",

    // Medicine Section
    medTitle: "మందుల లేబుల్ స్కానర్",
    medSubtitle: "మందుల సీసా లేదా ర్యాపర్ ఫోటో స్కాన్ చేసి వివరాలు చూడండి.",
    uploadLabel: "ఫోటో అప్‌లోడ్ చేయండి",
    cameraLabel: "కెమెరా ఉపయోగించండి",
    scanBtn: "మందు వివరాలను విశ్లేషించండి",
    medInfo: "ఔషధ సమాచారం",
    name: "మందు పేరు",
    strength: "మోతాదు (Strength)",
    form: "రకం (మాత్ర/సిరప్)",
    manufacturer: "తయారీదారు",
    batch: "బ్యాచ్ నంబర్",
    expiry: "గడువు ముగింపు తేదీ (Expiry)",
    notDetected: "గుర్తించబడలేదు",
    askWorkerBtn: "ఈ మందు గురించి ఆరోగ్య కార్యకర్తను అడగండి",
    medSafetyNotice: "దయచేసి ఔషధం ఉపయోగించే ముందు వైద్యుడిని లేదా ఆశా కార్యకర్తను సంప్రదించండి.",

    // Calls Section
    callTitle: "ఆరోగ్య కాల్ సెంటర్",
    callSubtitle: "తెలుగులో మాట్లాడే స్థానిక ఆరోగ్య సిబ్బందితో వెంటనే కనెక్ట్ అవ్వండి.",
    ashaTitle: "ఆశా (ASHA) కార్యకర్తకు కాల్ చేయండి",
    ashaDesc: "గ్రామీణ ఆరోగ్య కార్యకర్త • తెలుగులో సహాయం అందుబాటులో ఉంది",
    phcTitle: "PHC (ప్రాథమిక ఆరోగ్య కేంద్రం)",
    phcDesc: "ప్రభుత్వ క్లినిక్ • 24/7 సహాయం",
    docCallTitle: "డాక్టర్‌తో మాట్లాడండి",
    docCallDesc: "టెలి-కన్సల్టేషన్ వైద్యుడు",
    emergTitle: "అత్యవసర 108 / 104",
    emergDesc: "ప్రభుత్వ అంబులెన్స్ మరియు ఆరోగ్య సమాచారం",
    startCall: "ఇప్పుడే కాల్ చేయండి",
    preferredLang: "ఎంచుకున్న భాష",

    // Facility Finder
    facTitle: "సమీప ఆరోగ్య కేంద్రాలు",
    facSubtitle: "తెలుగు భాషా మద్దతు ఉన్న PHCలు మరియు ఆసుపత్రులు.",
    filterAll: "అన్ని కేంద్రాలు",
    filterGeneral: "సాధారణ వైద్యం",
    filterPeds: "పిల్లల వైద్యం",
    filterWomen: "మహిళల ఆరోగ్యం",
    filterEmergency: "అత్యవసర విభాగం",
    filterPharmacy: "మందుల షాపు",
    filterTele: "టెలికన్సల్టేషన్",
    callFacility: "కాల్ చేయండి",
    getDirections: "దోవ చూడండి",

    // Offline Section
    offTitle: "ఆఫ్‌లైన్ మరియు తక్కువ కనెక్టివిటీ",
    offSubtitle: "మీ వివరాలు ఫోన్‌లో సురక్షితంగా ఉంటాయి. ఇంటర్నెట్ రాగానే సింక్ అవుతాయి.",
    simOfflineToggle: "ఆఫ్‌లైన్ మోడ్ పరీక్షించండి",
    savedOfflineCount: "సేవ్ చేసిన అభ్యర్థనలు",
    syncingText: "మీ వివరాలను సింక్ చేస్తున్నాము...",
    syncedSuccess: "అన్ని అభ్యర్థనలు విజయవంతంగా సింక్ అయ్యాయి.",

    // Worker Dashboard
    workerTitle: "ఆరోగ్యవాణి — ఆరోగ్య కార్యకర్త పోర్టల్",
    workerSubtitle: "రోగుల సమస్యలను పరిశీలించి తగిన సూచనలు ఇవ్వండి.",
    tblPatient: "రోగి",
    tblConcern: "సమస్య",
    tblLang: "భాష",
    tblStatus: "స్థితి",
    tblActions: "చర్యలు",

    // Family Health
    familyTitle: "కుటుంబ ఆరోగ్య ప్రొఫైల్",
    familySubtitle: "మీ కుటుంబ సభ్యుల ఆరోగ్య వివరాలు మరియు రిమైండర్లు చూడండి.",
    addMember: "కుటుంబ సభ్యుడిని చేర్చండి",

    // Demo Mode
    demoBtnText: "🎯 డెమో టూర్",

    // USP Text
    uspTitle: "సమస్యను చెప్పడం నుండి సరైన వైద్య సహాయం అందే వరకు.",
    usp1: "🗣️ మీ స్వంత భాషలో మాట్లాడండి",
    usp2: "🤖 AI సహాయంతో స్పష్టత",
    usp3: "💊 మందుల వివరాలు",
    usp4: "📞 వైద్య సిబ్బందితో సంభాషణ",
    usp5: "🏥 సరైన ఆసుపత్రి ఎంపిక",
    usp6: "📡 ఆఫ్‌లైన్‌లో కూడా పని చేస్తుంది"
  },
  hi: {
    appName: "आरोग्यवाणी (Aarogyavaani)",
    tagline: "आसान स्वास्थ्य सेवा के लिए आपका AI मार्गदर्शक",
    heroDesc: "अपनी स्वास्थ्य आवश्यकताओं को समझें, डॉक्टरों से स्पष्ट बात करें, दवा की जानकारी प्राप्त करें और पास के स्वास्थ्य केंद्रों को खोजें — अपनी भाषा में।",
    primaryCta: "स्वास्थ्य सहायता प्राप्त करें",
    secondaryCta: "AI आवाज मार्गदर्शक",
    trustMessage: "AI-मार्गदर्शित • बहुभाषी • सुलभ • ग्रामीण क्षेत्रों के लिए डिज़ाइन किया गया",
    safetyDisclaimer: "आरोग्यवाणी केवल मार्गदर्शन और संचार सहायता प्रदान करता है। यह बीमारियों का निदान नहीं करता और न ही डॉक्टर का स्थान लेता है।",
    aiPhilosophy: "AI को मार्गदर्शक के रूप में कार्य करना चाहिए, न्यायाधीश के रूप में नहीं।",

    // Nav
    navHome: "होम",
    navGuide: "AI गाइड",
    navDoctor: "डॉक्टर को समझाएं",
    navMedicine: "दवा स्कैन",
    navCalls: "स्वास्थ्य कॉल",
    navFacilities: "अस्पताल",
    navOffline: "ऑफलाइन मोड",
    navWorker: "स्वास्थ्य कार्यकर्ता",
    navProfile: "परिवार का स्वास्थ्य",

    // Dashboard Cards
    dashTitle: "आज हम आपकी क्या सहायता कर सकते हैं?",
    cardGuideTitle: "🤖 AI स्वास्थ्य मार्गदर्शक",
    cardGuideDesc: "अपनी समस्या अपने शब्दों में बताएं।",
    cardDoctorTitle: "🩺 डॉक्टर को समझाएं",
    cardDoctorDesc: "डॉक्टर से परामर्श के लिए अपनी समस्या तैयार करें।",
    cardMedicineTitle: "💊 दवा स्कैन करें",
    cardMedicineDesc: "दवा के लेबल की जानकारी प्राप्त करें।",
    cardCallsTitle: "📞 स्वास्थ्य केंद्र को कॉल करें",
    cardCallsDesc: "आशा कार्यकर्ता या पीएचसी से संपर्क करें।",
    cardFacilitiesTitle: "🏥 अस्पताल खोजें",
    cardFacilitiesDesc: "निकटतम प्राथमिक स्वास्थ्य केंद्र खोजें।",
    cardOfflineTitle: "📡 ऑफलाइन अनुरोध",
    cardOfflineDesc: "बिना इंटरनेट के सहेजे गए अनुरोध देखें।",

    // Status bar
    statusInternet: "इंटरनेट",
    statusLanguage: "भाषा",
    statusContext: "सक्रिय संदर्भ",
    statusSaved: "सहेजे गए अनुरोध",
    statusFollowups: "फॉलो-अप",
    online: "ऑनलाइन",
    offline: "ऑफलाइन",

    // Guide section
    guideTitle: "AI स्वास्थ्य संचार मार्गदर्शक",
    guideSubtitle: "बोलें या टाइप करें। AI आपकी बात को व्यवस्थित करेगा।",
    speakBtn: "बोलें (माइक)",
    stopSpeakBtn: "रिकॉर्डिंग रोकें",
    typePlaceholder: "अपनी स्वास्थ्य समस्या यहाँ लिखें (जैसे कल से पेट में दर्द है)...",
    sendBtn: "भेजें",
    listening: "सुन रहे हैं...",

    // Doctor section
    docTitle: "डॉक्टर को मेरी समस्या समझाएं",
    docSubtitle: "अपनी बात को डॉक्टर के समझने योग्य सारांश में बदलें।",
    concernHeader: "मेरी स्वास्थ्य समस्या",
    youCanTellDoctor: "आप अपने डॉक्टर को यह बता सकते हैं:",
    addMoreInfo: "अधिक जानकारी जोड़ें",
    editSummary: "संशोधन करें",
    listenAudio: "सुनें",
    talkToDoctor: "डॉक्टर से बात करें",
    copySummary: "सारांश कॉपी करें",

    // Medicine Section
    medTitle: "दवा लेबल स्कैनर",
    medSubtitle: "दवा का फोटो अपलोड या स्कैन करके विवरण देखें।",
    uploadLabel: "फोटो अपलोड करें",
    cameraLabel: "कैमरा उपयोग करें",
    scanBtn: "दवा का विश्लेषण करें",
    medInfo: "दवा की जानकारी",
    name: "दवा का नाम",
    strength: "मात्रा (Strength)",
    form: "प्रकार",
    manufacturer: "निर्माता",
    batch: "बैच नंबर",
    expiry: "समाप्ति तिथि (Expiry)",
    notDetected: "पहचाना नहीं जा सका",
    askWorkerBtn: "स्वास्थ्य कार्यकर्ता से पूछें",
    medSafetyNotice: "कृपया दवा का उपयोग करने से पहले डॉक्टर से पुष्टि करें।",

    // Calls Section
    callTitle: "स्वास्थ्य कॉल सेंटर",
    callSubtitle: "स्थानीय भाषा में स्वास्थ्य कार्यकर्ताओं से तुरंत जुड़ें।",
    ashaTitle: "आशा कार्यकर्ता को कॉल करें",
    ashaDesc: "स्थानीय स्वास्थ्य कार्यकर्ता",
    phcTitle: "पीएचसी (प्राथमिक स्वास्थ्य केंद्र)",
    phcDesc: "सरकारी क्लिनिक • 24/7 हेल्पलाइन",
    docCallTitle: "डॉक्टर से बात करें",
    docCallDesc: "टेली-परामर्श डॉक्टर",
    emergTitle: "आपत्कालीन 108 / 104",
    emergDesc: "सरकारी एम्बुलेंस और स्वास्थ्य सूचना",
    startCall: "कॉल करें",
    preferredLang: "चुनी गई भाषा",

    // Facility Finder
    facTitle: "निकटतम स्वास्थ्य केंद्र",
    facSubtitle: "स्थानीय भाषा सहायता वाले अस्पताल खोजें।",
    filterAll: "सभी केंद्र",
    filterGeneral: "सामान्य देखभाल",
    filterPeds: "बाल चिकित्सा",
    filterWomen: "महिला स्वास्थ्य",
    filterEmergency: "आपत्कालीन",
    filterPharmacy: "दवा की दुकान",
    filterTele: "टेली-परामर्श",
    callFacility: "कॉल करें",
    getDirections: "दिशा-निर्देश",

    // Offline Section
    offTitle: "ऑफलाइन और कम कनेक्टिविटी",
    offSubtitle: "आपकी जानकारी सुरक्षित रखी जाएगी और ऑनलाइन आने पर सिंक हो जाएगी।",
    simOfflineToggle: "ऑफलाइन मोड टेस्ट करें",
    savedOfflineCount: "सहेजे गए अनुरोध",
    syncingText: "सिंक हो रहा है...",
    syncedSuccess: "सभी अनुरोध सफलतापूर्वक सिंक हो गए हैं।",

    // Worker Dashboard
    workerTitle: "आरोग्यवाणी — स्वास्थ्य कार्यकर्ता पोर्टल",
    workerSubtitle: "मरीजों की समस्याओं की समीक्षा करें।",
    tblPatient: "मरीज",
    tblConcern: "समस्या",
    tblLang: "भाषा",
    tblStatus: "स्थिति",
    tblActions: "कार्रवाई",

    // Family Health
    familyTitle: "पारिवारिक स्वास्थ्य",
    familySubtitle: "अपने परिवार के स्वास्थ्य रिकॉर्ड देखें।",
    addMember: "सदस्य जोड़ें",

    // Demo Mode
    demoBtnText: "🎯 डेमोंस्ट्रेशन टूर",

    // USP Text
    uspTitle: "समस्या बताने से लेकर सही इलाज पाने तक।",
    usp1: "🗣️ अपनी भाषा में बोलें",
    usp2: "🤖 AI द्वारा सहायता",
    usp3: "💊 दवा की जानकारी",
    usp4: "📞 स्वास्थ्य कार्यकर्ताओं से जुड़ें",
    usp5: "🏥 सही अस्पताल चुनें",
    usp6: "📡 बिना इंटरनेट के काम करता है"
  }
};
