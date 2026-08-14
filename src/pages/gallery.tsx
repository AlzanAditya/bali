import { PageShell } from '../components/PageShell'

export function GalleryPage() {
  return (
    <PageShell>
      

<main className={"min-h-dvh"}>
<section id={"headline"} className={"relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"}>
<div className={"absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]"}>
<div className={"gsap-tours-overlay opacity-0 absolute z-10 h-full w-full lg:rounded-3xl bg-foreground/50 lg:bg-transparent lg:bg-linear-to-b from-0% from-foreground/40 via-40% via-foreground/0 to-80% to-foreground/80 lg:to-foreground/70"}></div>
<img src={"assets/galleries/headline.html"} alt={"Scenic view of Bali mountains and valleys, representing diverse Bali tour packages"} fetchpriority={"high"} decoding={"async"} className={"gsap-tours-bg opacity-0 scale-105 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"} />
</div>
<div className={"px-5 md:px-12 lg:px-20 2xl:px-36 pb-12 md:pb-20 relative z-20 w-full"}>
<div className={"text-center flex flex-col items-center"}>
<div className={"gsap-tours-badge opacity-0 translate-y-16 flex items-center gap-2 w-fit bg-white border border-border rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6"}>
<div className={"size-2.5 bg-primary rounded-full"}></div>
<strong className={"font-medium text-sm md:text-base text-foreground"}>Journey Gallery</strong>
</div>
<h1 className={"gsap-tours-title opacity-0 translate-y-16 text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]"}>
               Where Every Journey <br /> Becomes a Memory
            </h1>
<p className={"gsap-tours-text opacity-0 translate-y-16 text-sm text-white w-full md:w-[72%] lg:w-[40%] leading-relaxed"}>
                Every photo captures the beauty of Bali, the comfort of our services, and the unforgettable memories created with travelers from around the world.
            </p>
</div>
</div>
</section>
<section id={"picture"} className={"2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"}>

<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5"}>
<div className={"md:row-span-2 overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-1-item"}>
<img src={"assets/galleries/ttoubtl9ndmw21ny1c3q.webp"} alt={"Beautiful Balinese scenery with mountains"} className={"w-full h-64 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
<div className={"overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-1-item"}>
<img src={"assets/galleries/bdk2uvvu6stlowu9fhjc.webp"} alt={"Travelers enjoying private tour service in Bali"} className={"w-full h-48 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
<div className={"overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-1-item"}>
<img src={"assets/galleries/dkuokdg5xh0xpytwno7v.webp"} alt={"Scenic view of a tropical destination"} className={"w-full h-48 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
<div className={"md:col-span-2 overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-1-item"}>
<img src={"assets/galleries/xkcqpgpatfpmvfixwgl9.webp"} alt={"Group photo of happy tourists in Bali"} className={"w-full h-48 md:h-97.5 object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
</div>

<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"}>
<div className={"overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-2-item"}>
<img src={"assets/galleries/tpaoqgzfbkrfpwntmtje.webp"} alt={"Traditional Balinese architecture"} className={"w-full h-48 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
<div className={"overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-2-item"}>
<img src={"assets/galleries/uwvcv1a5gxmyr9fiphlm.webp"} alt={"Lush green rice terraces in Ubud, Bali"} className={"w-full h-48 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
<div className={"md:row-span-2 overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-2-item"}>
<img src={"assets/galleries/sotlfso1va1cge2szlmn.webp"} alt={"Tourists posing near Balinese temple gateway"} className={"w-full h-64 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
<div className={"md:col-span-2 overflow-hidden rounded-2xl cursor-pointer group opacity-0 translate-y-16 gsap-gallery-grid-2-item"}>
<img src={"assets/galleries/erpcsospbml5v1sl6xzs.webp"} alt={"Comfortable transport vehicle for private tour"} className={"w-full h-48 md:h-97.5 object-cover transition-transform duration-500 ease-out group-hover:scale-105"} />
</div>
</div>
</section> </main>
 
    </PageShell>
  )
}
