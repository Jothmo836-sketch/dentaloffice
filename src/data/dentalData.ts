export interface DentalServiceItem {
  id: string;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  department: string;
  recovery: string;
}

export interface PatientReviewItem {
  id: string;
  name: string;
  location: string;
  avatar: string;
  quote: string;
}

export interface DentalBeliefItem {
  id: string;
  title: string;
  description: string;
  iconName: 'comfort' | 'sedation' | 'artistry' | 'expertise';
}

export const DENTAL_SERVICES: DentalServiceItem[] = [
  {
    id: 'smile-design',
    title: 'Porcelain Veneers & Smile Design',
    duration: '2 - 3 Visits',
    price: 850,
    image: '/assets/images/dental_smile_design_1790285681835.jpg',
    description: 'Transform your smile with bespoke ultra-thin porcelain veneers crafted to complement your facial structure. Correct chips, gaps, and discoloration with lifelike translucency and enduring strength.',
    highlights: [
      'Digital 3D Smile Simulation Preview',
      'Ultra-Conservative Tooth Preparation',
      'Custom Artisan Shade Harmonization',
      'Stain-Resistant High-Strength Ceramic'
    ],
    department: 'Cosmetic & Aesthetic Dentistry',
    recovery: 'Immediate Results, No Downtime'
  },
  {
    id: 'sedation',
    title: 'Gentle Sedation Dentistry',
    duration: 'Single Visit',
    price: 350,
    image: '/assets/images/dental_sedation_comfort_1790285693400.jpg',
    description: 'Overcome dental anxiety with our certified conscious sedation protocols. Whether for routine cleanings or complex oral surgery, experience tranquil, pain-free dental care in total relaxation.',
    highlights: [
      'Nitrous Oxide & Oral Conscious Sedation',
      'Continuous Vital Signs Monitoring',
      'Perform Multiple Procedures in One Visit',
      'Gentle & Compassionate Bedside Manner'
    ],
    department: 'Comfort & Sedation Care',
    recovery: 'Quick Recovery Within Hours'
  },
  {
    id: 'implants',
    title: 'Advanced Dental Implants',
    duration: 'Comprehensive',
    price: 950,
    image: '/assets/images/dental_implants_art_1790285702818.jpg',
    description: 'Restore missing teeth permanently with biocompatible titanium implants topped with custom zirconia crowns. Preserves jawbone structure and restores 100% natural chewing power and appearance.',
    highlights: [
      'Precision 3D CBCT Guided Surgery',
      'Biocompatible Titanium & Zirconia',
      'Single Tooth to Full-Arch Solutions',
      'Lifetime Durability & Bone Preservation'
    ],
    department: 'Restorative & Implantology',
    recovery: 'Local Anesthetic, Smooth Healing'
  },
  {
    id: 'invisalign',
    title: 'Invisalign & Clear Aligners',
    duration: '6 - 12 Months',
    price: 750,
    image: '/assets/images/dental_invisalign_aligner_1790285718564.jpg',
    description: 'Straighten your teeth discreetly with custom clear aligners. No metal wires or brackets—just removable, virtually invisible trays engineered with precision 3D digital tooth movement technology.',
    highlights: [
      'iTero Digital Impression (No Goopy Molds)',
      'Removable Trays for Easy Eating & Brushing',
      'Virtual Outcome Simulation Before Starting',
      'Fewer Office Visits, Ideal for Busy Lifestyles'
    ],
    department: 'Clear Orthodontics',
    recovery: 'Comfortable Daily Wear'
  },
  {
    id: 'whitening',
    title: 'In-Office Laser Teeth Whitening',
    duration: '45 Minutes',
    price: 299,
    image: '/assets/images/dental_smile_design_1790285681835.jpg',
    description: 'Brighten your natural smile up to 8 shades in a single comfortable session. Our medical-grade whitening gel activated by gentle light lifts deep enamel stains from coffee, wine, and aging.',
    highlights: [
      'Up to 8 Shades Brighter in 45 Mins',
      'Enamel-Safe Desensitizing Formula',
      'Includes Custom Take-Home Maintenance Trays',
      'Immediate Dramatic Visual Impact'
    ],
    department: 'Aesthetic Hygiene',
    recovery: 'Instant Results'
  },
  {
    id: 'rehabilitation',
    title: 'Full Mouth Oral Rehabilitation',
    duration: 'Multi-Phase Care',
    price: 1200,
    image: '/assets/images/dental_journey_gallery_1790285727791.jpg',
    description: 'A comprehensive revitalization plan tailored for patients facing extensive dental wear, broken teeth, or bite misalignment, combining aesthetic artistry with restorative longevity.',
    highlights: [
      'Complete TMJ & Bite Re-alignment',
      'Integrated Implants, Crowns & Veneers',
      'Restores Natural Facial Height & Youthfulness',
      'Flexible Financing & CareCredit Accepted'
    ],
    department: 'Full Reconstruction',
    recovery: 'Staged Step-by-Step Healing'
  }
];

export const DENTAL_BELIEFS: DentalBeliefItem[] = [
  {
    id: 'comfort',
    title: 'Patient-Centric Comfort',
    description: 'Being patient-centric is the compass that guides our dental care. We eliminate fear, listen attentively, and prioritize your peace of mind from the moment you step through our doors.',
    iconName: 'comfort'
  },
  {
    id: 'sedation',
    title: 'Anxiety-Free Sedation',
    description: 'Committed to gentle, trauma-free dentistry. Our certified sedation solutions ensure that sensitive patients and complex procedures remain peaceful, comfortable, and pain-free.',
    iconName: 'sedation'
  },
  {
    id: 'artistry',
    title: 'Authentic Smile Artistry',
    description: 'We craft smiles that enhance your natural facial harmony. Utilizing conservative tooth-preserving techniques, our restorations look, feel, and function like genuine healthy teeth.',
    iconName: 'artistry'
  },
  {
    id: 'expertise',
    title: 'Quality Clinical Guidance',
    description: 'Led by Dr. Diley Perez, DMD, every diagnosis is supported by digital 3D CBCT imaging, high-precision tools, and continuous education in advanced aesthetic and implant dentistry.',
    iconName: 'expertise'
  }
];

export const PATIENT_REVIEWS: PatientReviewItem[] = [
  {
    id: 'maria',
    name: 'Maria Gonzalez',
    location: 'Miami, FL',
    avatar: '/assets/images/avatar_traveler_priya_1790284880360.jpg',
    quote: "Dr. Diley Perez's commitment to patient comfort is truly commendable. If you want a dental experience that goes beyond ordinary fear and delivers flawless results, I highly recommend her office."
  },
  {
    id: 'carlos',
    name: 'Carlos Rodriguez',
    location: 'Coral Gables, FL',
    avatar: '/assets/images/avatar_traveler_miguel_1790284891393.jpg',
    quote: "They provided an amazing smile makeover that I'll never forget. The office on NW 7th St is pristine, the sedation made it completely painless, and my veneers look so natural."
  },
  {
    id: 'sophia',
    name: 'Sophia Lorenzo',
    location: 'Brickell, FL',
    avatar: '/assets/images/avatar_traveler_angelina_1790284902169.jpg',
    quote: "Their diverse range of modern treatments and unwavering dedication to gentle care make them my go-to choice for all my family's cosmetic and restorative dental needs."
  },
  {
    id: 'david',
    name: 'David Miller',
    location: 'Miami Beach, FL',
    avatar: '/assets/images/avatar_traveler_michael_1790284912797.jpg',
    quote: "Dr. Perez's commitment to patient satisfaction is truly commendable. My dental implant procedure was seamless, transparent, and completely free of anxiety. Exceptional team!"
  },
  {
    id: 'elena',
    name: 'Elena Torres',
    location: 'Little Havana, FL',
    avatar: '/assets/images/avatar_traveler_james_1790284929283.jpg',
    quote: "The authenticity of care, coupled with knowledgeable guides and compassionate staff, allowed me to regain my chewing confidence and a bright radiant smile."
  }
];

export const CLINIC_GALLERY = [
  {
    title: 'Modern Consultation & Diagnostic Suite',
    location: '2915 NW 7th St, Miami, FL',
    url: '/assets/images/dental_journey_gallery_1790285727791.jpg'
  },
  {
    title: 'Serene Patient Lounge & Reception',
    location: 'Comfortable Spa-Inspired Environment',
    url: '/assets/images/hero_dental_office_1790285670884.jpg'
  },
  {
    title: 'Custom Porcelain Veneers Outcome',
    location: 'Aesthetic Smile Transformation',
    url: '/assets/images/dental_smile_design_1790285681835.jpg'
  },
  {
    title: 'Gentle Sedation Treatment Operatory',
    location: 'Equipped with Advanced Patient Monitoring',
    url: '/assets/images/dental_sedation_comfort_1790285693400.jpg'
  },
  {
    title: 'Digital 3D Guided Implant Restoration',
    location: 'Precision Titanium & Zirconia',
    url: '/assets/images/dental_implants_art_1790285702818.jpg'
  },
  {
    title: 'Sunny Miami Clinic Exterior & Easy Parking',
    location: '2915 NW 7th St, Miami, FL 33125',
    url: '/assets/images/dental_clinic_exterior_1790285737117.jpg'
  }
];

export const CLINIC_INFO = {
  name: 'Dental Office · Dr. Diley Perez, DMD',
  brandName: 'smiledesign.',
  subBrand: 'Smile Design & Sedation Smiles',
  address: '2915 NW 7th St, Miami, FL 33125, United States',
  phone: '(305) 846-9082',
  hours: 'Monday - Friday: 9:00 AM - 5:30 PM | Saturday: By Appointment',
  googleMapsUrl: 'https://maps.google.com/?cid=17664123321116999719&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  doctor: 'Dr. Diley Perez, DMD',
  languages: 'English & Spanish (Bilingual Staff)'
};
