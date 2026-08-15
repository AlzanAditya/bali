export interface BlogPostSection {
  heading: string;
  content: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  coverImage: string;
  excerpt: string;
  sections: BlogPostSection[];
  planningTips?: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "10-best-things-to-do-in-bali-for-first-time-visitors",
    title: "10 Best Things to Do in Bali for First-Time Visitors",
    category: "Travel Guide",
    readTime: "30 Min Read",
    publishedDate: "August 10, 2026",
    author: "Bali Bagus Journey Editorial",
    coverImage: "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
    excerpt: "From cliffside temples and emerald rice terraces to dolphin sunrises and volcano jeep treks, here is the essential curated bucket list for your first trip to Bali.",
    tags: ["Bali Guide", "First Time", "Bucket List", "Top Sights"],
    sections: [
      {
        heading: "1. Watch the Sunset at Tanah Lot Temple",
        content: [
          "Perched upon a rugged offshore rock formation that becomes isolated during high tide, Tanah Lot is arguably Bali's most iconic sea temple.",
          "Arrive around 4:30 PM to explore the oceanfront gardens and take photographs while the low tide reveals sacred freshwater springs and natural sea caves. As the golden hour descends, watch the sun sink into the horizon behind the ancient temple silhouette."
        ]
      },
      {
        heading: "2. Walk Through the Tegallalang Rice Terraces",
        content: [
          "Located just 20 minutes north of Ubud center, Tegallalang showcases the centuries-old Balinese Subak cooperative irrigation system. The cascading emerald terraces carve intricate green staircases into the tropical valley.",
          "Early mornings (between 07:00 AM and 09:00 AM) offer peaceful walks with mist rising through coconut palms before the midday heat."
        ]
      },
      {
        heading: "3. Explore the Sacred Monkey Forest Sanctuary",
        content: [
          "A lush 12.5-hectare nature reserve in the heart of Ubud, home to over 1,000 Balinese long-tailed macaques and three 14th-century Hindu temples.",
          "Walk along shaded paved trails beneath towering banyan trees and mossy stone bridges. Keep personal belongings, sunglasses, and snacks securely zipped in your bag."
        ]
      },
      {
        heading: "4. Chase Waterfalls in North Bali",
        content: [
          "While South Bali is renowned for vibrant beach clubs, North Bali boasts dramatic jungle waterfalls such as Banyumala Twin Falls, Gitgit, and Sekumpul.",
          "A private driver allows you to combine two to three waterfalls in a single day, followed by a visit to the cool highland lake temple of Ulun Danu Beratan."
        ]
      },
      {
        heading: "5. Snorkel or Dive Around Nusa Penida",
        content: [
          "A 45-minute fast boat ride from Sanur port brings you to Nusa Penida, an island celebrated for dramatic limestone cliffs and rich marine biodiversity.",
          "Manta Bay and Crystal Bay offer world-renowned opportunities to swim alongside majestic manta rays, green sea turtles, and colorful coral gardens."
        ]
      },
      {
        heading: "6. Catch a Traditional Kecak Fire Dance",
        content: [
          "Held in an open-air amphitheater on the 70-meter cliffs of Uluwatu Temple, the Kecak dance features a chorus of 50+ men chanting rhythmic vocal polyphonies as dramatic fire torches light up the Ramayana saga at dusk."
        ]
      },
      {
        heading: "7. Visit Besakih, Bali's 'Mother Temple'",
        content: [
          "Located high on the southwestern slopes of Mount Agung, Besakih is the largest, most holiest Hindu temple complex in Bali, comprising over 80 individual temples and multi-tiered Meru shrines."
        ]
      },
      {
        heading: "8. Ride Through Rice Fields on a Bike or Scooter",
        content: [
          "Renting a scooter or booking an escorted e-bike tour through Sidemen or Jatiluwih allows you to experience peaceful village life, waving children, and tranquil rural landscapes."
        ]
      },
      {
        heading: "9. Soak in a Natural Hot Spring",
        content: [
          "After hiking or road-tripping through Kintamani or Banjar, relax in therapeutic sulfur hot springs mineral pools with views overlooking Lake Batur."
        ]
      },
      {
        heading: "10. Watch the Sunrise from Mount Batur",
        content: [
          "Whether trekking by foot under the starlit sky or riding an open-top 4WD Jeep up the volcanic black lava fields, watching dawn break above the sea of clouds at Mount Batur is an unforgettable Bali memory."
        ]
      }
    ],
    planningTips: [
      "Group your days by geographic region (South Bali, Ubud Central, East Bali, North Bali) to avoid spending hours in transit.",
      "Hire a trusted private driver with transparent daily pricing for hassle-free navigation and authentic cultural insights.",
      "Dress respectfully when visiting sacred temples with shoulders covered and a traditional sarong wrapped around your waist."
    ]
  },
  {
    id: "blog-2",
    slug: "a-food-lovers-guide-to-balinese-cuisine-must-try-dishes",
    title: "A Food Lover's Guide to Balinese Cuisine: Must-Try Dishes",
    category: "Culinary & Food",
    readTime: "15 Min Read",
    publishedDate: "August 04, 2026",
    author: "Bali Bagus Journey Editorial",
    coverImage: "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
    excerpt: "Balinese food is an explosion of aromatic herbs, roasted spices, and slow-cooked traditions. Here are the authentic dishes you simply cannot miss.",
    tags: ["Food Guide", "Balinese Cuisine", "Warung", "Must Try"],
    sections: [
      {
        heading: "Babi Guling (Suckling Pig)",
        content: [
          "Bali's most celebrated ceremonial feast. Whole pig stuffed with 'bumbu bali' (a paste of turmeric, galangal, lemongrass, shallots, garlic, and chilies) and spit-roasted over coconut husks until the skin turns into a crisp, glassy crackling.",
          "Served with steamed rice, spicy lawar salad, blood sausage, and savory pork broth."
        ]
      },
      {
        heading: "Bebek Betutu (Slow-Cooked Duck)",
        content: [
          "Duck seasoned with rich spice paste, wrapped tightly in banana leaves or betel-nut bark, and slow-roasted or steamed in volcanic clay ovens for up to 12 hours until the meat falls tenderly off the bone."
        ]
      },
      {
        heading: "Nasi Campur",
        content: [
          "The quintessential Indonesian combination plate. A fragrant mound of steamed rice surrounded by portions of shredded spiced chicken, sate lilit, fried tempeh, hard-boiled egg with sambal, long beans, and fresh crackers."
        ]
      },
      {
        heading: "Sate Lilit",
        content: [
          "Unlike standard skewered meats, Sate Lilit is made from minced fish or pork blended with freshly grated coconut, coconut milk, and ground spices, wrapped around thick lemongrass stalks and grilled over charcoal."
        ]
      },
      {
        heading: "Lawar",
        content: [
          "A finely chopped mixture of tender young jackfruit, long beans, grated coconut, and minced meats infused with kaffir lime and fried shallots."
        ]
      },
      {
        heading: "Sambal Matah",
        content: [
          "Bali's signature raw chili condiment crafted from thinly sliced shallots, bird's eye chilies, lemongrass, crushed shrimp paste (terasi), kaffir lime juice, and hot coconut oil."
        ]
      },
      {
        heading: "Jaje Bali (Traditional Balinese Sweets)",
        content: [
          "Colorful rice flour treats including Dadar Gulung (pandan crepes filled with sweet coconut palm sugar), Klepon (glutinous rice balls with liquid palm sugar centers), and Laklak."
        ]
      },
      {
        heading: "Where to Eat: Warungs vs. Restaurants",
        content: [
          "Traditional family-run 'warungs' offer the most authentic and budget-friendly flavors, while contemporary Ubud and Seminyak restaurants provide refined farm-to-table Balinese dining."
        ]
      }
    ],
    planningTips: [
      "Let your private driver know your spice tolerance: Balinese sambal can be fiery hot! Ask for 'tidak pedas' (not spicy) or 'sedang' (medium).",
      "Always drink bottled mineral water and eat at popular, bustling warungs with high turnover of fresh daily ingredients."
    ]
  },
  {
    id: "blog-3",
    slug: "bali-adventure-activities-from-volcano-trekking-to-white-water-rafting",
    title: "Bali Adventure Activities: From Volcano Trekking to White-Water Rafting",
    category: "Adventure & Thrills",
    readTime: "15 Min Read",
    publishedDate: "July 28, 2026",
    author: "Bali Bagus Journey Editorial",
    coverImage: "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
    excerpt: "For thrill-seekers and active explorers, Bali offers world-class outdoor thrills spanning roaring river rapids, rugged 4WD volcanic trails, canyoning, and secret cliff jumps.",
    tags: ["Adventure", "Rafting", "Jeep Tour", "Trekking"],
    sections: [
      {
        heading: "Volcano Trekking: Mount Batur and Mount Agung",
        content: [
          "Mount Batur (1,717m) is the most popular 2-hour morning trek accessible to all fitness levels, while Mount Agung (3,142m) is a challenging 6-hour endurance expedition to Bali's highest sacred summit."
        ]
      },
      {
        heading: "White-Water Rafting on the Ayung or Telaga Waja River",
        content: [
          "Ayung River in Ubud offers Class II-III rapids past stone-carved cliff walls and hidden waterfalls, ideal for families. Telaga Waja in Karangasem provides faster Class III-IV thrills with a 4-meter water dam drop."
        ]
      },
      {
        heading: "Canyoning in Gitgit or Bongkasa",
        content: [
          "Rappel down rushing waterfall chutes, slide down natural volcanic stone slides, and plunge into crystal-clear mountain pools under professional rope guides."
        ]
      },
      {
        heading: "Surfing Bali's Reef and Beach Breaks",
        content: [
          "From gentle beginner sand breaks at Kuta and Batu Bolong in Canggu to legendary left-hand reef barrels at Padang Padang and Uluwatu."
        ]
      },
      {
        heading: "ATV and Buggy Rides Through Rice Fields and Jungle",
        content: [
          "Tear through muddy jungle tracks, splash across riverbeds, and drive inside subterranean bamboo caves on powerful 250cc Quad ATVs."
        ]
      },
      {
        heading: "Cliff Jumping and Coasteering at Blue Lagoon",
        content: [
          "Leap into deep cobalt water pools from heights ranging from 3 to 10 meters along East Bali's rugged coastal cliffs."
        ]
      }
    ],
    planningTips: [
      "Book adventure packages in advance to secure morning time slots with cooler temperatures and clearer skies.",
      "Wear water shoes, bring waterproof phone pouches, and allow for a rest day between intense outdoor activities."
    ]
  },
  {
    id: "blog-4",
    slug: "balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers",
    title: "Bali's Sacred Traditions: Temple Ceremonies and Cultural Etiquette for Travelers",
    category: "Culture & Heritage",
    readTime: "15 Min Read",
    publishedDate: "July 20, 2026",
    author: "Bali Bagus Journey Editorial",
    coverImage: "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
    excerpt: "Understanding the spiritual essence of Balinese Hinduism, temple dress codes, daily Canang Sari offerings, and respectful etiquette when visiting the Island of the Gods.",
    tags: ["Culture", "Temples", "Etiquette", "Traditions"],
    sections: [
      {
        heading: "Canang Sari: The Daily Offerings You'll See Everywhere",
        content: [
          "Every morning, Balinese women weave intricate palm-leaf baskets filled with vibrant flowers (white, red, yellow, and blue symbolizing Hindu deities), betel nut, rice, and incense.",
          "These offerings express gratitude for cosmic balance. Watch your step on sidewalks and entrance doorways to avoid stepping directly upon them."
        ]
      },
      {
        heading: "What to Wear When Visiting a Temple",
        content: [
          "Both men and women must wear a 'Kamen' (sarong) tied securely around the waist with a 'Selendang' (sash) and have their shoulders covered. Most major temples provide sarongs for rent or loan at the ticket booth."
        ]
      },
      {
        heading: "Menstruation and Temple Access",
        content: [
          "According to Balinese Hindu purity guidelines, women during menstruation or individuals with open bleeding wounds are requested to refrain from entering the inner sanctums of sacred temples."
        ]
      },
      {
        heading: "Attending a Ceremony as a Visitor",
        content: [
          "If your driver invites you to witness a village ceremony (Odalan) or cremation (Ngaben), observe quietly from a respectful distance, keep your head lower than the presiding priest (Pedanda), and never use flash photography directly in priests' faces."
        ]
      },
      {
        heading: "Nyepi: The Day of Silence",
        content: [
          "The Balinese Saka New Year is observed with total silence for 24 hours. The entire island shuts down: no flights, no vehicles on the road, no lights after dark, and complete quietude for self-reflection."
        ]
      },
      {
        heading: "Supporting Local Traditions as a Visitor",
        content: [
          "By employing certified local drivers and buying handcrafted items directly from artisan village cooperatives, your visit supports the living culture of Bali."
        ]
      }
    ],
    planningTips: [
      "Ask your driver about upcoming temple festivals during your stay—experiencing a village Odalan is often the most magical memory for travelers.",
      "Use your right hand when giving or receiving items, and avoid touching someone's head, which is considered the most sacred part of the body."
    ]
  }
];

export const blogsData = blogPosts;
