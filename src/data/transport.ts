export interface VehicleItem {
  id: string;
  slug: string;
  name: string;
  category: "standard" | "comfort" | "group" | "luxury" | "suv";
  categoryLabel: string;
  passengers: number;
  luggage: number;
  pricePerDay: number;
  halfDayPrice: number;
  airportPrice: number;
  coverImage: string;
  galleryImages: string[];
  description: string;
  features: string[];
  specs: {
    engine: string;
    transmission: string;
    fuel: string;
    airConditioning: string;
  };
  pricingRates: {
    service: string;
    duration: string;
    price: number;
    description: string;
  }[];
}

export const transportCategories = [
  { id: "all", label: "All Vehicles" },
  { id: "standard", label: "Standard MPV" },
  { id: "comfort", label: "Comfort MPV" },
  { id: "group", label: "Group Minibus" },
  { id: "suv", label: "Premium SUV" },
  { id: "luxury", label: "Luxury VIP" }
];

export const vehiclesData: VehicleItem[] = [
  {
    id: "v-1",
    slug: "toyota-avanza",
    name: "Toyota Avanza",
    category: "standard",
    categoryLabel: "Standard MPV",
    passengers: 6,
    luggage: 5,
    pricePerDay: 55,
    halfDayPrice: 40,
    airportPrice: 25,
    coverImage: "/storage/vehicle-covers/01KZWBPG3W5BK786SEJV9VSCTC.webp",
    galleryImages: [
      "/storage/vehicle-covers/01KZWBPG3W5BK786SEJV9VSCTC.webp",
      "/assets/galleries/erpcsospbml5v1sl6xzs.webp"
    ],
    description: "The most popular and economical choice for couples, small families, and solo travelers exploring Bali. Compact yet spacious enough to comfortably navigate both city traffic and narrow village roads.",
    features: [
      "Certified English-speaking local driver",
      "Full tank fuel included",
      "Ice-cold dual zone air conditioning",
      "Clean sanitized interior with phone charger",
      "Complimentary chilled mineral water"
    ],
    specs: {
      engine: "1.3L / 1.5L Dual VVT-i",
      transmission: "Automatic / Manual",
      fuel: "Petrol (Included)",
      airConditioning: "Dual Blower AC"
    },
    pricingRates: [
      { service: "Full Day Private Charter", duration: "10 - 12 Hours", price: 55, description: "Includes private car, driver, fuel, parking fees island-wide." },
      { service: "Half Day Tour Charter", duration: "5 - 6 Hours", price: 40, description: "Perfect for quick shopping, airport drop, or half-day sightseeing." },
      { service: "Airport Transfer (One-Way)", duration: "Direct Route", price: 25, description: "Direct transfer between Ngurah Rai Airport (DPS) & Kuta, Seminyak, Sanur." }
    ]
  },
  {
    id: "v-2",
    slug: "toyota-innova-reborn",
    name: "Toyota Innova Reborn",
    category: "comfort",
    categoryLabel: "Comfort MPV",
    passengers: 7,
    luggage: 6,
    pricePerDay: 65,
    halfDayPrice: 50,
    airportPrice: 35,
    coverImage: "/storage/vehicle-covers/01KZWBQD8WNF5VF8BQ5HACJXEJ.webp",
    galleryImages: [
      "/storage/vehicle-covers/01KZWBQD8WNF5VF8BQ5HACJXEJ.webp",
      "/assets/galleries/erpcsospbml5v1sl6xzs.webp"
    ],
    description: "The gold standard of family road travel in Indonesia. Featuring generous legroom, plush seats, superior suspension, and refined noise insulation for longer drives across Bali's scenic highlands.",
    features: [
      "High comfort captain/bench seating configuration",
      "Smooth suspension ideal for long mountain journeys",
      "Powerful rear AC vents for tropical comfort",
      "USB charging ports for multiple devices",
      "Professional polite driver with years of experience"
    ],
    specs: {
      engine: "2.4L Diesel / 2.0L Petrol",
      transmission: "Automatic",
      fuel: "Fuel Included",
      airConditioning: "Triple Zone Climate AC"
    },
    pricingRates: [
      { service: "Full Day Private Charter", duration: "10 - 12 Hours", price: 65, description: "Includes private car, driver, petrol, and parking fees." },
      { service: "Half Day Tour Charter", duration: "5 - 6 Hours", price: 50, description: "Ideal for dinners, meetings, or short temple visits." },
      { service: "Airport Transfer (One-Way)", duration: "Direct Route", price: 35, description: "Spacious luggage space for family arrivals and departures." }
    ]
  },
  {
    id: "v-3",
    slug: "toyota-hi-ace",
    name: "Toyota Hi-Ace",
    category: "group",
    categoryLabel: "Group Minibus",
    passengers: 15,
    luggage: 10,
    pricePerDay: 95,
    halfDayPrice: 75,
    airportPrice: 50,
    coverImage: "/storage/vehicle-covers/01KZWBARRNBJ8G3KGBC5GENQ6Z.webp",
    galleryImages: [
      "/storage/vehicle-covers/01KZWBARRNBJ8G3KGBC5GENQ6Z.webp",
      "/assets/galleries/erpcsospbml5v1sl6xzs.webp"
    ],
    description: "The ultimate solution for large families, friend groups, and corporate delegations. High-roof design allows easy standing and boarding, with individual reclining seats and ample luggage capacity.",
    features: [
      "Comfortable high-roof cabin with wide central aisle",
      "Individual air conditioning vents for every row",
      "Reclining ergonomic seats with headrests",
      "Large dedicated rear luggage compartment",
      "Experienced group tour driver guide"
    ],
    specs: {
      engine: "2.8L / 3.0L Common Rail Turbo Diesel",
      transmission: "Manual / Automatic",
      fuel: "Fuel Included",
      airConditioning: "Overhead Individual Ducted AC"
    },
    pricingRates: [
      { service: "Full Day Private Charter", duration: "10 - 12 Hours", price: 95, description: "Comfortable group transportation across all Bali attractions." },
      { service: "Half Day Tour Charter", duration: "5 - 6 Hours", price: 75, description: "Great for group dinner transfers and short excursions." },
      { service: "Airport Transfer (One-Way)", duration: "Direct Route", price: 50, description: "Seamless group airport pickup with sign board assistance." }
    ]
  },
  {
    id: "v-4",
    slug: "toyota-alphard",
    name: "Toyota Alphard",
    category: "luxury",
    categoryLabel: "Luxury VIP",
    passengers: 5,
    luggage: 4,
    pricePerDay: 180,
    halfDayPrice: 130,
    airportPrice: 85,
    coverImage: "/storage/vehicle-covers/01KZWBNNJKSZ99WWG7WSKFZKJ8.webp",
    galleryImages: [
      "/storage/vehicle-covers/01KZWBNNJKSZ99WWG7WSKFZKJ8.webp"
    ],
    description: "Executive luxury travel for VIPs, honeymooners, and discerning travelers. Features first-class power ottoman leather captain chairs, dual sunroofs, ambient cabin lighting, and ultra-smooth glide suspension.",
    features: [
      "Electric power ottoman captain chairs with calf rests",
      "Dual panoramic glass sunroof with electric shades",
      "Premium JBL surround sound system & ambient LED lighting",
      "Automatic sliding side doors and power tailgate",
      "VIP uniformed chauffeur service"
    ],
    specs: {
      engine: "2.5L / 3.5L V6 Executive",
      transmission: "CVT Automatic",
      fuel: "Premium Fuel Included",
      airConditioning: "Nanoe-X Air Purifier Climate Control"
    },
    pricingRates: [
      { service: "Full Day VIP Charter", duration: "10 Hours", price: 180, description: "VIP luxury treatment with chauffeur, fuel, and all access." },
      { service: "Half Day VIP Charter", duration: "5 Hours", price: 130, description: "Ideal for weddings, galas, and VIP business meetings." },
      { service: "VIP Airport Transfer (One-Way)", duration: "Direct Route", price: 85, description: "First-class red carpet airport greeting and transit." }
    ]
  },
  {
    id: "v-5",
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "suv",
    categoryLabel: "Premium SUV",
    passengers: 6,
    luggage: 5,
    pricePerDay: 90,
    halfDayPrice: 70,
    airportPrice: 45,
    coverImage: "/storage/vehicle-covers/01KZWBXF79WXRBKVSTPCR6K1TJ.webp",
    galleryImages: [
      "/storage/vehicle-covers/01KZWBXF79WXRBKVSTPCR6K1TJ.webp"
    ],
    description: "Commanding presence and robust 4x4-inspired build. Ideal for travelers wanting elevated road visibility, rugged durability for mountain and beach roads, and sophisticated dark leather styling.",
    features: [
      "High ground clearance for effortless all-terrain driving",
      "Premium black leather seating interior",
      "Rugged suspension tailored for Bali's diverse topographies",
      "Dual AC and tinted privacy windows",
      "Professional knowledgeable local driver"
    ],
    specs: {
      engine: "2.4L / 2.8L GD Turbo Diesel",
      transmission: "6-Speed Sport Automatic",
      fuel: "Fuel Included",
      airConditioning: "Dual Automatic Climate Control"
    },
    pricingRates: [
      { service: "Full Day SUV Charter", duration: "10 - 12 Hours", price: 90, description: "Full island tour flexibility with strong SUV capability." },
      { service: "Half Day SUV Charter", duration: "5 - 6 Hours", price: 70, description: "Perfect for sunset trips to Uluwatu or Tanah Lot." },
      { service: "Airport Transfer (One-Way)", duration: "Direct Route", price: 45, description: "Direct VIP airport pickup in a stylish SUV." }
    ]
  }
];

export const airportTransferZones = [
  { zone: "Zone 1 (Kuta, Legian, Seminyak, Tuban)", priceAvanza: "$20", priceInnova: "$30", priceHiace: "$45", priceAlphard: "$75" },
  { zone: "Zone 2 (Sanur, Jimbaran, Nusa Dua)", priceAvanza: "$25", priceInnova: "$35", priceHiace: "$50", priceAlphard: "$85" },
  { zone: "Zone 3 (Canggu, Uluwatu, Tanah Lot)", priceAvanza: "$30", priceInnova: "$40", priceHiace: "$55", priceAlphard: "$95" },
  { zone: "Zone 4 (Ubud, Gianyar, Keramas)", priceAvanza: "$35", priceInnova: "$45", priceHiace: "$65", priceAlphard: "$110" },
  { zone: "Zone 5 (Candidasa, Padangbai, Bedugul)", priceAvanza: "$50", priceInnova: "$65", priceHiace: "$85", priceAlphard: "$140" },
  { zone: "Zone 6 (Amed, Lovina, Pemuteran, Tulamben)", priceAvanza: "$65", priceInnova: "$80", priceHiace: "$110", priceAlphard: "$180" }
];
