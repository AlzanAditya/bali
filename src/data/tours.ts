export interface PricingTier {
  id: number;
  tour_id?: number;
  min_people: number;
  max_people: number | null;
  adult_price: string;
  child_price: string;
  description: string;
}

export interface TourItineraryItem {
  time?: string;
  title: string;
  description: string;
  subItems?: { title: string; desc: string }[];
}

export interface TourDestination {
  name: string;
  description: string;
  image?: string;
}

export interface TourItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "island-hopping" | "adventure" | "temple-culture" | "nature-scenery";
  categoryLabel: string;
  badge: string;
  priceFrom: number;
  duration: string;
  groupType: string;
  language: string;
  cancellation: string;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  destinations: TourDestination[];
  itinerary: TourItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  whatToBring: string[];
  pricingTiers: PricingTier[];
  faqs?: { question: string; answer: string }[];
}

export const tourCategories = [
  { id: "all", label: "All Tours" },
  { id: "island-hopping", label: "Island Hopping" },
  { id: "adventure", label: "Adventure" },
  { id: "temple-culture", label: "Temple & Culture" },
  { id: "nature-scenery", label: "Nature & Scenery" }
];

export const toursData: TourItem[] = [
  {
    id: "tour-1",
    slug: "dolphin-watching-tour",
    title: "Dolphin Watching Tour",
    subtitle: "Lovina Sunrise & Ocean Dolphin Experience",
    category: "island-hopping",
    categoryLabel: "Island Hopping",
    badge: "Island Hopping",
    priceFrom: 20,
    duration: "10 - 12 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 128,
    coverImage: "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
      "/assets/galleries/bdk2uvvu6stlowu9fhjc.webp",
      "/assets/galleries/dkuokdg5xh0xpytwno7v.webp"
    ],
    overview: "Experience the magic of North Bali on an early morning private journey to Lovina Beach. Watch wild dolphins jumping in their natural marine habitat as the golden sunrise emerges over the Bali Sea. This tour includes private air-conditioned transportation, a traditional motorized outrigger boat with an experienced local boatman, life jackets, and the option to swim alongside the dolphins in clear waters.",
    highlights: [
      "Witness playful wild dolphins in their natural open-sea habitat",
      "Marvel at the spectacular sunrise over the calm Bali Sea",
      "Optional swimming/snorkeling with underwater viewing bar",
      "Comfortable round-trip private car transfer with local driver",
      "Flexible breakfast and scenic coffee stops on the return journey"
    ],
    destinations: [
      {
        name: "Lovina Beach Coastline",
        description: "Known for its distinctive black volcanic sand and gentle waters, Lovina is Bali's prime sanctuary for wild spinner and spotted dolphins."
      },
      {
        name: "Gitgit or Banyumala Waterfall (Optional)",
        description: "En route back, stop at one of North Bali's most majestic twin waterfalls surrounded by lush tropical rainforest."
      },
      {
        name: "Ulun Danu Beratan Temple",
        description: "The iconic floating temple situated on Lake Beratan, nestled within the cool highlands of Bedugul."
      }
    ],
    itinerary: [
      {
        time: "03:00 AM",
        title: "Hotel Pickup & Journey to Lovina",
        description: "Your private driver picks you up from your hotel in South Bali or Ubud in a comfortable air-conditioned car for the scenic night drive to North Bali.",
        subItems: [
          { title: "Hotel Pickup", desc: "Private vehicle pickup from Kuta, Seminyak, Canggu, Sanur, Nusa Dua, or Ubud." },
          { title: "Arrival at Lovina Beach", desc: "Arrive at Lovina around 05:30 AM and meet your licensed local boat captain." }
        ]
      },
      {
        time: "06:00 AM",
        title: "Sunrise & Dolphin Watching",
        description: "Board the traditional wooden boat and cruise into the calm sea just as the morning glow paints the sky.",
        subItems: [
          { title: "Sunrise Experience", desc: "Soak in 360-degree ocean views as dawn breaks over the northern horizon." },
          { title: "Dolphin Watching", desc: "Watch pods of wild dolphins surfacing, leaping, and swimming around the boat." },
          { title: "Optional Swimming", desc: "Hold onto the boat's stabilizer bar to swim with life jacket and snorkel mask." }
        ]
      },
      {
        time: "08:30 AM",
        title: "Breakfast & Return Journey",
        description: "Return to the shore for a fresh seaside breakfast and coffee before driving back with scenic stops in Bedugul.",
        subItems: [
          { title: "Return to Shore", desc: "Freshen up and enjoy breakfast at a local beachside cafe." },
          { title: "Hotel Drop-off", desc: "Relax in your private vehicle as you are escorted back to your accommodation." }
        ]
      }
    ],
    inclusions: [
      "Private air-conditioned car with certified English-speaking driver",
      "Fuel, toll fees, and parking charges",
      "Private chartered traditional outrigger boat at Lovina",
      "Life jackets and snorkeling equipment",
      "Complimentary bottled mineral water",
      "Hotel pickup and drop-off"
    ],
    exclusions: [
      "Personal breakfast and lunch expenses",
      "Optional entrance fees to waterfalls or Bedugul temple",
      "Driver/boatman gratuities (optional)"
    ],
    whatToBring: [
      "Comfortable light clothing and change of dry clothes",
      "Swimwear and beach towel",
      "Camera or waterproof phone case",
      "Sunscreen and sunglasses",
      "Cash in IDR for food and personal souvenirs"
    ],
    pricingTiers: [
      { id: 5, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "Solo Private Tour (1 Person)" },
      { id: 6, min_people: 2, max_people: 2, adult_price: "40.00", child_price: "0.00", description: "Private Tour for 2 Guests (Price per Person)" },
      { id: 7, min_people: 3, max_people: 3, adult_price: "30.00", child_price: "0.00", description: "Private Tour for 3 Guests (Price per Person)" },
      { id: 8, min_people: 4, max_people: null, adult_price: "20.00", child_price: "0.00", description: "Group Tour for 4+ Guests (Price per Person)" }
    ]
  },
  {
    id: "tour-2",
    slug: "mount-batur-sunrise-trek-jeep-tour",
    title: "Mount Batur Sunrise Trek & Jeep Tour",
    subtitle: "4WD Jeep Adventure & Volcanic Black Lava Exploration",
    category: "adventure",
    categoryLabel: "Adventure",
    badge: "Adventure",
    priceFrom: 55,
    duration: "9 - 10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 5.0,
    reviewsCount: 195,
    coverImage: "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
      "/assets/galleries/ttoubtl9ndmw21ny1c3q.webp",
      "/assets/galleries/erpcsospbml5v1sl6xzs.webp"
    ],
    overview: "Start your adventure in the early morning and discover the magical beauty of Mount Batur. Experience the breathtaking sunrise from the volcanic caldera, explore dramatic black lava fields by custom 4WD Jeep, and gaze upon Lake Batur and Kintamani's majestic mountains. This private tour combines adrenaline, panoramic vistas, hot breakfast cooked by volcanic steam, and natural hot spring relaxation.",
    highlights: [
      "Witness an awe-inspiring sunrise above the clouds on Mount Batur",
      "Ride a classic custom 4WD Jeep through rugged volcanic black lava formations",
      "Enjoy a warm breakfast with hot coffee overlooking Lake Batur",
      "Optional soak in natural Batur volcanic hot springs",
      "Visit a traditional Balinese coffee plantation with complimentary tasting"
    ],
    destinations: [
      {
        name: "Mount Batur Sunrise Point",
        description: "A vantage point 1,365 meters above sea level offering panoramic views of Mount Agung, Mount Rinjani in Lombok, and the morning cloud sea."
      },
      {
        name: "Black Lava & Black Sand Fields",
        description: "Vast historic volcanic terrain formed during the 1968 and 1974 eruptions, accessible exclusively by 4WD vehicles."
      },
      {
        name: "Kintamani Coffee Plantation",
        description: "Sample famous Luwak coffee and herbal teas with sweeping views over the caldera."
      }
    ],
    itinerary: [
      {
        time: "02:30 AM",
        title: "Early Morning Pickup & Journey to Mount Batur",
        description: "Depart from your accommodation in our private vehicle heading toward Kintamani highland.",
        subItems: [
          { title: "Hotel Pickup", desc: "Pickup from all major areas in South Bali and Ubud." },
          { title: "Meet 4WD Jeep Driver", desc: "Transfer to your open-top 4WD Jeep at the base station." }
        ]
      },
      {
        time: "05:00 AM",
        title: "Mount Batur Sunrise Experience",
        description: "Drive up the mountain slopes to the sunrise viewpoint before the first light appears.",
        subItems: [
          { title: "Sunrise & Breakfast", desc: "Enjoy hot tea/coffee and freshly prepared breakfast as the sun rises." },
          { title: "Caldera Photography", desc: "Take stunning photos with the Jeep and morning golden light." }
        ]
      },
      {
        time: "07:30 AM",
        title: "Black Lava Jeep Adventure & Coffee Tasting",
        description: "Descend into the black lava desert and explore geological volcanic marvels.",
        subItems: [
          { title: "Black Lava Exploration", desc: "Experience off-road Jeep maneuvers across volcanic stone tracks." },
          { title: "Plantation & Return", desc: "Visit a lush coffee farm for tasting before heading back to your hotel." }
        ]
      }
    ],
    inclusions: [
      "Private air-conditioned hotel transfers",
      "Private 4WD Jeep with licensed local mountain driver",
      "Mount Batur entrance tickets and environmental fees",
      "Hot breakfast (banana sandwiches, boiled eggs, fruit, hot coffee/tea)",
      "Coffee plantation visit and tea tasting flight",
      "Mineral water throughout the tour"
    ],
    exclusions: [
      "Optional Batur Natural Hot Spring admission ticket ($10/person)",
      "Lunch at Kintamani panoramic restaurant",
      "Personal souvenirs and Luwak coffee cup upgrade"
    ],
    whatToBring: [
      "Warm jacket or hoodie (it gets 15°C before sunrise)",
      "Comfortable sports shoes or sneakers",
      "Camera or smartphone with full battery",
      "Sunglasses and sunscreen for the daylight hours",
      "Swimsuit if choosing the hot spring add-on"
    ],
    pricingTiers: [
      { id: 9, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "Solo Private Tour (1 Person)" },
      { id: 10, min_people: 2, max_people: 2, adult_price: "55.00", child_price: "0.00", description: "Private Tour for 2 Guests (Price per Person)" },
      { id: 11, min_people: 3, max_people: 4, adult_price: "55.00", child_price: "0.00", description: "Private Tour for 3-4 Guests (Price per Person)" }
    ]
  },
  {
    id: "tour-3",
    slug: "blue-lagoon-coastal-exploration",
    title: "Blue Lagoon Coastal Exploration",
    subtitle: "Snorkeling Paradise in Padangbai & East Bali Charm",
    category: "island-hopping",
    categoryLabel: "Island Hopping",
    badge: "Island Hopping",
    priceFrom: 55,
    duration: "8 - 10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 142,
    coverImage: "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
      "/assets/galleries/dkuokdg5xh0xpytwno7v.webp",
      "/assets/galleries/xkcqpgpatfpmvfixwgl9.webp"
    ],
    overview: "Discover the hidden coastal beauty of East Bali on a private journey to Blue Lagoon and Tanjung Jepun in Padangbai. Swim in crystal-clear turquoise waters teeming with colorful coral reefs, clownfish, turtles, and tropical marine life. Enjoy a relaxing stop at a scenic ocean-view infinity pool before exploring Bali's premier snorkeling sanctuaries with an experienced local boatman.",
    highlights: [
      "2 hours of boat snorkeling at two distinct reef spots: Blue Lagoon & Tanjung Jepun",
      "Encounter vibrant coral gardens, Nemo clownfish, moray eels, and sea turtles",
      "Private boat transfer with complete premium snorkeling gear included",
      "Hot shower and locker facilities provided after snorkeling",
      "Authentic Indonesian lunch served at a beachside restaurant"
    ],
    destinations: [
      {
        name: "Blue Lagoon Snorkeling Bay",
        description: "A sheltered white-sand bay featuring calm currents, bright underwater visibility, and rich coral reefs ideal for beginners and families."
      },
      {
        name: "Tanjung Jepun Coral Reef",
        description: "Known for larger marine life, soft corals, and artificial reef structures where diverse tropical schools gather."
      },
      {
        name: "Padangbai Beachside",
        description: "A picturesque traditional harbor village framed by rolling coastal hills and authentic fishing outriggers."
      }
    ],
    itinerary: [
      {
        time: "08:00 AM",
        title: "Hotel Pickup & Journey to East Bali",
        description: "Relax in your private air-conditioned vehicle as we drive along Bali's eastern coastal highway.",
        subItems: [
          { title: "Hotel Pickup", desc: "Direct pickup from your villa or hotel." },
          { title: "Arrival at Padangbai", desc: "Receive your snorkeling gear and safety briefing from your guide." }
        ]
      },
      {
        time: "10:00 AM",
        title: "Snorkeling at Blue Lagoon & Tanjung Jepun",
        description: "Board your private motorized jukung boat for 2 full hours of reef exploration.",
        subItems: [
          { title: "Blue Lagoon Spot", desc: "Snorkel in turquoise waters with abundant colorful reef fish." },
          { title: "Tanjung Jepun Spot", desc: "Discover deep drop-offs and underwater coral formations." }
        ]
      },
      {
        time: "01:00 PM",
        title: "Lunch & Scenic Return",
        description: "Take a warm shower, change into dry clothes, and enjoy a delicious lunch before returning.",
        subItems: [
          { title: "Indonesian Lunch", desc: "Enjoy Nasi Goreng, Mie Goreng, or Grilled Chicken with fresh juice." },
          { title: "Hotel Drop-off", desc: "Smooth return trip back to your hotel." }
        ]
      }
    ],
    inclusions: [
      "Private car transfer with English-speaking driver",
      "Private traditional boat for snorkeling",
      "All snorkeling gear (mask, snorkel, fins, life jacket)",
      "Local snorkeling guide and fish food",
      "Shower, towel, and changing room facilities",
      "Delicious Indonesian lunch and mineral water",
      "All entrance and harbor fees"
    ],
    exclusions: [
      "Underwater camera rental (available on-site for small fee)",
      "Alcoholic beverages during lunch",
      "Personal expenses"
    ],
    whatToBring: [
      "Swimsuit, change of clothes, and flip flops",
      "Sun protection (reef-safe sunscreen, sunglasses, hat)",
      "Underwater camera or phone pouch",
      "Cash for drinks or optional activities"
    ],
    pricingTiers: [
      { id: 28, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "Solo Private Tour (1 Person)" },
      { id: 29, min_people: 2, max_people: 2, adult_price: "55.00", child_price: "0.00", description: "Private Tour for 2 Guests (Price per Person)" },
      { id: 30, min_people: 3, max_people: 3, adult_price: "55.00", child_price: "0.00", description: "Private Tour for 3 Guests (Price per Person)" },
      { id: 31, min_people: 4, max_people: null, adult_price: "55.00", child_price: "0.00", description: "Group of 4+ Guests (Price per Person)" }
    ]
  },
  {
    id: "tour-4",
    slug: "uluwatu-tour",
    title: "Uluwatu Tour",
    subtitle: "Cliffside Temple, Padang Padang Beach & Kecak Fire Dance",
    category: "temple-culture",
    categoryLabel: "Temple & Culture",
    badge: "Temple & Culture",
    priceFrom: 55,
    duration: "10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 5.0,
    reviewsCount: 210,
    coverImage: "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
      "/assets/galleries/tpaoqgzfbkrfpwntmtje.webp",
      "/assets/galleries/sotlfso1va1cge2szlmn.webp"
    ],
    overview: "Discover the beauty of South Bali on a private full-day journey combining exciting water sports, stunning beaches, Balinese culture, and a magical sunset experience. Visit the iconic Garuda Wisnu Kencana Cultural Park, relax at Padang Padang Beach, and explore the spectacular Uluwatu Temple perched on a 70-meter sea cliff. End the day watching the legendary Kecak Fire Dance at sunset, with an optional candlelight seafood dinner at Jimbaran Bay.",
    highlights: [
      "Explore the majestic Uluwatu Temple overlooking crashing Indian Ocean waves",
      "Experience the mesmerizing Kecak and Fire Dance performance at golden hour",
      "Relax at the world-famous Padang Padang Beach featured in 'Eat Pray Love'",
      "Visit the awe-inspiring Garuda Wisnu Kencana (GWK) cultural monument",
      "Optional sunset beachfront grilled seafood dinner on the sand at Jimbaran Bay"
    ],
    destinations: [
      {
        name: "Tanjung Benoa Water Sports",
        description: "Bali's premier marine hub with optional parasailing, banana boat, jet ski, and sea walker."
      },
      {
        name: "Garuda Wisnu Kencana (GWK)",
        description: "One of the tallest statues in the world standing at 122 meters, surrounded by expansive cultural gardens."
      },
      {
        name: "Padang Padang Beach",
        description: "A gorgeous cove accessible through a scenic limestone cave staircase with turquoise surf."
      },
      {
        name: "Uluwatu Cliff Temple & Kecak Amphitheater",
        description: "An ancient sea temple guarding the southern peninsula with open-air sunset performance stages."
      }
    ],
    itinerary: [
      {
        time: "10:30 AM",
        title: "Hotel Pickup & Water Sports / GWK",
        description: "Start the day with water sports fun at Tanjung Benoa or proceed directly to GWK Cultural Park.",
        subItems: [
          { title: "Hotel Pickup", desc: "Comfortable pickup from your villa or hotel." },
          { title: "GWK Cultural Experience", desc: "Marvel at monumental statues and traditional Balinese dance showcases." }
        ]
      },
      {
        time: "02:30 PM",
        title: "Padang Padang Beach Relaxation",
        description: "Unwind on the soft golden sands, swim in the clear cove, or watch world-class surfers.",
        subItems: [
          { title: "Beach Leisure", desc: "Enjoy coconut drinks and swim in sheltered turquoise waters." }
        ]
      },
      {
        time: "05:00 PM",
        title: "Uluwatu Temple & Sunset Kecak Fire Dance",
        description: "Arrive at Uluwatu Cliff Temple, take photos along the cliff walkways, and take your seat for the show.",
        subItems: [
          { title: "Temple Exploration", desc: "Walk along the panoramic cliff edge paths (sarong provided)." },
          { title: "Kecak Fire Dance", desc: "Watch 50+ chanting performers reenact the Ramayana epic as the sun sinks into the sea." }
        ]
      },
      {
        time: "07:30 PM",
        title: "Jimbaran Seafood Dinner & Hotel Return",
        description: "Optional romantic dinner at Jimbaran Bay with fresh grilled seafood served directly on the beach.",
        subItems: [
          { title: "Jimbaran Dinner", desc: "Dine under the stars with ocean breeze (meal cost at your own expense)." },
          { title: "Hotel Drop-off", desc: "Safe return to your hotel." }
        ]
      }
    ],
    inclusions: [
      "Private air-conditioned car with certified English-speaking driver",
      "Fuel, road tolls, and parking fees",
      "Uluwatu Temple entrance ticket & traditional sarong loan",
      "Kecak Fire Dance performance ticket",
      "Complimentary chilled mineral water"
    ],
    exclusions: [
      "GWK Park entrance tickets (optional)",
      "Water sports activities fees",
      "Jimbaran Bay seafood dinner food and drink costs",
      "Personal gratuities"
    ],
    whatToBring: [
      "Comfortable walking shoes or sandals",
      "Camera for sunset and show photography",
      "Sun protection (sunglasses, hat, sunscreen)",
      "Cash in IDR for optional meals and souvenirs"
    ],
    pricingTiers: [
      { id: 32, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "Solo Private Tour (1 Person)" },
      { id: 33, min_people: 2, max_people: 2, adult_price: "55.00", child_price: "0.00", description: "Private Tour for 2 Guests (Price per Person)" },
      { id: 34, min_people: 3, max_people: 3, adult_price: "55.00", child_price: "0.00", description: "Private Tour for 3 Guests (Price per Person)" },
      { id: 35, min_people: 4, max_people: null, adult_price: "55.00", child_price: "0.00", description: "Group Tour for 4+ Guests (Price per Person)" }
    ]
  },
  {
    id: "tour-5",
    slug: "breakfast-with-orangutans-bali-zoo",
    title: "Breakfast with Orangutans & Bali Zoo",
    subtitle: "Unique Wildlife Dining & Family Jungle Adventure",
    category: "nature-scenery",
    categoryLabel: "Nature & Scenery",
    badge: "Nature & Scenery",
    priceFrom: 55,
    duration: "7 - 8 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.8,
    reviewsCount: 89,
    coverImage: "/assets/galleries/bdk2uvvu6stlowu9fhjc.webp",
    galleryImages: [
      "/assets/galleries/bdk2uvvu6stlowu9fhjc.webp",
      "/assets/galleries/uwvcv1a5gxmyr9fiphlm.webp"
    ],
    overview: "Create unforgettable memories with a unique wildlife experience at Bali Zoo. Start your morning with a special gourmet breakfast while observing charming orangutans in their open habitat. Discover exotic animals, enjoy interactive animal presentations, feed gentle elephants, and cool off at the Jungle Splash Waterplay area. Perfect for families, couples, and animal lovers.",
    highlights: [
      "Enjoy a full buffet breakfast in close proximity to free-roaming orangutans",
      "Interactive encounters and photo opportunities with zoo ambassadors",
      "Full day admission to Bali Zoo exhibitions and animal presentations",
      "Access to Jungle Splash Waterplay pool for kids",
      "Private hotel transfer with our courteous family-friendly driver"
    ],
    destinations: [
      { name: "Bali Zoo Singapadu", description: "Bali's premier zoological park housing over 500 rare and exotic tropical species." },
      { name: "Ubud Art Village (Optional)", description: "Stop at Celuk or Mas village to see master silversmiths and woodcarvers." }
    ],
    itinerary: [
      {
        time: "07:00 AM",
        title: "Hotel Pickup & Transfer to Bali Zoo",
        description: "Early morning pickup to ensure arrival before breakfast starts at 08:00 AM."
      },
      {
        time: "08:00 AM",
        title: "Breakfast with Orangutans",
        description: "Savor a delicious buffet with tropical fruits, pastries, and Indonesian specialties with orangutans nearby."
      },
      {
        time: "10:00 AM",
        title: "Zoo Exploration & Animal Shows",
        description: "Walk through shaded jungle paths, feed deer and elephants, and watch educational bird shows."
      },
      {
        time: "01:30 PM",
        title: "Return Journey to Hotel",
        description: "Relax in your private vehicle on the journey back to your accommodation."
      }
    ],
    inclusions: [
      "Private roundtrip air-conditioned transportation",
      "Zoo entrance ticket and Breakfast with Orangutan package",
      "Animal shows and Jungle Splash Waterplay access",
      "Complimentary bottled water"
    ],
    exclusions: ["Personal animal food purchase for feeding", "Driver tip"],
    whatToBring: ["Casual clothes", "Swimwear and towel for children", "Camera", "Sun protection"],
    pricingTiers: [
      { id: 36, min_people: 1, max_people: 1, adult_price: "65.00", child_price: "45.00", description: "1 Guest" },
      { id: 37, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "35.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-6",
    slug: "nusa-penida-east-tour",
    title: "Nusa Penida East Tour",
    subtitle: "Diamond Beach, Atuh Beach & Molenteng Tree House",
    category: "island-hopping",
    categoryLabel: "Island Hopping",
    badge: "Island Hopping",
    priceFrom: 55,
    duration: "10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 164,
    coverImage: "/assets/galleries/dkuokdg5xh0xpytwno7v.webp",
    galleryImages: [
      "/assets/galleries/dkuokdg5xh0xpytwno7v.webp",
      "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp"
    ],
    overview: "Discover the breathtaking beauty of East Nusa Penida on a private island adventure. Explore dramatic cliffs, pristine white sand beaches, turquoise waters, and spectacular ocean viewpoints across the eastern side of the island. Visit the famous Molenteng Tree House, admire the coastline from Thousand Island Viewpoint, and step down to the iconic Diamond Beach and Atuh Beach.",
    highlights: [
      "Roundtrip fast boat transfer between Sanur Harbor and Nusa Penida",
      "Dedicated private car and local island driver in Nusa Penida",
      "Climb to the famous Molenteng Tree House for postcard-perfect ocean views",
      "Marvel at the limestone sea spires of Diamond Beach and Atuh Beach",
      "Delicious Indonesian lunch included on the island"
    ],
    destinations: [
      { name: "Diamond Beach", description: "Famous for its cliff-carved staircase leading to untouched white sand and diamond-shaped karst rocks." },
      { name: "Atuh Beach", description: "A tranquil cove framed by curved cliffs, natural arches, and crystal turquoise shallows." },
      { name: "Thousand Islands (Pulau Seribu) & Tree House", description: "Spectacular panoramic viewpoint looking across dozens of offshore green sea stacks." },
      { name: "Teletubbies Hill", description: "Rolling emerald green rounded hills reminiscent of a fairy tale landscape." }
    ],
    itinerary: [
      {
        time: "06:30 AM",
        title: "Hotel Pickup & Sanur Harbor Check-In",
        description: "Pickup from your hotel and transfer to Sanur Port to board the high-speed ferry to Nusa Penida."
      },
      {
        time: "08:30 AM",
        title: "Arrival in Nusa Penida & Island Tour",
        description: "Meet your private island driver at the harbor and start the scenic drive across East Nusa Penida."
      },
      {
        time: "09:30 AM",
        title: "Tree House & Thousand Islands Viewpoint",
        description: "Capture iconic photos at the clifftop wooden tree house with sweeping coastal panoramas."
      },
      {
        time: "12:00 PM",
        title: "Diamond Beach & Atuh Beach Exploration",
        description: "Walk down the scenic cliff path to the pristine beach, swim, and enjoy a local lunch."
      },
      {
        time: "04:30 PM",
        title: "Fast Boat Return to Bali Main Island",
        description: "Return to Sanur harbor and transfer comfortably back to your hotel."
      }
    ],
    inclusions: [
      "Hotel pickup and drop-off in Bali main island",
      "Roundtrip fast boat tickets (Sanur - Nusa Penida - Sanur)",
      "Private air-conditioned car & driver in Nusa Penida",
      "All island entrance tickets and government retribution fees",
      "Indonesian lunch and mineral water"
    ],
    exclusions: ["Tree house photo queue fee (approx IDR 75k)", "Personal expenses"],
    whatToBring: ["Comfortable hiking sandals or sneakers", "Sunscreen, sunglasses, and hat", "Swimwear and towel", "Cash in IDR"],
    pricingTiers: [
      { id: 38, min_people: 1, max_people: 1, adult_price: "75.00", child_price: "50.00", description: "1 Guest" },
      { id: 39, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "35.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-7",
    slug: "east-west-nusa-penida-tour",
    title: "East & West Nusa Penida Tour",
    subtitle: "Ultimate All-in-One Island & Snorkeling Adventure",
    category: "island-hopping",
    categoryLabel: "Island Hopping",
    badge: "Island Hopping",
    priceFrom: 55,
    duration: "11 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 5.0,
    reviewsCount: 178,
    coverImage: "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
      "/assets/galleries/dkuokdg5xh0xpytwno7v.webp"
    ],
    overview: "Experience the ultimate Nusa Penida adventure combining the absolute best highlights of both East and West coasts in one seamless private day tour. Visit the T-Rex cliff at Kelingking Beach, Broken Beach, Angel's Billabong, and travel east to Diamond Beach and Molenteng Tree House with fast boat tickets and private island transport.",
    highlights: [
      "Complete combination of East and West Nusa Penida's top 5 landmarks",
      "Kelingking Beach T-Rex viewpoint and Angel's Billabong natural infinity pool",
      "Diamond Beach crystal waters and Thousand Islands overlook",
      "Private car and dedicated island coordinator throughout the day",
      "Fast boat roundtrip tickets with hotel transfers included"
    ],
    destinations: [
      { name: "Kelingking T-Rex Cliff", description: "The iconic green ridge shaped like a Tyrannosaurus Rex overlooking turquoise waters." },
      { name: "Broken Beach (Pasih Uug)", description: "A dramatic circular coastal cove with a natural stone archway." },
      { name: "Angel's Billabong", description: "A natural emerald-green tidal pool embedded in limestone rocks." },
      { name: "Diamond Beach", description: "Stunning east coast bay with sparkling white sand and diamond sea stacks." }
    ],
    itinerary: [
      { time: "06:15 AM", title: "Hotel Pickup & Fast Boat to Nusa Penida", description: "Morning harbor departure from Sanur." },
      { time: "08:30 AM", title: "West Highlights: Kelingking & Broken Beach", description: "Marvel at the world-famous T-Rex ridge and natural arch." },
      { time: "12:30 PM", title: "Lunch & East Transfer", description: "Enjoy island lunch before heading east." },
      { time: "02:00 PM", title: "East Highlights: Diamond Beach & Tree House", description: "Visit the postcard-famous eastern coastline." },
      { time: "04:30 PM", title: "Return Boat to Bali & Hotel Drop-off", description: "Ferry back to Sanur and private transfer home." }
    ],
    inclusions: ["All transfers", "Fast boat tickets", "Private island car", "Entrance fees", "Lunch", "Water"],
    exclusions: ["Personal drinks", "Gratuities"],
    whatToBring: ["Sturdy walking shoes", "Sunscreen", "Camera", "Cash"],
    pricingTiers: [
      { id: 40, min_people: 1, max_people: 1, adult_price: "85.00", child_price: "55.00", description: "1 Guest" },
      { id: 41, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "35.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-8",
    slug: "nusa-penida-west-snorkeling-tour",
    title: "Nusa Penida West & Snorkeling Tour",
    subtitle: "Manta Bay Snorkeling & Iconic Coastal Landmarks",
    category: "island-hopping",
    categoryLabel: "Island Hopping",
    badge: "Island Hopping",
    priceFrom: 55,
    duration: "10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 153,
    coverImage: "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
      "/assets/galleries/bdk2uvvu6stlowu9fhjc.webp"
    ],
    overview: "Combine thrilling open-ocean snorkeling with West Nusa Penida's most famous coastal sights. Snorkel with majestic Manta Rays at Manta Bay and explore crystal reefs at Gamat Bay and Crystal Bay, followed by private land sightseeing at Kelingking Beach, Broken Beach, and Angel's Billabong.",
    highlights: [
      "Snorkel with giant Manta Rays in their natural ocean feeding stations",
      "Explore 3 top snorkeling bays: Manta Bay, Gamat Bay, and Crystal Bay",
      "Visit Kelingking Secret Point T-Rex cliff and Broken Beach arch",
      "Complete snorkeling gear, boat captain, and underwater photos provided",
      "All-inclusive package with fast boat, lunch, and private car transfers"
    ],
    destinations: [
      { name: "Manta Bay", description: "Famous bay where majestic manta rays glide gracefully near the surface." },
      { name: "Gamat Bay", description: "Vibrant coral wall with sea turtles, clownfish, and colorful reef schools." },
      { name: "Kelingking Beach", description: "The iconic T-Rex shaped cliff view." }
    ],
    itinerary: [
      { time: "06:30 AM", title: "Pickup & Fast Boat to Nusa Penida", description: "Transfer to Sanur and high-speed ferry ride." },
      { time: "08:45 AM", title: "Manta Bay & Reef Snorkeling (2.5 Hours)", description: "Board specialized snorkel boat with guide." },
      { time: "12:00 PM", title: "Lunch & Shower", description: "Hot shower and delicious lunch at local restaurant." },
      { time: "01:30 PM", title: "Kelingking Beach & Broken Beach Tour", description: "Private island car tour of famous west cliffs." },
      { time: "04:30 PM", title: "Fast Boat Return to Bali", description: "Return ferry to Sanur and hotel drop-off." }
    ],
    inclusions: ["Roundtrip boat & land transfers", "Snorkeling boat & equipment", "GoPro photos", "Lunch", "All fees"],
    exclusions: ["Alcoholic beverages", "Tips"],
    whatToBring: ["Swimwear", "Change of clothes", "Towel", "Reef-safe sunscreen"],
    pricingTiers: [
      { id: 42, min_people: 1, max_people: 1, adult_price: "80.00", child_price: "50.00", description: "1 Guest" },
      { id: 43, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "35.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-9",
    slug: "nusa-penida-west-tour",
    title: "Nusa Penida West Tour",
    subtitle: "Kelingking Beach, Broken Beach, Angel's Billabong & Crystal Bay",
    category: "island-hopping",
    categoryLabel: "Island Hopping",
    badge: "Island Hopping",
    priceFrom: 55,
    duration: "9 - 10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 198,
    coverImage: "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
      "/assets/galleries/dkuokdg5xh0xpytwno7v.webp"
    ],
    overview: "The classic and most popular island tour of Nusa Penida. Discover dramatic limestone cliffs, turquoise waves, and tropical swimming bays including Kelingking Beach, Angel's Billabong, Broken Beach, and sunset swimming at Crystal Bay.",
    highlights: [
      "Witness the awe-inspiring T-Rex cliff at Kelingking Beach",
      "Marvel at the natural rock bridge and circular sea bay at Broken Beach",
      "Dip into Angel's Billabong natural crystal infinity pool",
      "Swim and relax at Crystal Bay with palm trees and gentle waves",
      "Private driver in Nusa Penida for maximum comfort and flexibility"
    ],
    destinations: [
      { name: "Kelingking Beach", description: "Bali's most famous coastal view." },
      { name: "Broken Beach", description: "A collapsed sea cave forming an incredible natural ocean lagoon." },
      { name: "Angel's Billabong", description: "Natural rock pool framed by volcanic textures." },
      { name: "Crystal Bay", description: "Peaceful beach perfect for relaxing and swimming." }
    ],
    itinerary: [
      { time: "06:30 AM", title: "Pickup & Fast Boat Transfer", description: "Sanur Harbor crossing." },
      { time: "08:45 AM", title: "Kelingking Beach Exploration", description: "Unrivaled viewpoint photography." },
      { time: "11:30 AM", title: "Angel's Billabong & Broken Beach", description: "Natural sea wonders and lunch." },
      { time: "02:30 PM", title: "Crystal Bay Leisure", description: "Swimming and tropical coconuts." },
      { time: "04:30 PM", title: "Return to Bali Mainland", description: "Boat ride and hotel drop-off." }
    ],
    inclusions: ["Private vehicle & driver in Nusa Penida", "Fast boat tickets", "Lunch", "All entrance tickets"],
    exclusions: ["Personal drinks", "Gratuities"],
    whatToBring: ["Sunscreen", "Camera", "Swimsuit", "Cash"],
    pricingTiers: [
      { id: 44, min_people: 1, max_people: 1, adult_price: "70.00", child_price: "45.00", description: "1 Guest" },
      { id: 45, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "35.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-10",
    slug: "east-bali-tour",
    title: "East Bali Tour",
    subtitle: "Lempuyang Gate of Heaven, Tirta Gangga & Virgin Beach",
    category: "temple-culture",
    categoryLabel: "Temple & Culture",
    badge: "Temple & Culture",
    priceFrom: 55,
    duration: "10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 167,
    coverImage: "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
      "/assets/galleries/tpaoqgzfbkrfpwntmtje.webp"
    ],
    overview: "Discover the regal heritage and sacred architecture of East Bali on a relaxing private day journey. Capture the iconic photograph at Lempuyang Temple's Gate of Heaven with Mount Agung framed in the background, feed giant koi fish at Tirta Gangga Water Palace, and finish with relaxation at white-sand Virgin Beach.",
    highlights: [
      "Photo at the famous Gate of Heaven at Lempuyang Temple",
      "Step across stone stepping pads in Tirta Gangga royal water gardens",
      "Unwind at Virgin Beach (Pasir Putih), East Bali's hidden white sand paradise",
      "Visit traditional Karangasem villages and rice terraces",
      "Comfortable private vehicle with experienced local driver guide"
    ],
    destinations: [
      { name: "Lempuyang Temple", description: "Ancient mountain temple complex offering spiritual serenity and mirror-like reflections." },
      { name: "Tirta Gangga Water Palace", description: "Former royal palace featuring fountains, tiered pools, and ornate stone statues." },
      { name: "Virgin Beach", description: "Secluded pristine white sand bay sheltered by green coastal cliffs." }
    ],
    itinerary: [
      { time: "06:00 AM", title: "Early Morning Pickup & Journey East", description: "Beat the crowds to Lempuyang Temple." },
      { time: "08:30 AM", title: "Lempuyang Gate of Heaven", description: "Receive queue number and capture unforgettable pictures." },
      { time: "11:30 AM", title: "Tirta Gangga Royal Water Gardens", description: "Explore the historic palace grounds and feed the giant koi." },
      { time: "01:30 PM", title: "Lunch & Virgin Beach Relaxation", description: "Seaside lunch and refreshing swim." },
      { time: "04:30 PM", title: "Scenic Return Drive", description: "Drop-off at your hotel." }
    ],
    inclusions: ["Private car & driver", "Sarong loan", "All entrance tickets", "Bottled water"],
    exclusions: ["Lempuyang shuttle ticket (approx IDR 50k)", "Lunch", "Personal expenses"],
    whatToBring: ["Modest clothing for temples", "Camera", "Sun protection", "Cash in IDR"],
    pricingTiers: [
      { id: 46, min_people: 1, max_people: 1, adult_price: "60.00", child_price: "0.00", description: "1 Guest" },
      { id: 47, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "0.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-11",
    slug: "kintamani-volcano-tour",
    title: "Kintamani Volcano Tour",
    subtitle: "Mount Batur Viewpoint, Tegalalang Rice Terrace & Tirta Empul",
    category: "nature-scenery",
    categoryLabel: "Nature & Scenery",
    badge: "Nature & Scenery",
    priceFrom: 55,
    duration: "9 - 10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.8,
    reviewsCount: 142,
    coverImage: "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
    galleryImages: [
      "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
      "/assets/galleries/uwvcv1a5gxmyr9fiphlm.webp"
    ],
    overview: "Immerse yourself in Bali's iconic highlands and spiritual heartland. Gaze at the panoramic volcanic crater of Mount Batur while dining in Kintamani, experience sacred water purification at Tirta Empul Temple, walk among the emerald terraces of Tegalalang, and taste organic spices and coffees.",
    highlights: [
      "Sweeping panoramic views of active volcano Mount Batur and Lake Batur",
      "Traditional Balinese holy water blessing ritual at Tirta Empul Temple",
      "Lush UNESCO-nominated Tegalalang rice terrace walking experience",
      "Coffee and cocoa plantation tour with free tasting tray",
      "Customizable stops at art artisan villages (batik, silver, woodcarving)"
    ],
    destinations: [
      { name: "Kintamani Caldera", description: "Cool mountain rim overlooking active volcano and crater lake." },
      { name: "Tirta Empul Holy Springs", description: "Century-old Hindu water temple renowned for sacred cleansing fountains." },
      { name: "Tegalalang Rice Terraces", description: "Stepped green hills utilizing the traditional Subak irrigation system." }
    ],
    itinerary: [
      { time: "08:30 AM", title: "Pickup & Scenic Drive Up North", description: "Travel through central Bali's lush countryside." },
      { time: "10:30 AM", title: "Tirta Empul Holy Water Temple", description: "Experience spiritual purification (Melukat) or explore temple courtyards." },
      { time: "12:30 PM", title: "Kintamani Volcano View & Lunch", description: "Buffet dining with majestic mountain views." },
      { time: "02:30 PM", title: "Tegalalang Rice Terraces & Coffee Farm", description: "Walk along terrace ridges and taste local teas." },
      { time: "05:00 PM", title: "Return to Accommodation", description: "Comfortable hotel transfer." }
    ],
    inclusions: ["Private car, driver, and petrol", "All temple entrance tickets", "Temple sarong rental", "Bottled water"],
    exclusions: ["Lunch", "Optional Melukat offering/locker fee", "Tips"],
    whatToBring: ["Change of clothes if participating in water blessing", "Walking shoes", "Camera"],
    pricingTiers: [
      { id: 48, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "1 Guest" },
      { id: 49, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "0.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-12",
    slug: "ubud-cultural-tour",
    title: "Ubud Cultural Tour",
    subtitle: "Sacred Monkey Forest, Ubud Palace, Waterfalls & Jungle Swing",
    category: "nature-scenery",
    categoryLabel: "Nature & Scenery",
    badge: "Nature & Scenery",
    priceFrom: 55,
    duration: "8 - 9 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 5.0,
    reviewsCount: 220,
    coverImage: "/assets/galleries/uwvcv1a5gxmyr9fiphlm.webp",
    galleryImages: [
      "/assets/galleries/uwvcv1a5gxmyr9fiphlm.webp",
      "/assets/galleries/bdk2uvvu6stlowu9fhjc.webp"
    ],
    overview: "Discover the cultural capital of Bali on a private journey through Ubud's most beloved highlights. Meet playful macaques in the Sacred Monkey Forest, stroll the historic Ubud Royal Palace and Traditional Art Market, admire Tegenungan Waterfall, and soar over the jungle on an optional Bali Swing.",
    highlights: [
      "Walk through the mossy ancient trees of Ubud Sacred Monkey Forest",
      "Visit Ubud Royal Palace (Puri Saren Agung) and local craft markets",
      "Marvel at Tegenungan or Kanto Lampo tropical waterfall",
      "Optional thrill on high-flying jungle swings over rice paddies",
      "100% flexible timing with private local guide"
    ],
    destinations: [
      { name: "Sacred Monkey Forest Sanctuary", description: "Home to over 1,000 long-tailed macaques and 3 sacred temples amidst ancient banyan trees." },
      { name: "Ubud Palace & Art Market", description: "The cultural center featuring traditional Balinese architecture, silk scarves, and souvenirs." },
      { name: "Tegenungan Waterfall", description: "A powerful waterfall located in a lush green valley with swimming pools." }
    ],
    itinerary: [
      { time: "08:30 AM", title: "Hotel Pickup & Transfer to Ubud", description: "Direct private drive to Ubud center." },
      { time: "09:30 AM", title: "Sacred Monkey Forest Sanctuary", description: "Explore the mystical forest and playful monkeys." },
      { time: "11:30 AM", title: "Ubud Palace & Traditional Market", description: "Experience royal culture and local handicrafts." },
      { time: "01:00 PM", title: "Lunch at Organic Ricefield Warung", description: "Savor authentic Balinese specialties like Crispy Duck." },
      { time: "02:30 PM", title: "Tegenungan Waterfall & Jungle Swing", description: "Cool off by the waterfall spray and take amazing photos." },
      { time: "05:00 PM", title: "Return to Hotel", description: "Smooth drop-off at your hotel." }
    ],
    inclusions: ["Private vehicle, driver & petrol", "Monkey Forest tickets", "Waterfall admission", "Bottled mineral water"],
    exclusions: ["Lunch", "Optional Bali Swing ticket", "Personal shopping"],
    whatToBring: ["Comfortable clothes", "Swimsuit and towel for waterfall", "Camera", "Cash"],
    pricingTiers: [
      { id: 50, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "1 Guest" },
      { id: 51, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "0.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-13",
    slug: "tanah-lot-sunset-tou",
    title: "Tanah Lot Sunset Tour",
    subtitle: "Taman Ayun Royal Temple, Coffee Culture & Ocean Sunset",
    category: "temple-culture",
    categoryLabel: "Temple & Culture",
    badge: "Temple & Culture",
    priceFrom: 55,
    duration: "7 - 8 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 175,
    coverImage: "/assets/galleries/tpaoqgzfbkrfpwntmtje.webp",
    galleryImages: [
      "/assets/galleries/tpaoqgzfbkrfpwntmtje.webp",
      "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp"
    ],
    overview: "Experience the romance and serenity of West Bali on an afternoon cultural journey. Visit the UNESCO-listed Taman Ayun Royal Temple surrounded by lotus moats, taste local coffee at a spice plantation, and witness the unforgettable sunset over the Indian Ocean at iconic Tanah Lot Temple perched upon an offshore rock.",
    highlights: [
      "Spectacular golden hour sunset over offshore Tanah Lot Temple",
      "Stroll the serene 17th-century Taman Ayun Temple water gardens",
      "Learn traditional Balinese Luwak coffee roasting and spice cultivation",
      "Optional stop at Alas Kedaton Monkey Forest or Echo Beach",
      "Private driver for a peaceful, stress-free afternoon"
    ],
    destinations: [
      { name: "Taman Ayun Temple", description: "The royal temple of Mengwi Empire featuring multi-tiered shrines (Meru) and lotus ponds." },
      { name: "Coffee & Spice Plantation", description: "Discover vanilla, cinnamon, cacao, and coffee plants in a shaded tropical garden." },
      { name: "Tanah Lot Sea Temple", description: "Bali's most photographed landmark standing resiliently against crashing ocean waves." }
    ],
    itinerary: [
      { time: "01:30 PM", title: "Afternoon Pickup from Hotel", description: "Comfortable pickup and drive to Tabanan regency." },
      { time: "02:45 PM", title: "Taman Ayun Royal Temple", description: "Walk around historic multi-roof shrines and lotus moats." },
      { time: "04:15 PM", title: "Coffee Plantation & Tasting", description: "Enjoy complimentary herbal teas and fresh coffee." },
      { time: "05:15 PM", title: "Tanah Lot Ocean Sunset", description: "Explore the sea temple rocky shore and watch the sun sink into the horizon." },
      { time: "07:00 PM", title: "Return to Hotel", description: "Evening transfer back to your villa or hotel." }
    ],
    inclusions: ["Private vehicle, driver & fuel", "Taman Ayun & Tanah Lot tickets", "Sarong rental", "Bottled water"],
    exclusions: ["Dinner", "Gratuities"],
    whatToBring: ["Comfortable sandals", "Camera", "Sun protection", "Cash"],
    pricingTiers: [
      { id: 52, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "1 Guest" },
      { id: 53, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "0.00", description: "2-4 Guests" }
    ]
  },
  {
    id: "tour-14",
    slug: "north-bali-exploration",
    title: "North Bali Exploration",
    subtitle: "Jatiluwih Rice Terraces, Ulun Danu Beratan & Handara Gate",
    category: "nature-scenery",
    categoryLabel: "Nature & Scenery",
    badge: "Nature & Scenery",
    priceFrom: 55,
    duration: "10 Hours",
    groupType: "Private Tour",
    language: "English & Indonesian",
    cancellation: "Free cancellation up to 24 hours",
    rating: 4.9,
    reviewsCount: 130,
    coverImage: "/assets/galleries/ttoubtl9ndmw21ny1c3q.webp",
    galleryImages: [
      "/assets/galleries/ttoubtl9ndmw21ny1c3q.webp",
      "/assets/galleries/uwvcv1a5gxmyr9fiphlm.webp"
    ],
    overview: "Escape the crowds and discover the peaceful natural beauty of North Bali. Travel through cool mountain landscapes, visit serene mountain lakes, take iconic photos at the Handara Gate, see the floating Ulun Danu Beratan Temple, and hike the monumental UNESCO World Heritage rice fields of Jatiluwih.",
    highlights: [
      "Explore Jatiluwih, Bali's largest and most breathtaking UNESCO rice terrace network",
      "Marvel at the floating temple of Ulun Danu Beratan on Lake Beratan",
      "Snap postcard photos at the grand Handara Bali Gate",
      "Panoramic views of Twin Lakes (Buyan & Tamblingan) and Wanagiri Hill",
      "Scenic highland drive with clean mountain air"
    ],
    destinations: [
      { name: "Jatiluwih Rice Terraces", description: "Over 600 hectares of terraced paddy fields against Mount Batukaru." },
      { name: "Ulun Danu Beratan Temple", description: "Majestic floating water temple in the cool mist of Bedugul." },
      { name: "Bali Handara Gate", description: "Traditional towering gate framed by lush green mountains." }
    ],
    itinerary: [
      { time: "08:00 AM", title: "Hotel Pickup & Highland Drive", description: "Drive up into the cool Bedugul mountain plateau." },
      { time: "10:00 AM", title: "Ulun Danu Beratan Floating Temple", description: "Explore the lakefront gardens and pagoda shrines." },
      { time: "11:30 AM", title: "Handara Iconic Gate & Wanagiri View", description: "Photos at the gate and panoramic twin lake overlooks." },
      { time: "01:30 PM", title: "Jatiluwih UNESCO Rice Terraces & Lunch", description: "Walk along pristine rice field pathways with lunch view." },
      { time: "04:30 PM", title: "Scenic Return Drive", description: "Safe transfer back to your accommodation." }
    ],
    inclusions: ["Private vehicle, driver & fuel", "All entrance tickets", "Bottled mineral water"],
    exclusions: ["Lunch", "Wanagiri photo prop fees", "Tips"],
    whatToBring: ["Light jacket (cool highlands)", "Walking shoes", "Camera", "Cash in IDR"],
    pricingTiers: [
      { id: 54, min_people: 1, max_people: 1, adult_price: "55.00", child_price: "0.00", description: "1 Guest" },
      { id: 55, min_people: 2, max_people: 4, adult_price: "55.00", child_price: "0.00", description: "2-4 Guests" }
    ]
  }
];
