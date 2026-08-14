export interface Tour { slug:string; title:string; category:string; description:string; image:string; price:number; availableReference?:boolean; destinations?:{title:string;description:string;image?:string}[]; itinerary?:{title:string;description:string}[]; faq?:{question:string;answer:string}[]; pricing?:{label:string;price:number}[] }

export const tours: Tour[] = [
  {
    "slug": "dolphin-watching-tour",
    "title": "Dolphin Watching Tour",
    "category": "Island Hopping",
    "description": "Start your morning with a magical sunrise experience at Lovina Beach and enjoy a private boat trip to see dolphins in their natural ocean environment.",
    "image": "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
    "price": 20.0,
    "availableReference": true,
    "destinations": [],
    "itinerary": [
      {
        "title": "Hotel Pickup & Journey to Lovina",
        "description": "03:00 - 05:30"
      },
      {
        "title": "Sunrise & Dolphin Watching",
        "description": "05:30 - 08:00"
      },
      {
        "title": "Return Journey",
        "description": "08:00 - 11:30"
      }
    ],
    "faq": [
      {
        "question": "How do I make a booking request?",
        "answer": "Simply fill out our booking form on the right side of this page with your contact details, preferred travel date, and number of guests, then click \"Book Now\". Our team will reach out to you via WhatsApp or Email within a few hours to confirm availability and coordinate the details."
      },
      {
        "question": "Can we change the start time of the tour?",
        "answer": "Yes! Since all of our tours are completely private, you can request a customized pickup time that fits your schedule. Just let us know your preference when booking or contact us beforehand."
      },
      {
        "question": "Is this tour suitable for young children or elderly travelers?",
        "answer": "Most of our tours are family-friendly and private, meaning we travel at your own pace. If a specific tour requires heavy trekking or is not recommended for certain age groups, it will be noted in the itinerary. Please let us know in advance if you need infant seats or special assistance."
      },
      {
        "question": "What is your cancellation policy?",
        "answer": "We offer free cancellation up to 24 hours before your scheduled tour starts. If you need to cancel or reschedule, please contact us via WhatsApp as early as possible so we can update our drivers' schedules."
      },
      {
        "question": "How do we pay for the tour?",
        "answer": "We accept cash payments in Indonesian Rupiah (IDR) or USD directly to our driver at the end of the tour. If you prefer to pay online via Credit Card or Wise, please let us know during the booking confirmation so we can send you a secure payment link."
      },
      {
        "question": "What are the payment terms?",
        "answer": "Payment can be made in cash to the driver upon completion of the tour."
      },
      {
        "question": "Can the itinerary be customized?",
        "answer": "The itinerary can be customized according to customer preferences, subject to the available route, fast boat schedule, weather conditions, and one-way journey arrangements."
      }
    ],
    "pricing": [
      {
        "label": "1 Person",
        "price": 20.0
      },
      {
        "label": "2 People",
        "price": 20.0
      },
      {
        "label": "3 People",
        "price": 20.0
      },
      {
        "label": "4+ People",
        "price": 20.0
      }
    ]
  },
  {
    "slug": "mount-batur-sunrise-trek-jeep-tour",
    "title": "Mount Batur Sunrise Trek & Jeep Tour",
    "category": "Adventure",
    "description": "Start your adventure in the early morning and discover the magical beauty of Mount Batur. Experience the breathtaking sunrise, explore the dramatic volcanic landscape by 4WD Jeep, and enjoy spectacular views of Lake Batur and the surrounding Kintamani mountains.",
    "image": "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
    "price": 55.0,
    "availableReference": true,
    "destinations": [],
    "itinerary": [
      {
        "title": "Early Morning Pickup & Journey to Mount Batur",
        "description": "02:00 - 04:00"
      },
      {
        "title": "Mount Batur Sunrise Experience",
        "description": "04:00 - 07:30"
      },
      {
        "title": "Black Lava Jeep Adventure",
        "description": "07:30 - 09:30"
      },
      {
        "title": "Lake Batur & Kintamani Scenic Experience",
        "description": "09:30 - 11:30"
      },
      {
        "title": "Lunch & Return Journey",
        "description": "11:30 - 14:00"
      }
    ],
    "faq": [
      {
        "question": "How do I make a booking request?",
        "answer": "Simply fill out our booking form on the right side of this page with your contact details, preferred travel date, and number of guests, then click \"Book Now\". Our team will reach out to you via WhatsApp or Email within a few hours to confirm availability and coordinate the details."
      },
      {
        "question": "Can we change the start time of the tour?",
        "answer": "Yes! Since all of our tours are completely private, you can request a customized pickup time that fits your schedule. Just let us know your preference when booking or contact us beforehand."
      },
      {
        "question": "Is this tour suitable for young children or elderly travelers?",
        "answer": "Most of our tours are family-friendly and private, meaning we travel at your own pace. If a specific tour requires heavy trekking or is not recommended for certain age groups, it will be noted in the itinerary. Please let us know in advance if you need infant seats or special assistance."
      },
      {
        "question": "What is your cancellation policy?",
        "answer": "We offer free cancellation up to 24 hours before your scheduled tour starts. If you need to cancel or reschedule, please contact us via WhatsApp as early as possible so we can update our drivers' schedules."
      },
      {
        "question": "How do we pay for the tour?",
        "answer": "We accept cash payments in Indonesian Rupiah (IDR) or USD directly to our driver at the end of the tour. If you prefer to pay online via Credit Card or Wise, please let us know during the booking confirmation so we can send you a secure payment link."
      },
      {
        "question": "What are the payment terms?",
        "answer": "Payment can be made in cash to the driver upon completion of the tour."
      },
      {
        "question": "Can the itinerary be customized?",
        "answer": "The itinerary can be customized according to customer preferences, subject to the available route, fast boat schedule, weather conditions, and one-way journey arrangements."
      }
    ],
    "pricing": [
      {
        "label": "1 Person",
        "price": 55.0
      },
      {
        "label": "2 People",
        "price": 55.0
      }
    ]
  },
  {
    "slug": "blue-lagoon-coastal-exploration",
    "title": "Blue Lagoon Coastal Exploration",
    "category": "Island Hopping",
    "description": "Discover the hidden coastal beauty of East Bali on a private journey to Blue Lagoon and Tanjung Jepun. Enjoy a relaxing stop at Monkey Bar Pool & Bar before exploring two of Bali's beautiful snorkeling spots.",
    "image": "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
    "price": 55.0,
    "availableReference": true,
    "destinations": [],
    "itinerary": [
      {
        "title": "Hotel Pickup & Journey to East Bali",
        "description": "07:00 - 09:00"
      },
      {
        "title": "Blue Lagoon Snorkeling",
        "description": "10:00 - 12:00"
      },
      {
        "title": "Tanjung Jepun Snorkeling",
        "description": "12:00 - 14:00"
      },
      {
        "title": "Lunch & Return Journey",
        "description": "14:00 - 16:00"
      }
    ],
    "faq": [
      {
        "question": "How do I make a booking request?",
        "answer": "Simply fill out our booking form on the right side of this page with your contact details, preferred travel date, and number of guests, then click \"Book Now\". Our team will reach out to you via WhatsApp or Email within a few hours to confirm availability and coordinate the details."
      },
      {
        "question": "Can we change the start time of the tour?",
        "answer": "Yes! Since all of our tours are completely private, you can request a customized pickup time that fits your schedule. Just let us know your preference when booking or contact us beforehand."
      },
      {
        "question": "Is this tour suitable for young children or elderly travelers?",
        "answer": "Most of our tours are family-friendly and private, meaning we travel at your own pace. If a specific tour requires heavy trekking or is not recommended for certain age groups, it will be noted in the itinerary. Please let us know in advance if you need infant seats or special assistance."
      },
      {
        "question": "What is your cancellation policy?",
        "answer": "We offer free cancellation up to 24 hours before your scheduled tour starts. If you need to cancel or reschedule, please contact us via WhatsApp as early as possible so we can update our drivers' schedules."
      },
      {
        "question": "How do we pay for the tour?",
        "answer": "We accept cash payments in Indonesian Rupiah (IDR) or USD directly to our driver at the end of the tour. If you prefer to pay online via Credit Card or Wise, please let us know during the booking confirmation so we can send you a secure payment link."
      },
      {
        "question": "What are the payment terms?",
        "answer": "Payment can be made in cash to the driver upon completion of the tour."
      },
      {
        "question": "Can the itinerary be customized?",
        "answer": "The itinerary can be customized according to customer preferences, subject to the available route, fast boat schedule, weather conditions, and one-way journey arrangements."
      }
    ],
    "pricing": [
      {
        "label": "1 Person",
        "price": 55.0
      },
      {
        "label": "2 People",
        "price": 55.0
      },
      {
        "label": "3 People",
        "price": 55.0
      },
      {
        "label": "4+ People",
        "price": 55.0
      }
    ]
  },
  {
    "slug": "uluwatu-tour",
    "title": "Uluwatu Tour",
    "category": "Temple & Culture",
    "description": "Discover the beauty of South Bali on a private full-day journey combining exciting water sports, stunning beaches, Balinese culture, and a magical sunset experience.",
    "image": "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
    "price": 55.0,
    "availableReference": true,
    "destinations": [],
    "itinerary": [
      {
        "title": "Hotel Pickup & Water Sports",
        "description": "09:00 - 12:00"
      },
      {
        "title": "GWK Cultural Experience",
        "description": "12:00 - 13:30"
      },
      {
        "title": "Padang Padang Beach",
        "description": "13:30 - 15:00"
      },
      {
        "title": "Uluwatu Temple & Sunset",
        "description": "15:00 - 19:00"
      },
      {
        "title": "Optional Jimbaran Seafood Dinner & Return",
        "description": "19:00 - 21:00"
      }
    ],
    "faq": [
      {
        "question": "How do I make a booking request?",
        "answer": "Simply fill out our booking form on the right side of this page with your contact details, preferred travel date, and number of guests, then click \"Book Now\". Our team will reach out to you via WhatsApp or Email within a few hours to confirm availability and coordinate the details."
      },
      {
        "question": "Can we change the start time of the tour?",
        "answer": "Yes! Since all of our tours are completely private, you can request a customized pickup time that fits your schedule. Just let us know your preference when booking or contact us beforehand."
      },
      {
        "question": "Is this tour suitable for young children or elderly travelers?",
        "answer": "Most of our tours are family-friendly and private, meaning we travel at your own pace. If a specific tour requires heavy trekking or is not recommended for certain age groups, it will be noted in the itinerary. Please let us know in advance if you need infant seats or special assistance."
      },
      {
        "question": "What is your cancellation policy?",
        "answer": "We offer free cancellation up to 24 hours before your scheduled tour starts. If you need to cancel or reschedule, please contact us via WhatsApp as early as possible so we can update our drivers' schedules."
      },
      {
        "question": "How do we pay for the tour?",
        "answer": "We accept cash payments in Indonesian Rupiah (IDR) or USD directly to our driver at the end of the tour. If you prefer to pay online via Credit Card or Wise, please let us know during the booking confirmation so we can send you a secure payment link."
      },
      {
        "question": "What are the payment terms?",
        "answer": "Payment can be made in cash to the driver upon completion of the tour."
      },
      {
        "question": "Can the itinerary be customized?",
        "answer": "The itinerary can be customized according to customer preferences, subject to the available route, fast boat schedule, weather conditions, and one-way journey arrangements."
      }
    ],
    "pricing": [
      {
        "label": "1 Person",
        "price": 55.0
      },
      {
        "label": "2 People",
        "price": 55.0
      },
      {
        "label": "3 People",
        "price": 55.0
      },
      {
        "label": "4+ People",
        "price": 55.0
      }
    ]
  },
  {
    "slug": "breakfast-with-orangutans-bali-zoo",
    "title": "Breakfast with Orangutans & Bali Zoo",
    "category": "Nature & Scenery",
    "description": "Create unforgettable memories with a unique wildlife experience at Bali Zoo. Start your morning with a special breakfast experience while observing orangutans, followed by an exciting exploration of the zoo&#039;s diverse wildlife attractions.Discover exotic animals, enjoy interactive animal presentations, and cool off at the Jungle Splash Waterplay area. This private tour is suitable for families, couples, and travelers looking for a fun and memorable wildlife experience in Bali.",
    "image": "/storage/tour-covers/01KZSYMATD7SJJHXA4JMRYJM74.html",
    "price": 55.0
  },
  {
    "slug": "nusa-penida-east-tour",
    "title": "Nusa Penida East Tour",
    "category": "Island Hopping",
    "description": "Discover the breathtaking beauty of East Nusa Penida on a private island adventure. Explore dramatic cliffs, pristine beaches, turquoise waters, and spectacular ocean viewpoints across the eastern side of the island.Visit the famous Tree House, admire the stunning coastline from Thousand Island Viewpoint, and explore the beautiful beaches of Diamond Beach and Atuh Beach. This tour includes fast boat transportation from Bali, a private car in Nusa Penida, entrance tickets, and a professional driver for a comfortable island experience.",
    "image": "/storage/tour-covers/01KZVPARASND5YEHH960VVMVQG.html",
    "price": 55.0
  },
  {
    "slug": "east-west-nusa-penida-tour",
    "title": "East & West Nusa Penida Tour",
    "category": "Island Hopping",
    "description": "Experience the best of East and West Nusa Penida in one unforgettable island adventure. Discover dramatic cliffs, crystal-clear waters, beautiful beaches, spectacular coastal viewpoints, and vibrant underwater scenery.The tour combines a snorkeling experience at Manta Bay and Gamat Bay with visits to some of Nusa Penida&#039;s most iconic destinations, including Broken Beach, Angel&#039;s Billabong, Kelingking Beach, Diamond Beach, Atuh Beach, Tree House, and Thousand Island.With fast boat transportation, a private car in Nusa Penida, and a professional driver, this tour provides a convenient way to explore both sides of the island in one day.",
    "image": "/storage/tour-covers/01KZVRQ6Z2KEKAH5SGBH0B0TYK.html",
    "price": 55.0
  },
  {
    "slug": "nusa-penida-west-snorkeling-tour",
    "title": "Nusa Penida West & Snorkeling Tour",
    "category": "Island Hopping",
    "description": "Experience the natural beauty of West Nusa Penida on a private island adventure combining exciting snorkeling and iconic coastal attractions.Explore the underwater world of Manta Bay and Gamat Bay, then discover the dramatic cliffs and spectacular coastal scenery of Broken Beach, Angel&#039;s Billabong, and Kelingking Beach.With fast boat transportation, a private car in Nusa Penida, and a professional driver, this tour offers a comfortable and convenient way to experience the highlights of West Nusa Penida in one day.",
    "image": "/storage/tour-covers/01KZVS3040R32J0EHFN7KE6H6J.html",
    "price": 55.0
  },
  {
    "slug": "nusa-penida-west-tour",
    "title": "Nusa Penida West Tour",
    "category": "Island Hopping",
    "description": "Discover the breathtaking beauty of West Nusa Penida on a private island adventure. Explore dramatic cliffs, crystal-clear waters, beautiful beaches, and some of the island&#039;s most iconic coastal destinations.Visit the famous T-Rex-shaped cliffs of Kelingking Beach, admire the spectacular natural arch at Broken Beach, discover the natural rock pool at Angel&#039;s Billabong, and relax by the tropical waters of Crystal Bay.",
    "image": "/storage/tour-covers/01KZVW4VF6VV9FVH9MW04058NV.html",
    "price": 55.0
  },
  {
    "slug": "east-bali-tour",
    "title": "East Bali Tour",
    "category": "Temple & Culture",
    "description": "Discover the hidden beauty of East Bali on a relaxing private journey combining Balinese culture, traditional architecture, and beautiful coastal scenery.Visit the iconic Lempuyang Temple and its famous Gate of Heaven, explore the peaceful gardens and water features of Tirta Gangga Water Palace, and finish the day relaxing at the beautiful white-sand Virgin Beach.",
    "image": "/storage/tour-covers/01KZVW2SQJ4RKX8N4CPADZESC9.html",
    "price": 55.0
  },
  {
    "slug": "kintamani-volcano-tour",
    "title": "Kintamani Volcano Tour",
    "category": "Nature & Scenery",
    "description": "Discover the natural beauty and cultural charm of Bali on a private journey through Kintamani and Ubud. Enjoy breathtaking views of Mount Batur and Lake Batur, discover Bali&#039;s traditional coffee-making process, explore the beautiful Tegalalang Rice Terrace, and visit the sacred Tirta Empul Temple.This tour combines volcanic landscapes, tropical scenery, local culture, and a relaxing countryside experience in one comfortable journey.",
    "image": "/storage/tour-covers/01KZVXGC3KEGHZ6V2SCABEQ57V.html",
    "price": 55.0
  },
  {
    "slug": "ubud-cultural-tour",
    "title": "Ubud Cultural Tour",
    "category": "Nature & Scenery",
    "description": "Discover the heart of Bali on a private journey through Ubud&#039;s cultural and natural attractions. Explore the lush Sacred Monkey Forest, discover traditional Balinese coffee-making, enjoy the beautiful scenery of Tegalalang Rice Terrace, and relax at a peaceful tropical waterfall.For an additional experience, guests can also enjoy an optional Bali Swing overlooking Bali&#039;s lush green landscape.",
    "image": "/storage/tour-covers/01KZVZGPB8PB4NN2AQH6Q7J6X0.html",
    "price": 55.0
  },
  {
    "slug": "tanah-lot-sunset-tou",
    "title": "Tanah Lot Sunset Tou",
    "category": "Temple & Culture",
    "description": "Discover the cultural beauty of Bali on a relaxing private tour through Tabanan and West Bali. Visit the historic Taman Ayun Temple, experience Bali&#039;s traditional coffee culture, and end the day at the iconic Tanah Lot Temple while enjoying a spectacular sunset over the Indian Ocean.This tour combines Balinese architecture, peaceful gardens, local traditions, and one of Bali&#039;s most famous sunset experiences.",
    "image": "/storage/tour-covers/01KZW0G8E9TDWZ7BVZ18S93SBH.html",
    "price": 55.0
  },
  {
    "slug": "north-bali-exploration",
    "title": "North Bali Exploration",
    "category": "Nature & Scenery",
    "description": "Escape the crowds and discover the peaceful natural beauty of North Bali. Travel through cool mountain landscapes, visit serene lakes, explore iconic viewpoints, and experience the spectacular rice terraces of Jatiluwih.From the peaceful surroundings of Buyan Lake to the famous Handara Gate and panoramic views from Wanagiri Hidden Hill, this private tour offers a relaxing combination of nature, scenic landscapes, and traditional Balinese countryside.",
    "image": "/storage/tour-covers/01KZW3P6EBYF2C95GEA9KXFC47.html",
    "price": 55.0
  }
];

export const tourBySlug = (slug:string) => tours.find(t => t.slug === slug);
