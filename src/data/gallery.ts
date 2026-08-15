export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "all" | "tours" | "nature" | "culture" | "transport";
  location: string;
}

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "tours", label: "Tour Moments" },
  { id: "nature", label: "Landscapes & Nature" },
  { id: "culture", label: "Temples & Culture" },
  { id: "transport", label: "Fleet & Vehicles" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/assets/galleries/ttoubtl9ndmw21ny1c3q.webp",
    alt: "Scenic view of Bali mountains and valleys",
    title: "Mount Batur Caldera & Morning Clouds",
    category: "nature",
    location: "Kintamani, Bali"
  },
  {
    id: "g2",
    src: "/assets/galleries/bdk2uvvu6stlowu9fhjc.webp",
    alt: "Travelers enjoying private tour service in Bali",
    title: "Happy Travelers with Local Driver",
    category: "tours",
    location: "Ubud, Bali"
  },
  {
    id: "g3",
    src: "/assets/galleries/dkuokdg5xh0xpytwno7v.webp",
    alt: "Scenic view of a tropical destination",
    title: "Crystal Blue Waters of East Nusa Penida",
    category: "nature",
    location: "Diamond Beach, Nusa Penida"
  },
  {
    id: "g4",
    src: "/assets/galleries/xkcqpgpatfpmvfixwgl9.webp",
    alt: "Group photo of happy tourists in Bali",
    title: "Group Adventure at Blue Lagoon",
    category: "tours",
    location: "Padangbai, Bali"
  },
  {
    id: "g5",
    src: "/assets/galleries/tpaoqgzfbkrfpwntmtje.webp",
    alt: "Traditional Balinese architecture",
    title: "Sacred Balinese Temple Gates (Candi Bentar)",
    category: "culture",
    location: "Lempuyang Temple, Karangasem"
  },
  {
    id: "g6",
    src: "/assets/galleries/uwvcv1a5gxmyr9fiphlm.webp",
    alt: "Lush green rice terraces in Ubud, Bali",
    title: "Tegallalang Emerald Rice Cascades",
    category: "nature",
    location: "Tegallalang, Ubud"
  },
  {
    id: "g7",
    src: "/assets/galleries/sotlfso1va1cge2szlmn.webp",
    alt: "Tourists posing near Balinese temple gateway",
    title: "Cultural Temple Blessing & Walk",
    category: "culture",
    location: "Tirta Empul, Tampaksiring"
  },
  {
    id: "g8",
    src: "/assets/galleries/erpcsospbml5v1sl6xzs.webp",
    alt: "Comfortable transport vehicle for private tour",
    title: "Clean Modern Fleet with Private Chauffeur",
    category: "transport",
    location: "Denpasar, Bali"
  },
  {
    id: "g9",
    src: "/storage/tour-covers/01KZSQPH01BQ63EGTCSA1WC7QT.webp",
    alt: "Lovina dolphin watching sunrise",
    title: "Sunrise Dolphin Encounter",
    category: "nature",
    location: "Lovina Beach, North Bali"
  },
  {
    id: "g10",
    src: "/storage/tour-covers/01KZSSNKTYSH1SQ8YYE3Z30Z75.webp",
    alt: "Mount Batur 4WD Jeep Sunrise",
    title: "4WD Jeep Mount Batur Black Lava",
    category: "tours",
    location: "Kintamani Highlands"
  },
  {
    id: "g11",
    src: "/storage/tour-covers/01KZSWWN21GF3CX3T56J9WDW7B.webp",
    alt: "Blue Lagoon Snorkeling Bay",
    title: "Padangbai Snorkeling Reef",
    category: "tours",
    location: "Blue Lagoon Bay"
  },
  {
    id: "g12",
    src: "/storage/tour-covers/01KZSXDTF3SDRBZZ3QCCSRE254.webp",
    alt: "Uluwatu Sunset Temple Cliff",
    title: "Uluwatu Temple Sunset & Ocean Waves",
    category: "culture",
    location: "Uluwatu, Pecatu"
  }
];
