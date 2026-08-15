export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  address: string;
  addressMapUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    tripadvisor: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Bali Bagus Journey",
  tagline: "Private Tours & Airport Transfers in Bali",
  description: "Book trusted Bali tours, private driver services, and airport transfers with certified local Balinese experts.",
  phone: "+6285934484380",
  phoneDisplay: "+62 859-3448-4380",
  whatsappNumber: "6285934484380",
  whatsappUrl: "https://wa.me/6285934484380",
  email: "balibagusjourney@gmail.com",
  address: "Jl. Puputan Baru Gg. VI A No.26, Tegal Kertha, Kec. Denpasar Bar., Kota Denpasar, Bali 80111, Indonesia",
  addressMapUrl: "https://maps.google.com/?q=Jl.+Puputan+Baru+Gg.+VI+A+No.26,+Tegal+Kertha,+Denpasar,+Bali",
  socials: {
    instagram: "https://instagram.com/balibagusjourney",
    facebook: "https://facebook.com/balibagusjourney",
    tripadvisor: "https://tripadvisor.com"
  }
};

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    country: "Australia",
    rating: 5,
    date: "August 2026",
    title: "Unforgettable Mount Batur Sunrise",
    comment: "Our driver Wayan was exceptionally kind, punctual, and knowledgeable. The 4WD jeep up Mount Batur was the absolute highlight of our Bali holiday. Everything was seamlessly arranged with no hidden fees."
  },
  {
    id: "2",
    name: "Thomas Weber",
    country: "Germany",
    rating: 5,
    date: "July 2026",
    title: "Flawless Private Airport & Day Tours",
    comment: "Booked airport transfer and a 3-day private driver custom itinerary. The car was spotless, air conditioning was perfect, and our driver gave us great local warung recommendations. Highly recommended!"
  },
  {
    id: "3",
    name: "Aiko Tanaka",
    country: "Japan",
    rating: 5,
    date: "July 2026",
    title: "Best Snorkeling in Blue Lagoon",
    comment: "The coastal exploration to Blue Lagoon and Tanjung Jepun was magical! Crystal clear waters and safe boat captains. Bali Bagus Journey made sure our family felt safe and comfortable throughout the day."
  },
  {
    id: "4",
    name: "James & Priya Patel",
    country: "United Kingdom",
    rating: 5,
    date: "June 2026",
    title: "Exceptional Service in Ubud & Uluwatu",
    comment: "From the Uluwatu sunset Kecak dance to Ubud's waterfalls and rice terraces, everything was 10/10. Flexible timing, very respectful local guide, and transparent pricing. Will definitely book again!"
  },
  {
    id: "5",
    name: "Camille Dubois",
    country: "France",
    rating: 5,
    date: "May 2026",
    title: "Peaceful & Authentic Lovina Dolphins",
    comment: "Waking up early for Lovina dolphin watching was so worth it. The boat was private and peaceful. Bali Bagus Journey offers genuine Balinese hospitality that big tour operators simply cannot match."
  },
  {
    id: "6",
    name: "Michael Chen",
    country: "Singapore",
    rating: 5,
    date: "May 2026",
    title: "Smooth Group Trip with Hi-Ace",
    comment: "We rented the Toyota Hi-Ace for our group of 10 people for 4 days. Very spacious, punctual pickup, and stress-free navigation around Bali's traffic. Thank you Bali Bagus Journey!"
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const homeFAQs: FAQItem[] = [
  {
    id: "1",
    question: "What makes Bali Bagus Journey different from other operators?",
    answer: "We focus on authentic, private experiences rather than rushed, crowded tours. With certified local Balinese drivers, customizable routes, clean air-conditioned vehicles, and zero hidden fees, we ensure you explore Bali safely and at your own leisurely pace."
  },
  {
    id: "2",
    question: "Do I need to plan my entire trip before arriving in Bali?",
    answer: "Not at all! You can book in advance or consult with us via WhatsApp to build a flexible day-by-day plan. Even on the day of the tour, our drivers can adjust stops according to your mood, weather, and preferences."
  },
  {
    id: "3",
    question: "What is the best time of year to visit Bali for outdoor tours?",
    answer: "Bali is great year-round! The dry season from April to October is ideal for outdoor trekking, beach visits, and island hopping. The lush green wet season (November to March) is wonderful for waterfalls, cultural temple visits, and spa retreats."
  },
  {
    id: "4",
    question: "Can you accommodate guests with specific dietary or mobility needs?",
    answer: "Yes! We can tailor meal stops to vegetarian, vegan, halal, gluten-free, or allergy requirements. We also have private vehicles and itineraries suitable for elderly guests, toddlers, and guests with limited mobility."
  },
  {
    id: "5",
    question: "Are your services available across all regions of Bali?",
    answer: "Yes, we operate island-wide covering South Bali (Kuta, Seminyak, Canggu, Uluwatu, Nusa Dua, Sanur), Ubud & Central Bali, East Bali (Candidasa, Amed, Sidemen), North Bali (Lovina, Singaraja), and offshore island tours to Nusa Penida & Nusa Lembongan."
  }
];

export const aboutFAQs: FAQItem[] = [
  {
    id: "a1",
    question: "Who are the drivers and guides at Bali Bagus Journey?",
    answer: "All our drivers are 100% local Balinese professionals who are licensed, fluent in English, and have extensive experience navigating Bali roads while sharing authentic cultural knowledge."
  },
  {
    id: "a2",
    question: "What safety standards do you maintain for your vehicles?",
    answer: "Our fleet is regularly serviced at official authorized dealerships. Each vehicle features comprehensive insurance, clean air conditioning, seatbelts for all passengers, first-aid kits, and complimentary mineral water."
  },
  {
    id: "a3",
    question: "How does booking with Bali Bagus Journey support Balinese communities?",
    answer: "We directly employ local Balinese drivers, partner with community-owned boat captains in Lovina and Nusa Penida, and support local warungs and artisanal workshops rather than multinational intermediaries."
  },
  {
    id: "a4",
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 24 hours before your scheduled pickup time. No cancellation penalty or stressful procedures."
  },
  {
    id: "a5",
    question: "What payment methods do you accept, and do I need to pay in advance?",
    answer: "You can pay cash directly to your driver on the day of the tour in Indonesian Rupiah (IDR) or equivalent major currencies (USD, AUD, EUR). For peace of mind, bank transfers and online payment options are also available."
  }
];

export const contactFAQs: FAQItem[] = [
  {
    id: "c1",
    question: "How fast can I expect a reply after submitting an inquiry?",
    answer: "We reply almost instantly via WhatsApp (typically within 5-15 minutes during operating hours: 06:00 - 22:00 WITA) and within 2 hours for email submissions."
  },
  {
    id: "c2",
    question: "What should I include in my message to get the best itinerary suggestion?",
    answer: "Tell us your travel dates, number of travelers (adults and children), pickup location (hotel/villa name or airport flight number), and your preferred destinations or travel style (nature, culture, beaches, adventure)."
  },
  {
    id: "c3",
    question: "Do you accept last-minute bookings?",
    answer: "Yes, we accept same-day and next-day bookings subject to vehicle availability. Please contact us directly on WhatsApp for immediate confirmation."
  },
  {
    id: "c4",
    question: "What happens after I submit the inquiry form?",
    answer: "Our coordinator will confirm driver details, exact pickup time, vehicle model, and provide a summary itinerary with total transparent pricing."
  }
];

export const companyValues = [
  {
    title: "Personalized Service",
    description: "Every journey is customized to your personal pace, interests, and schedule. No rigid timetables or rushed photo stops.",
    icon: "lucide_compass"
  },
  {
    title: "Trusted Expertise",
    description: "Years of local Balinese driving experience ensuring safe travels, smart traffic shortcuts, and genuine insider recommendations.",
    icon: "ri_customer-service-line"
  },
  {
    title: "Sustainable Travel",
    description: "We practice respectful tourism that honors sacred Balinese customs, protects coastal environments, and directly enriches local village economies.",
    icon: "ri_sun-line"
  }
];
