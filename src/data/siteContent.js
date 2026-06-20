export const media = {
  hero: '/media/children-learning.mp4',
  classroom: '/media/classroom-story.mp4',
  volunteer: '/media/volunteer-moment.mp4',
};

export const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Impact', href: '#impact' },
  { label: 'Programs', href: '#programs' },
  { label: 'Stories', href: '#stories' },
  { label: 'Volunteer', href: '#volunteer' },
];

export const missionBlocks = [
  {
    kicker: 'Education',
    title: 'Learning rooms that feel safe enough to dream in.',
    copy: 'Community classrooms, supplies, mentorship, and after-school support for children who are too often asked to grow up early.',
  },
  {
    kicker: 'Health',
    title: 'Care that arrives before a crisis becomes permanent.',
    copy: 'Medical camps, nutrition drives, menstrual health support, and referral networks built with dignity at the center.',
  },
  {
    kicker: 'Relief',
    title: 'Urgent help, delivered with local trust.',
    copy: 'Volunteer-led response for families facing displacement, illness, hunger, or sudden loss of income.',
  },
];

export const documentaryChapters = [
  {
    eyebrow: 'Chapter 01',
    title: 'A classroom can become a shelter for possibility.',
    copy: 'Every evening, a borrowed room becomes a place where children return to their own pace. The noise softens. A mentor listens. A future begins to look less far away.',
    media: media.classroom,
  },
  {
    eyebrow: 'Chapter 02',
    title: 'Relief is not a transaction. It is a relationship.',
    copy: 'SAHAY volunteers work through neighborhood trust, so families are seen as people first and beneficiaries second.',
    media: media.volunteer,
  },
  {
    eyebrow: 'Chapter 03',
    title: 'Hope becomes credible when it is measured.',
    copy: 'Attendance, nutrition, health referrals, scholarships, campaign reach, and donor reporting are tracked so compassion turns into accountable progress.',
    media: media.hero,
  },
];

export const impactMetrics = [
  {
    prefix: '',
    value: 5000,
    suffix: '+',
    label: 'lives impacted',
    note: 'children, families, and elders reached through field programs',
  },
  {
    prefix: '',
    value: 200,
    suffix: '+',
    label: 'volunteers',
    note: 'trained community members and city-based professional volunteers',
  },
  {
    prefix: '',
    value: 50,
    suffix: '+',
    label: 'campaigns',
    note: 'education, health, food security, and emergency response initiatives',
  },
  {
    prefix: '₹',
    value: 1.5,
    suffix: 'Cr',
    label: 'raised',
    note: 'donations, in-kind support, and partner-led commitments',
    decimals: 1,
  },
];

export const programs = [
  {
    title: 'Learning Without Fear',
    tag: 'Education',
    summary: 'Bridge classes, tutoring circles, school kits, and exam confidence programs for children at risk of dropping out.',
    stat: '1,800 learners',
    media: media.classroom,
  },
  {
    title: 'Meals With Dignity',
    tag: 'Nutrition',
    summary: 'Nutrition kits and warm meal drives designed with local women volunteers who know which homes need quiet help.',
    stat: '72,000 meals',
    media: media.hero,
  },
  {
    title: 'Health On The Move',
    tag: 'Health',
    summary: 'Mobile health camps, medicine access, hygiene kits, and referral assistance for families without reliable care.',
    stat: '34 camps',
    media: media.volunteer,
  },
  {
    title: 'Skill To Stand Tall',
    tag: 'Livelihood',
    summary: 'Youth mentorship, basic digital literacy, career readiness, and women-led micro-enterprise support.',
    stat: '420 trainees',
    media: media.classroom,
  },
];

export const timeline = [
  {
    year: '2005',
    title: 'SAHAY begins as a neighborhood promise.',
    copy: 'A small volunteer group starts with school supplies, food support, and a belief that reliable presence can change a family trajectory.',
  },
  {
    year: '2014',
    title: 'Programs formalize across education and health.',
    copy: 'Campaigns become structured initiatives with local coordinators, donor updates, and repeatable field processes.',
  },
  {
    year: '2018',
    title: 'Volunteer network scales citywide.',
    copy: 'Students, doctors, teachers, and working professionals join field teams, making weekend service a disciplined habit.',
  },
  {
    year: '2022',
    title: 'Relief operations become data-led.',
    copy: 'Family needs, stock, distribution, and follow-up are tracked so help reaches the right homes faster.',
  },
  {
    year: '2026',
    title: 'A new chapter of transparent, scalable impact.',
    copy: 'SAHAY enters its next phase with public reporting, digital donation flows, and deeper storytelling for donors and volunteers.',
  },
];

export const stories = [
  {
    name: 'Anaya',
    age: '11',
    label: 'Name changed for privacy',
    before: 'Missing school during family health emergencies.',
    after: 'Back in class with mentoring, supplies, and steady attendance support.',
    quote: 'I used to think school was for children with easier lives. Now I feel like it belongs to me too.',
    media: media.classroom,
  },
  {
    name: 'Rafiq',
    age: '14',
    label: 'Composite story slot',
    before: 'Falling behind after months without guided study time.',
    after: 'Joined evening learning circles and passed his term exams with confidence.',
    quote: 'A volunteer sat with me until maths stopped feeling like a wall.',
    media: media.hero,
  },
  {
    name: 'Meera',
    age: '9',
    label: 'Consent-ready format',
    before: 'Nutrition gaps were affecting focus and school participation.',
    after: 'Family received food support and a health camp referral through SAHAY.',
    quote: 'When my mother stopped worrying about dinner, I could think about tomorrow.',
    media: media.volunteer,
  },
];

export const gallery = [
  {
    title: 'Inside the learning circle',
    duration: '00:34',
    source: media.classroom,
    copy: 'A quiet look at the rhythm of after-school support.',
  },
  {
    title: 'Volunteer hands at work',
    duration: '00:22',
    source: media.volunteer,
    copy: 'Humanitarian care made visible through local action.',
  },
  {
    title: 'Children, safety, future',
    duration: '00:29',
    source: media.hero,
    copy: 'The emotional frame behind SAHAY’s education mission.',
  },
];

export const donorNames = [
  'Aarav Mehta',
  'Ishita Rao',
  'Nandini Kapoor',
  'Rohan Shah',
  'Fatima Khan',
  'Vivaan Iyer',
  'Priya Menon',
  'Karan Bansal',
  'Sanya Thomas',
  'Dev Arora',
  'Corporate Partner Circle',
  'Monthly Givers Collective',
];

export const blogPosts = [
  {
    title: 'What dignity changes in a donation program',
    category: 'Field Notes',
    date: 'June 2026',
    summary: 'Why the way help is delivered matters as much as the help itself.',
  },
  {
    title: 'Building transparent impact reports for donors',
    category: 'Trust',
    date: 'May 2026',
    summary: 'A practical look at metrics, stories, receipts, and field verification.',
  },
  {
    title: 'How weekend volunteers become community anchors',
    category: 'Volunteer',
    date: 'April 2026',
    summary: 'The systems that turn good intentions into reliable service.',
  },
];

export const donationPresets = [
  { amount: 500, impact: 'feeds a child for a week' },
  { amount: 1000, impact: 'funds books and learning materials' },
  { amount: 5000, impact: 'supports medical care for a family' },
];
