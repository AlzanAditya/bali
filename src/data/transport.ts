export interface Transport { slug:string; title:string; image:string; passengers:number; bags:number; price:number; availableReference?:boolean; description?:string }

export const transport: Transport[] = [
  {
    "slug": "toyota-avanza",
    "title": "Toyota Avanza",
    "image": "/storage/vehicle-covers/01KZWBPG3W5BK786SEJV9VSCTC.webp",
    "passengers": 6,
    "bags": 5,
    "price": 55.0
  },
  {
    "slug": "toyota-innova-reborn",
    "title": "Toyota Innova Reborn",
    "image": "/storage/vehicle-covers/01KZWBQD8WNF5VF8BQ5HACJXEJ.webp",
    "passengers": 7,
    "bags": 6,
    "price": 55.0
  },
  {
    "slug": "toyota-hi-ace",
    "title": "Toyota Hi-Ace",
    "image": "/storage/vehicle-covers/01KZWBARRNBJ8G3KGBC5GENQ6Z.webp",
    "passengers": 15,
    "bags": 10,
    "price": 55.0
  },
  {
    "slug": "toyota-alphard",
    "title": "Toyota Alphard",
    "image": "/storage/vehicle-covers/01KZWBNNJKSZ99WWG7WSKFZKJ8.webp",
    "passengers": 5,
    "bags": 4,
    "price": 55.0
  },
  {
    "slug": "toyota-fortuner",
    "title": "Toyota Fortuner",
    "image": "/storage/vehicle-covers/01KZWBXF79WXRBKVSTPCR6K1TJ.webp",
    "passengers": 6,
    "bags": 5,
    "price": 55.0
  }
];

export const transportBySlug = (slug:string) => transport.find(t => t.slug === slug);
