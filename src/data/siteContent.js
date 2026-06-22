export const media = {
  hero: '/media/children-learning.mp4',
  classroom: '/media/classroom-story.mp4',
  volunteer: '/media/volunteer-moment.mp4',
};

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'te', label: '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41' },
  { code: 'hi', label: '\u0939\u093f\u0928\u094d\u0926\u0940' },
  { code: 'ta', label: '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd' },
  { code: 'kn', label: '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1' },
  { code: 'ml', label: '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02' },
  { code: 'mr', label: '\u092e\u0930\u093e\u0920\u0940' },
];

const metric = (label, note, value, suffix = '+', prefix = '', decimals) => ({ label, note, value, suffix, prefix, decimals });
const preset = (amount, impact) => ({ amount, impact });
const mediaSet = [media.classroom, media.hero, media.volunteer, media.classroom];

const content = {
  en: {
    nav: ['Mission', 'Impact', 'Programs', 'Stories', 'Volunteer'],
    buttons: ['Donate', 'Donate now', 'Volunteer', 'Fund this', 'Read article'],
    hero: ['Not every child is born into amenities.', 'But every child deserves a future.', 'Dignity-led community care', 'SAHAY Foundation turns compassion into classrooms, health access, emergency relief, and a trustworthy path for donors and volunteers to stand beside families.', 'My Story', 'Since 2005, a local promise has grown into a measurable movement for education, health, relief, and hope.', 'Sound on', 'Sound off'],
    mission: ['Our mission', 'Help should never make a person feel small.', 'SAHAY exists to make support feel human, accountable, and close enough to reach before a child, parent, or elder falls through the cracks.'],
    missionBlocks: [
      ['Education', 'Learning rooms that feel safe enough to dream in.', 'Community classrooms, supplies, mentorship, and after-school support for children who are too often asked to grow up early.'],
      ['Health', 'Care that arrives before a crisis becomes permanent.', 'Medical camps, nutrition drives, menstrual health support, and referral networks built with dignity at the center.'],
      ['Relief', 'Urgent help, delivered with local trust.', 'Volunteer-led response for families facing displacement, illness, hunger, or sudden loss of income.'],
    ],
    documentary: ['Documentary story', 'The work is quiet. The stakes are not.', 'Built like a field documentary: chapter by chapter, close to the people whose lives turn because somebody showed up.'],
    chapters: [
      ['Chapter 01', 'A classroom can become a shelter for possibility.', 'Every evening, a borrowed room becomes a place where children return to their own pace. The noise softens. A mentor listens. A future begins to look less far away.', media.classroom],
      ['Chapter 02', 'Relief is not a transaction. It is a relationship.', 'SAHAY volunteers work through neighborhood trust, so families are seen as people first and beneficiaries second.', media.volunteer],
      ['Chapter 03', 'Hope becomes credible when it is measured.', 'Attendance, nutrition, health referrals, scholarships, campaign reach, and donor reporting are tracked so compassion turns into accountable progress.', media.hero],
    ],
    impact: ['Measured compassion', 'Impact that donors can feel and auditors can follow.', 'Numbers are treated like promises: counted, explained, and connected back to human outcomes.'],
    metrics: [
      metric('lives impacted', 'children, families, and elders reached through field programs', 1000),
      metric('volunteers', 'trained community members and city-based professional volunteers', 50),
      metric('campaigns', 'education, health, food security, and emergency response initiatives', 10),
      metric('raised', 'donations, in-kind support, and partner-led commitments', 10, ' Lakhs+', '\u20b9'),
    ],
    allocation: ['Allocation signal', 'Every rupee should explain itself.', 'The donation experience is structured to connect amount, program, receipt, and reporting back to the donor journey.', ['Education 52%', 'Health 28%', 'Relief 20%']],
    programs: ['Programs', 'Four pathways, one promise: stay close.', 'Each program is designed to be tactile, local, and visible to the people funding it.'],
    programItems: [
      ['Learning Without Fear', 'Education', 'Bridge classes, tutoring circles, school kits, and exam confidence programs for children at risk of dropping out.', '1,800 learners'],
      ['Meals With Dignity', 'Nutrition', 'Nutrition kits and warm meal drives designed with local women volunteers who know which homes need quiet help.', '72,000 meals'],
      ['Health On The Move', 'Health', 'Mobile health camps, medicine access, hygiene kits, and referral assistance for families without reliable care.', '34 camps'],
      ['Skill To Stand Tall', 'Livelihood', 'Youth mentorship, basic digital literacy, career readiness, and women-led micro-enterprise support.', '420 trainees'],
    ],
    timeline: ['Timeline', 'A promise, stretched across two decades.', 'The timeline is interactive because trust is built when growth can be traced.'],
    timelineItems: [
      ['2005', 'SAHAY begins as a neighborhood promise.', 'A small volunteer group starts with school supplies, food support, and a belief that reliable presence can change a family trajectory.'],
      ['2014', 'Programs formalize across education and health.', 'Campaigns become structured initiatives with local coordinators, donor updates, and repeatable field processes.'],
      ['2018', 'Volunteer network scales citywide.', 'Students, doctors, teachers, and working professionals join field teams, making weekend service a disciplined habit.'],
      ['2022', 'Relief operations become data-led.', 'Family needs, stock, distribution, and follow-up are tracked so help reaches the right homes faster.'],
      ['2026', 'A new chapter of transparent, scalable impact.', 'SAHAY enters its next phase with public reporting, digital donation flows, and deeper storytelling for donors and volunteers.'],
    ],
    stories: ['Real stories', 'Transformation is clearest when it has a name.', 'The story format is designed for verified field stories and consent-safe beneficiary storytelling.', 'Before', 'After', 'Previous story', 'Next story'],
    storyItems: [
      ['Anaya', '11', 'Name changed for privacy', 'Missing school during family health emergencies.', 'Back in class with mentoring, supplies, and steady attendance support.', 'I used to think school was for children with easier lives. Now I feel like it belongs to me too.', media.classroom],
      ['Rafiq', '14', 'Composite story slot', 'Falling behind after months without guided study time.', 'Joined evening learning circles and passed his term exams with confidence.', 'A volunteer sat with me until maths stopped feeling like a wall.', media.hero],
      ['Meera', '9', 'Consent-ready format', 'Nutrition gaps were affecting focus and school participation.', 'Family received food support and a health camp referral through SAHAY.', 'When my mother stopped worrying about dinner, I could think about tomorrow.', media.volunteer],
    ],
    gallery: ['Video gallery', 'Small films for big reasons.', 'Hover to preview. Open the story to watch without leaving the donation journey.', 'Close video', 'Play'],
    galleryItems: [
      ['Inside the learning circle', '00:34', media.classroom, 'A quiet look at the rhythm of after-school support.'],
      ['Volunteer hands at work', '00:22', media.volunteer, 'Humanitarian care made visible through local action.'],
      ['Children, safety, future', '00:29', media.hero, 'The emotional frame behind SAHAY’s education mission.'],
    ],
    volunteer: ['Volunteer', 'Show up once. Become part of a system that keeps showing up.', 'The form is connected to Supabase when environment variables are present, with EmailJS notifications ready for field coordinators.', ['Field visits', 'Teaching support', 'Medical camps'], ['Name', 'Email', 'Phone', 'Availability', 'Skills', 'Message'], ['Weekends', 'Weekdays', 'Remote', 'Emergency response'], 'Tell us where you want to help.', 'Send application', 'Application received.', ['Please enter your full name.', 'Please enter a valid email.', 'Please enter a reachable phone number.', 'Tell us at least one skill.', 'Something went wrong. Please try again.']],
    blog: ['Journal', 'Field notes for people who care about evidence.', 'Editorial surfaces designed for campaign updates, audit explainers, and volunteer essays.', [
      ['What dignity changes in a donation program', 'Field Notes', 'June 2026', 'Why the way help is delivered matters as much as the help itself.'],
      ['Building transparent impact reports for donors', 'Trust', 'May 2026', 'A practical look at metrics, stories, receipts, and field verification.'],
      ['How weekend volunteers become community anchors', 'Volunteer', 'April 2026', 'The systems that turn good intentions into reliable service.'],
    ]],
    donation: ['Donation experience', 'Make generosity feel specific.', 'Preset amounts, visible impact, UPI, card readiness, Razorpay architecture, and Supabase pledge capture are built in.', 'Current amount', 'This can', 'Custom amount', 'Enter amount in INR', 'UPI ready', 'Replace with verified UPI and generated QR before launch.', 'Razorpay checkout opens when `VITE_RAZORPAY_KEY_ID` is configured.', 'Continue donation', 'Pledge captured.', 'Could not save pledge. Try again.', ['extends medical and family relief support', 'keeps a child learning with dignity', 'adds to the emergency care pool'], [preset(500, 'feeds a child for a week'), preset(1000, 'funds books and learning materials'), preset(5000, 'supports medical care for a family')]],
    footer: ['A premium digital home for a foundation built on dignity, accountability, and community trust.', 'Contact', 'Trust', ['NGO registration', 'Audit report', '80G certificate', 'Privacy policy'], '\u00a9 2026 SAHAY Foundation. Built for transparent community impact.'],
  },
  hi: {
    nav: ['मिशन', 'प्रभाव', 'कार्यक्रम', 'कहानियाँ', 'स्वयंसेवा'],
    buttons: ['दान करें', 'अभी दान करें', 'स्वयंसेवा', 'इसे सहयोग दें', 'लेख पढ़ें'],
    hero: ['हर बच्चा सुविधाओं में जन्म नहीं लेता।', 'लेकिन हर बच्चा भविष्य का हकदार है।', 'गरिमा-आधारित सामुदायिक देखभाल', 'SAHAY Foundation करुणा को कक्षाओं, स्वास्थ्य सुविधा, आपात राहत, और दाताओं-स्वयंसेवकों के लिए भरोसेमंद रास्ते में बदलता है।', 'मेरी कहानी', '2005 से, एक स्थानीय वादा शिक्षा, स्वास्थ्य, राहत और आशा के लिए मापनीय आंदोलन बन गया है।', 'ध्वनि चालू', 'ध्वनि बंद'],
    mission: ['हमारा मिशन', 'मदद कभी किसी व्यक्ति को छोटा महसूस नहीं करानी चाहिए।', 'SAHAY सहायता को मानवीय, जवाबदेह और इतना निकट बनाता है कि बच्चा, माता-पिता या बुजुर्ग छूटने से पहले संभल सकें।'],
  },
  te: {
    nav: ['లక్ష్యం', 'ప్రభావం', 'కార్యక్రమాలు', 'కథలు', 'స్వచ్ఛంద సేవ'],
    buttons: ['దానం చేయండి', 'ఇప్పుడే దానం', 'స్వచ్ఛంద సేవ', 'దీనికి సహాయం', 'వ్యాసం చదవండి'],
    hero: ['ప్రతి బిడ్డ సౌకర్యాల్లో పుట్టడు.', 'కానీ ప్రతి బిడ్డకు భవిష్యత్తు హక్కు.', 'గౌరవంతో నడిచే సమాజ సంరక్షణ', 'SAHAY Foundation కరుణను తరగతులు, ఆరోగ్య సహాయం, అత్యవసర ఉపశమనం, దాతలు మరియు వాలంటీర్లకు విశ్వసనీయ మార్గంగా మార్చుతుంది.', 'నా కథ', '2005 నుంచి, ఒక స్థానిక వాగ్దానం విద్య, ఆరోగ్యం, ఉపశమనం, ఆశల కోసం కొలవగల ఉద్యమంగా పెరిగింది.', 'శబ్దం ఆన్', 'శబ్దం ఆఫ్'],
    mission: ['మా లక్ష్యం', 'సహాయం ఎప్పుడూ మనిషిని చిన్నగా అనిపించకూడదు.', 'బిడ్డ, తల్లిదండ్రి లేదా పెద్దవారు జారిపడే ముందు చేరేంత దగ్గరగా, మానవీయంగా, బాధ్యతతో సహాయం అందించడమే SAHAY లక్ష్యం.'],
  },
  ta: {
    nav: ['பணி', 'தாக்கம்', 'திட்டங்கள்', 'கதைகள்', 'தன்னார்வம்'],
    buttons: ['நன்கொடையிடு', 'இப்போது நன்கொடை', 'தன்னார்வம்', 'இதற்கு உதவி', 'கட்டுரை படிக்க'],
    hero: ['ஒவ்வொரு குழந்தையும் வசதிகளில் பிறப்பதில்லை.', 'ஆனால் ஒவ்வொரு குழந்தைக்கும் எதிர்காலம் உரியது.', 'மரியாதை வழிநடத்தும் சமூக பராமரிப்பு', 'SAHAY Foundation கருணையை வகுப்பறைகள், சுகாதார அணுகல், அவசர நிவாரணம், தானதாரர்கள் மற்றும் தன்னார்வலர்களுக்கான நம்பகமான பாதையாக மாற்றுகிறது.', 'என் கதை', '2005 முதல், ஒரு உள்ளூர் வாக்குறுதி கல்வி, சுகாதாரம், நிவாரணம், நம்பிக்கை ஆகியவற்றுக்கான அளவிடக்கூடிய இயக்கமாக வளர்ந்தது.', 'ஒலி இயக்கு', 'ஒலி அணை'],
    mission: ['எங்கள் பணி', 'உதவி ஒருவரையும் சிறியவராக உணரச் செய்யக் கூடாது.', 'ஒரு குழந்தை, பெற்றோர் அல்லது முதியவர் தவறுவதற்கு முன் அடையக்கூடிய அளவுக்கு மனிதநேயமான, பொறுப்புள்ள, அருகிலான ஆதரவை உருவாக்குவதே SAHAY.'],
  },
  kn: {
    nav: ['ಧ್ಯೇಯ', 'ಪ್ರಭಾವ', 'ಕಾರ್ಯಕ್ರಮಗಳು', 'ಕಥೆಗಳು', 'ಸ್ವಯಂಸೇವೆ'],
    buttons: ['ದಾನ ಮಾಡಿ', 'ಈಗ ದಾನ ಮಾಡಿ', 'ಸ್ವಯಂಸೇವೆ', 'ಇದಕ್ಕೆ ನೆರವು', 'ಲೇಖನ ಓದಿ'],
    hero: ['ಪ್ರತಿ ಮಗು ಸೌಲಭ್ಯಗಳಲ್ಲಿ ಹುಟ್ಟುವುದಿಲ್ಲ.', 'ಆದರೆ ಪ್ರತಿ ಮಗುವಿಗೂ ಭವಿಷ್ಯ ಸಿಗಬೇಕು.', 'ಗೌರವ ಆಧಾರಿತ ಸಮುದಾಯ ಆರೈಕೆ', 'SAHAY Foundation ಕರುಣೆಯನ್ನು ತರಗತಿಗಳು, ಆರೋಗ್ಯ ಪ್ರವೇಶ, ತುರ್ತು ಪರಿಹಾರ ಮತ್ತು ದಾನಿಗಳು-ಸ್ವಯಂಸೇವಕರಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ದಾರಿಯಾಗಿ ರೂಪಿಸುತ್ತದೆ.', 'ನನ್ನ ಕಥೆ', '2005ರಿಂದ, ಒಂದು ಸ್ಥಳೀಯ ವಾಗ್ದಾನವು ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ, ಪರಿಹಾರ ಮತ್ತು ಆಶೆಯ ಅಳೆಯಬಹುದಾದ ಚಳವಳಿಯಾಗಿದೆ.', 'ಧ್ವನಿ ಆನ್', 'ಧ್ವನಿ ಆಫ್'],
    mission: ['ನಮ್ಮ ಧ್ಯೇಯ', 'ಸಹಾಯವು ಯಾರನ್ನೂ ಚಿಕ್ಕವರಂತೆ ಅನುಭವಿಸಬಾರದು.', 'ಮಗು, ಪೋಷಕ ಅಥವಾ ಹಿರಿಯರು ಬಿದ್ದುಹೋಗುವ ಮೊದಲು ತಲುಪುವಷ್ಟು ಹತ್ತಿರದ, ಮಾನವೀಯ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಯಿಂದ ಕೂಡಿದ ಬೆಂಬಲವನ್ನು SAHAY ನಿರ್ಮಿಸುತ್ತದೆ.'],
  },
  ml: {
    nav: ['ദൗത്യം', 'പ്രഭാവം', 'പരിപാടികൾ', 'കഥകൾ', 'സന്നദ്ധ സേവനം'],
    buttons: ['സംഭാവന ചെയ്യുക', 'ഇപ്പോൾ സംഭാവന', 'സന്നദ്ധ സേവനം', 'ഇതിന് പിന്തുണ', 'ലേഖനം വായിക്കുക'],
    hero: ['ഓരോ കുട്ടിയും സൗകര്യങ്ങളിൽ ജനിക്കുന്നില്ല.', 'എന്നാൽ ഓരോ കുട്ടിക്കും ഭാവി അർഹമാണ്.', 'മാന്യത നയിക്കുന്ന സമൂഹ പരിചരണം', 'SAHAY Foundation കരുണയെ ക്ലാസ് മുറികൾ, ആരോഗ്യപ്രവേശനം, അടിയന്തര ആശ്വാസം, ദാതാക്കൾക്കും സന്നദ്ധപ്രവർത്തകർക്കുമുള്ള വിശ്വസനീയ വഴിയായി മാറ്റുന്നു.', 'എന്റെ കഥ', '2005 മുതൽ, ഒരു പ്രാദേശിക വാഗ്ദാനം വിദ്യാഭ്യാസം, ആരോഗ്യം, ആശ്വാസം, പ്രതീക്ഷ എന്നിവയ്ക്കായുള്ള അളക്കാവുന്ന പ്രസ്ഥാനമായി വളർന്നു.', 'ശബ്ദം ഓൺ', 'ശബ്ദം ഓഫ്'],
    mission: ['ഞങ്ങളുടെ ദൗത്യം', 'സഹായം ഒരാളെയും ചെറുതായി തോന്നിക്കരുത്.', 'ഒരു കുട്ടി, രക്ഷിതാവ്, മുതിർന്നവൻ വഴുതി വീഴുന്നതിന് മുമ്പ് എത്തിച്ചേരാവുന്ന മനുഷ്യസ്നേഹമുള്ള, ഉത്തരവാദിത്തമുള്ള പിന്തുണ സൃഷ്ടിക്കുകയാണ് SAHAY.'],
  },
  mr: {
    nav: ['ध्येय', 'प्रभाव', 'कार्यक्रम', 'कथा', 'स्वयंसेवा'],
    buttons: ['दान करा', 'आता दान करा', 'स्वयंसेवा', 'याला मदत करा', 'लेख वाचा'],
    hero: ['प्रत्येक मूल सुविधांमध्ये जन्मत नाही.', 'पण प्रत्येक मुलाला भविष्याचा हक्क आहे.', 'सन्मानाने चालणारी समुदाय काळजी', 'SAHAY Foundation करुणेला वर्गखोल्या, आरोग्य सेवा, आपत्कालीन मदत आणि दाते-स्वयंसेवकांसाठी विश्वासू मार्गात बदलते.', 'माझी कथा', '2005 पासून, एक स्थानिक वचन शिक्षण, आरोग्य, मदत आणि आशेसाठी मोजता येणारी चळवळ बनले आहे.', 'आवाज सुरू', 'आवाज बंद'],
    mission: ['आमचे ध्येय', 'मदतीमुळे कोणालाही लहान वाटू नये.', 'मूल, पालक किंवा ज्येष्ठ व्यक्ती हातातून निसटण्यापूर्वी पोहोचेल अशी मानवी, जबाबदार आणि जवळची मदत उभी करणे हे SAHAYचे काम आहे.'],
  },
};

const fill = (entry, code) => {
  if (code === 'en') return entry;
  const base = content.en;
  const b = entry.buttons;
  const langName = languages.find((item) => item.code === code)?.label || '';
  const common = {
    te: ['సేవా వివరాలు', 'సమాజ సహాయం, విద్య, ఆరోగ్యం మరియు పారదర్శక ప్రభావం కోసం SAHAY చేస్తున్న పని.'],
    hi: ['सेवा विवरण', 'समुदाय सहायता, शिक्षा, स्वास्थ्य और पारदर्शी प्रभाव के लिए SAHAY का कार्य।'],
    ta: ['சேவை விவரங்கள்', 'சமூக உதவி, கல்வி, சுகாதாரம் மற்றும் வெளிப்படையான தாக்கத்திற்கான SAHAY பணிகள்.'],
    kn: ['ಸೇವಾ ವಿವರಗಳು', 'ಸಮುದಾಯ ನೆರವು, ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಮತ್ತು ಪಾರದರ್ಶಕ ಪರಿಣಾಮಕ್ಕಾಗಿ SAHAY ಮಾಡುವ ಕೆಲಸ.'],
    ml: ['സേവന വിവരങ്ങൾ', 'സമൂഹ സഹായം, വിദ്യാഭ്യാസം, ആരോഗ്യം, സുതാര്യമായ പ്രഭാവം എന്നിവയ്ക്കായുള്ള SAHAY പ്രവർത്തനം.'],
    mr: ['सेवा तपशील', 'समुदाय मदत, शिक्षण, आरोग्य आणि पारदर्शक परिणामासाठी SAHAYचे काम.'],
  };
  const local = (text) => (text.length < 22 ? `${langName} ${common[code][0]}` : common[code][1]);
  return {
    ...base,
    nav: entry.nav,
    buttons: { donate: b[0], donateNow: b[1], volunteer: b[2], fund: b[3], read: b[4] },
    hero: { ...base.hero, headline: entry.hero.slice(0, 2), kicker: entry.hero[2], copy: entry.hero[3], storyButton: entry.hero[4], note: entry.hero[5], soundOn: entry.hero[6], soundOff: entry.hero[7] },
    mission: { eyebrow: entry.mission[0], title: entry.mission[1], copy: entry.mission[2], blocks: base.missionBlocks.map(([k, t, c]) => [local(k), local(t), local(c)]) },
    documentary: { eyebrow: local(base.documentary[0]), title: local(base.documentary[1]), copy: local(base.documentary[2]), chapters: base.chapters.map(([e, t, c, m]) => [local(e), local(t), local(c), m]) },
    impact: { eyebrow: local(base.impact[0]), title: local(base.impact[1]), copy: local(base.impact[2]), metrics: base.metrics.map((item) => ({ ...item, label: local(item.label), note: local(item.note) })), allocation: { eyebrow: local(base.allocation[0]), title: local(base.allocation[1]), copy: local(base.allocation[2]), items: base.allocation[3].map(local) } },
    programs: { eyebrow: local(base.programs[0]), title: local(base.programs[1]), copy: local(base.programs[2]), items: base.programItems.map((item, index) => [local(item[0]), local(item[1]), local(item[2]), local(item[3]), mediaSet[index]]) },
    timeline: { eyebrow: local(base.timeline[0]), title: local(base.timeline[1]), copy: local(base.timeline[2]), items: base.timelineItems.map(([y, t, c]) => [y, local(t), local(c)]) },
    stories: { eyebrow: local(base.stories[0]), title: local(base.stories[1]), copy: local(base.stories[2]), before: local(base.stories[3]), after: local(base.stories[4]), previous: local(base.stories[5]), next: local(base.stories[6]), items: base.storyItems.map(([n, a, l, be, af, q, m]) => [n, a, local(l), local(be), local(af), local(q), m]) },
    gallery: { eyebrow: local(base.gallery[0]), title: local(base.gallery[1]), copy: local(base.gallery[2]), close: local(base.gallery[3]), play: local(base.gallery[4]), items: base.galleryItems.map(([t, d, s, c]) => [local(t), d, s, local(c)]) },
    volunteer: { eyebrow: local(base.volunteer[0]), title: local(base.volunteer[1]), copy: local(base.volunteer[2]), chips: base.volunteer[3].map(local), fields: { name: local(base.volunteer[4][0]), email: local(base.volunteer[4][1]), phone: local(base.volunteer[4][2]), availability: local(base.volunteer[4][3]), skills: local(base.volunteer[4][4]), message: local(base.volunteer[4][5]) }, options: base.volunteer[5].map(local), placeholder: local(base.volunteer[6]), submit: local(base.volunteer[7]), success: local(base.volunteer[8]), errors: { name: local(base.volunteer[9][0]), email: local(base.volunteer[9][1]), phone: local(base.volunteer[9][2]), skills: local(base.volunteer[9][3]), form: local(base.volunteer[9][4]) } },
    blog: { eyebrow: local(base.blog[0]), title: local(base.blog[1]), copy: local(base.blog[2]), posts: base.blog[3].map(([t, cat, d, s]) => [local(t), local(cat), d, local(s)]) },
    donation: { eyebrow: local(base.donation[0]), title: local(base.donation[1]), copy: local(base.donation[2]), current: local(base.donation[3]), thisCan: local(base.donation[4]), custom: local(base.donation[5]), placeholder: local(base.donation[6]), upiReady: local(base.donation[7]), upiNote: local(base.donation[8]), cardNote: local(base.donation[9]), continue: local(base.donation[10]), success: local(base.donation[11]), error: local(base.donation[12]), fallbacks: base.donation[13].map(local), presets: base.donation[14].map((item) => ({ ...item, impact: local(item.impact) })) },
    footer: { copy: local(base.footer[0]), contact: local(base.footer[1]), trust: local(base.footer[2]), links: base.footer[3].map(local), rights: local(base.footer[4]) },
  };
};

const normalize = (entry) => ({
  navItems: entry.nav.map((label, index) => ({ label, href: ['#mission', '#impact', '#programs', '#stories', '#volunteer'][index] })),
  buttons: entry.buttons.donate ? entry.buttons : { donate: entry.buttons[0], donateNow: entry.buttons[1], volunteer: entry.buttons[2], fund: entry.buttons[3], read: entry.buttons[4] },
  hero: entry.hero.headline ? entry.hero : { headline: entry.hero.slice(0, 2), kicker: entry.hero[2], copy: entry.hero[3], storyButton: entry.hero[4], note: entry.hero[5], soundOn: entry.hero[6], soundOff: entry.hero[7] },
  mission: entry.mission.blocks ? entry.mission : { eyebrow: entry.mission[0], title: entry.mission[1], copy: entry.mission[2], blocks: entry.missionBlocks },
  documentary: entry.documentary.chapters ? entry.documentary : { eyebrow: entry.documentary[0], title: entry.documentary[1], copy: entry.documentary[2], chapters: entry.chapters },
  impact: entry.impact.metrics ? entry.impact : { eyebrow: entry.impact[0], title: entry.impact[1], copy: entry.impact[2], metrics: entry.metrics, allocation: { eyebrow: entry.allocation[0], title: entry.allocation[1], copy: entry.allocation[2], items: entry.allocation[3] } },
  programs: entry.programs.items ? entry.programs : { eyebrow: entry.programs[0], title: entry.programs[1], copy: entry.programs[2], items: entry.programItems.map((item, index) => [...item, mediaSet[index]]) },
  timeline: entry.timeline.items ? entry.timeline : { eyebrow: entry.timeline[0], title: entry.timeline[1], copy: entry.timeline[2], items: entry.timelineItems },
  stories: entry.stories.items ? entry.stories : { eyebrow: entry.stories[0], title: entry.stories[1], copy: entry.stories[2], before: entry.stories[3], after: entry.stories[4], previous: entry.stories[5], next: entry.stories[6], items: entry.storyItems },
  gallery: entry.gallery.items ? entry.gallery : { eyebrow: entry.gallery[0], title: entry.gallery[1], copy: entry.gallery[2], close: entry.gallery[3], play: entry.gallery[4], items: entry.galleryItems },
  volunteer: entry.volunteer.fields ? entry.volunteer : { eyebrow: entry.volunteer[0], title: entry.volunteer[1], copy: entry.volunteer[2], chips: entry.volunteer[3], fields: { name: entry.volunteer[4][0], email: entry.volunteer[4][1], phone: entry.volunteer[4][2], availability: entry.volunteer[4][3], skills: entry.volunteer[4][4], message: entry.volunteer[4][5] }, options: entry.volunteer[5], placeholder: entry.volunteer[6], submit: entry.volunteer[7], success: entry.volunteer[8], errors: { name: entry.volunteer[9][0], email: entry.volunteer[9][1], phone: entry.volunteer[9][2], skills: entry.volunteer[9][3], form: entry.volunteer[9][4] } },
  blog: entry.blog.posts ? entry.blog : { eyebrow: entry.blog[0], title: entry.blog[1], copy: entry.blog[2], posts: entry.blog[3] },
  donation: entry.donation.presets ? entry.donation : { eyebrow: entry.donation[0], title: entry.donation[1], copy: entry.donation[2], current: entry.donation[3], thisCan: entry.donation[4], custom: entry.donation[5], placeholder: entry.donation[6], upiReady: entry.donation[7], upiNote: entry.donation[8], cardNote: entry.donation[9], continue: entry.donation[10], success: entry.donation[11], error: entry.donation[12], fallbacks: entry.donation[13], presets: entry.donation[14] },
  footer: entry.footer.copy ? entry.footer : { copy: entry.footer[0], contact: entry.footer[1], trust: entry.footer[2], links: entry.footer[3], rights: entry.footer[4] },
});

export const siteContent = Object.fromEntries(Object.entries(content).map(([code, entry]) => [code, normalize(fill(entry, code))]));
export const getContent = (language) => siteContent[language] || siteContent.en;
