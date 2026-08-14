import type { ComponentType } from 'react'
import { AboutPage } from './about'
import { Blog_10_best_things_to_do_in_bali_for_first_time_visitorsPage } from './10_best_things_to_do_in_bali_for_first_time_visitors'
import { Blog_a_food_lovers_guide_to_balinese_cuisine_must_try_dishesPage } from './a_food_lovers_guide_to_balinese_cuisine_must_try_dishes'
import { Blog_bali_adventure_activities_from_volcano_trekking_to_white_water_raftingPage } from './bali_adventure_activities_from_volcano_trekking_to_white_water_rafting'
import { Blog_balis_sacred_traditions_temple_ceremonies_and_cultural_etiquette_for_travelersPage } from './balis_sacred_traditions_temple_ceremonies_and_cultural_etiquette_for_travelers'
import { BlogsPage } from './blogs'
import { ContactPage } from './contact'
import { GalleryPage } from './gallery'
import { HomePage } from './index'
import { Tour_blue_lagoon_coastal_explorationPage } from './blue_lagoon_coastal_exploration'
import { Tour_dolphin_watching_tourPage } from './dolphin_watching_tour'
import { Tour_mount_batur_sunrise_trek_jeep_tourPage } from './mount_batur_sunrise_trek_jeep_tour'
import { Tour_uluwatu_tourPage } from './uluwatu_tour'
import { ToursPage } from './tours'
import { TransportPage } from './transport'

export type PageDefinition = {
  route: string
  file: string
  title: string
  description: string
  ogImage: string
  component: ComponentType
}

export const pages: PageDefinition[] = [
  { route: "/about.html", file: "about.html", title: "About Bali Bagus Journey - Local Bali Tour & Driver Experts", description: "Learn about Bali Bagus Journey, a trusted Bali travel company since 2016. We offer private tours, airport transfers, and personalized Bali travel experiences with local expertise.", ogImage: "assets/home/hero.webp", component: AboutPage },
  { route: "/blogs/10-best-things-to-do-in-bali-for-first-time-visitors.html", file: "blogs/10-best-things-to-do-in-bali-for-first-time-visitors.html", title: "10 Best Things to Do in Bali for First-Time Visitors | Bali Bagus Journey Blog", description: "10 Best Things to Do in Bali for First-Time VisitorsBali has a way of overwhelming first-time visitors in the best way possible. Between ancient temples, rice t...", ogImage: "../assets/home/hero.webp", component: Blog_10_best_things_to_do_in_bali_for_first_time_visitorsPage },
  { route: "/blogs/a-food-lovers-guide-to-balinese-cuisine-must-try-dishes.html", file: "blogs/a-food-lovers-guide-to-balinese-cuisine-must-try-dishes.html", title: "A Food Lover's Guide to Balinese Cuisine: Must-Try Dishes | Bali Bagus Journey Blog", description: "A Food Lover&#039;s Guide to Balinese Cuisine: Must-Try DishesBalinese food doesn&#039;t always get the spotlight that Balinese temples and beaches do, but it d...", ogImage: "../assets/home/hero.webp", component: Blog_a_food_lovers_guide_to_balinese_cuisine_must_try_dishesPage },
  { route: "/blogs/bali-adventure-activities-from-volcano-trekking-to-white-water-rafting.html", file: "blogs/bali-adventure-activities-from-volcano-trekking-to-white-water-rafting.html", title: "Bali Adventure Activities: From Volcano Trekking to White-Water Rafting | Bali Bagus Journey Blog", description: "Bali Adventure Activities: From Volcano Trekking to White-Water RaftingBeaches and temples get most of the attention, but Bali is also a genuinely good adventur...", ogImage: "../assets/home/hero.webp", component: Blog_bali_adventure_activities_from_volcano_trekking_to_white_water_raftingPage },
  { route: "/blogs/balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers.html", file: "blogs/balis-sacred-traditions-temple-ceremonies-and-cultural-etiquette-for-travelers.html", title: "Bali's Sacred Traditions: Temple Ceremonies and Cultural Etiquette for Travelers | Bali Bagus Journey Blog", description: "Bali&#039;s Sacred Traditions: Temple Ceremonies and Cultural Etiquette for TravelersBali&#039;s culture is inseparable from its religion. Balinese Hinduism, di...", ogImage: "../assets/home/hero.webp", component: Blog_balis_sacred_traditions_temple_ceremonies_and_cultural_etiquette_for_travelersPage },
  { route: "/blogs.html", file: "blogs.html", title: "Bali Travel Blog - Tips, Guides & Destination Stories | Bali Bagus Journey", description: "Read Bali travel tips, destination guides, and insider stories from Bali Bagus Journey. Discover the best places to visit, eat, and explore in Bali, Indonesia.", ogImage: "assets/home/hero.webp", component: BlogsPage },
  { route: "/contact.html", file: "contact.html", title: "Contact Bali Bagus Journey - Book Your Bali Tour or Transfer", description: "Contact Bali Bagus Journey to book a private Bali tour, airport transfer, or send a general inquiry. We respond quickly via WhatsApp or email.", ogImage: "assets/home/hero.webp", component: ContactPage },
  { route: "/gallery.html", file: "gallery.html", title: "Bali Tour Gallery - Photos & Memories | Bali Bagus Journey", description: "Browse photos and memories from Bali Bagus Journey tours and transport services. See real Bali experiences from our happy travelers.", ogImage: "assets/home/hero.webp", component: GalleryPage },
  { route: "/", file: "index.html", title: "Bali Bagus Journey - Private Tours & Airport Transfers in Bali", description: "Discover Bali with trusted local guides. Book private day tours, airport transfers, and customized Bali travel packages with Bali Bagus Journey. Reliable, personal, unforgettable.", ogImage: "assets/home/hero.webp", component: HomePage },
  { route: "/tours/blue-lagoon-coastal-exploration.html", file: "tours/blue-lagoon-coastal-exploration.html", title: "Blue Lagoon Coastal Exploration - Bali Bagus Journey", description: "Discover the hidden coastal beauty of East Bali on a private journey to Blue Lagoon and Tanjung Jepun. Enjoy a relaxing stop at Monkey Bar Pool &amp; Bar before...", ogImage: "../assets/home/hero.webp", component: Tour_blue_lagoon_coastal_explorationPage },
  { route: "/tours/dolphin-watching-tour.html", file: "tours/dolphin-watching-tour.html", title: "Dolphin Watching Tour - Bali Bagus Journey", description: "Start your morning with a magical sunrise experience at Lovina Beach and enjoy a private boat trip to see dolphins in their natural ocean environment.This tour...", ogImage: "../assets/home/hero.webp", component: Tour_dolphin_watching_tourPage },
  { route: "/tours/mount-batur-sunrise-trek-jeep-tour.html", file: "tours/mount-batur-sunrise-trek-jeep-tour.html", title: "Mount Batur Sunrise Trek & Jeep Tour - Bali Bagus Journey", description: "Start your adventure in the early morning and discover the magical beauty of Mount Batur. Experience the breathtaking sunrise, explore the dramatic volcanic lan...", ogImage: "../assets/home/hero.webp", component: Tour_mount_batur_sunrise_trek_jeep_tourPage },
  { route: "/tours/uluwatu-tour.html", file: "tours/uluwatu-tour.html", title: "Uluwatu Tour - Bali Bagus Journey", description: "Discover the beauty of South Bali on a private full-day journey combining exciting water sports, stunning beaches, Balinese culture, and a magical sunset experi...", ogImage: "../assets/home/hero.webp", component: Tour_uluwatu_tourPage },
  { route: "/tours.html", file: "tours.html", title: "Bali Private Tours & Activities - Bali Bagus Journey", description: "Browse private Bali day tours and activities with Bali Bagus Journey. Choose from cultural tours, temple visits, rice terrace treks, water activities, and more. Book now.", ogImage: "assets/home/hero.webp", component: ToursPage },
  { route: "/transport.html", file: "transport.html", title: "Private Transport & Airport Transfers in Bali - Bali Bagus Journey", description: "Book private transport and airport transfers in Bali with Bali Bagus Journey. Choose from Avanza, Innova, Hi-Ace, and more. Reliable, comfortable, and affordable.", ogImage: "assets/home/hero.webp", component: TransportPage },
]

export const pageByRoute = new Map(pages.map((page) => [page.route, page]))
