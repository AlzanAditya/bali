import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { initSubpageAnimations } from "../utils/animations";

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const cleanup = initSubpageAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct fallback
    const message = encodeURIComponent(
      `Hello Bali Bagus Journey! 👋\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Inquiry Type:* ${formData.type}\n*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/6285934484380?text=${message}`, "_blank");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a tour or transport service?",
      answer:
        "You can book directly by filling out the inquiry form above, messaging us on WhatsApp (+62 859-3448-4380), or selecting your package and clicking the booking button on our Tours or Transport pages.",
    },
    {
      question: "How far in advance should I make a reservation?",
      answer:
        "We recommend booking at least 1–3 days in advance, especially during peak seasons (June–August and December–January). However, we also accept same-day bookings based on vehicle and guide availability.",
    },
    {
      question: "Can I customize the tour itinerary according to my preferences?",
      answer:
        "Yes! All our tour packages are 100% customizable. You can adjust the start time, swap destinations, or add custom stops. Our private driver will accommodate your preferred pace.",
    },
    {
      question: "What is included in the private car charter?",
      answer:
        "Our private transport includes a modern air-conditioned vehicle, a licensed professional English-speaking driver, fuel/petrol, parking fees, and cold bottled water for the day.",
    },
    {
      question: "What happens if our flight is delayed for airport pickup?",
      answer:
        "No worries! We track your flight number in real time. Your driver will adjust the pickup schedule and wait for you at the international/domestic arrival terminal with a custom name board at no extra charge.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash (IDR, USD, AUD) directly to the driver, bank transfer, and major credit cards via secure online payment.",
    },
  ];

  return (
    <div id="contact-page" className="w-full">
      {/* 1. HEADLINE HERO SECTION */}
      <section
        id="headline"
        className="relative min-h-[60dvh] md:min-h-[45dvh] lg:min-h-[68dvh] 2xl:min-h-[52dvh] 2xl:max-h-[52dvh] flex items-end 2xl:container mx-auto"
      >
        <div className="absolute overflow-hidden inset-0 lg:inset-5 lg:top-4 lg:rounded-3xl 2xl:inset-x-0 lg:bottom-auto lg:h-[68dvh] 2xl:max-h-[50dvh]">
          <div className="gsap-headline-overlay absolute z-10 h-full w-full lg:rounded-3xl bg-[#131313]/50 lg:bg-transparent lg:bg-gradient-to-b from-0% from-[#131313]/40 via-40% via-[#131313]/0 to-80% to-[#131313]/80 lg:to-[#131313]/70"></div>
          <img
            src="assets/galleries/bdk2uvvu6stlowu9fhjc.webp"
            alt="Contact Bali Bagus Journey"
            fetchPriority="high"
            decoding="async"
            className="gsap-headline-bg absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <div className="px-5 md:px-12 lg:px-20 2xl:px-36 pb-12 md:pb-20 relative z-20 w-full">
          <div className="text-center flex flex-col items-center">
            <div className="gsap-headline-badge flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2 mb-5 lg:mb-6">
              <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
              <strong className="font-medium text-sm md:text-base text-[#131313]">
                Contact Us
              </strong>
            </div>
            <h1 className="gsap-headline-title text-3xl md:text-5xl lg:text-[52px] w-full mb-4 font-semibold text-white leading-snug lg:leading-[1.2]">
              Let's Plan Your <br /> Bali Journey With Us
            </h1>
            <p className="gsap-headline-text text-sm text-white w-full md:w-[72%] lg:w-[40%] leading-relaxed">
              Have questions or ready to book? Our friendly team is here to help you plan a smooth, comfortable, and unforgettable experience in Bali.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & DIRECT ACCESS SECTION */}
      <section
        id="form"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 pt-12 pb-32 lg:pb-20 2xl:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Form: col-span-12 lg:col-span-7 */}
          <div className="col-span-12 lg:col-span-7">
            <div className="gsap-contact-form bg-[#F8F9FA] rounded-2xl p-5 lg:p-8 w-full border border-[#E5E5E5]/50">
              <h3 className="text-2xl font-semibold mb-6 text-[#131313]">
                Start Your Inquiry
              </h3>

              {submitted ? (
                <div className="bg-white p-8 rounded-2xl border border-green-200 text-center space-y-4">
                  <div className="size-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#131313]">
                    Thank You for Your Inquiry!
                  </h4>
                  <p className="text-sm text-[#71717A] max-w-md mx-auto">
                    Your request has been forwarded to our WhatsApp reservation desk. Our team will get back to you within a few minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-block text-sm font-semibold text-[#FD4621] hover:underline pt-2 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-5">
                    <label
                      htmlFor="full-name"
                      className="block text-[#71717A] text-sm font-medium mb-2.5"
                    >
                      Your Full Name
                    </label>
                    <div className="relative border border-[#E5E5E5] rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-[#FD4621] transition-colors">
                      <User className="size-5 text-[#131313] shrink-0" />
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        placeholder="Bobby JR"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent placeholder-[#71717A]"
                        required
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-5">
                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#71717A] text-sm font-medium mb-2.5"
                      >
                        Email Address
                      </label>
                      <div className="relative border border-[#E5E5E5] rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-[#FD4621] transition-colors">
                        <Mail className="size-5 text-[#131313] shrink-0" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="user@gmail.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent placeholder-[#71717A]"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#71717A] text-sm font-medium mb-2.5"
                      >
                        Phone Number
                      </label>
                      <div className="relative border border-[#E5E5E5] rounded-full px-5 py-4 flex items-center gap-3 bg-white focus-within:border-[#FD4621] transition-colors">
                        <Phone className="size-5 text-[#131313] shrink-0" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+62 821-2345-678"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent placeholder-[#71717A]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="mb-5">
                    <label
                      htmlFor="inquiry-type"
                      className="block text-[#71717A] text-sm font-medium mb-2.5"
                    >
                      Inquiry Type
                    </label>
                    <div className="relative border border-[#E5E5E5] rounded-full px-5 py-3.5 flex items-center gap-3 bg-white focus-within:border-[#FD4621] transition-colors">
                      <HelpCircle className="size-5 text-[#131313] shrink-0" />
                      <select
                        id="inquiry-type"
                        name="type"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent appearance-none cursor-pointer pr-10"
                        required
                      >
                        <option value="general">General Question</option>
                        <option value="trip-tour">Trip and Tour</option>
                        <option value="testimonial">Testimonial</option>
                      </select>
                      <ChevronDown className="size-4 text-[#131313] shrink-0 absolute right-5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Your Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-[#71717A] text-sm font-medium mb-2.5"
                    >
                      Your Message
                    </label>
                    <div className="relative border border-[#E5E5E5] rounded-2xl px-5 py-4 flex items-start gap-3 bg-white focus-within:border-[#FD4621] transition-colors">
                      <MessageSquare className="size-5 text-[#131313] shrink-0 mt-0.5" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Your Question"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full text-[#131313] text-sm font-medium focus:outline-none bg-transparent placeholder-[#71717A] resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Footer Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      id="inquiry-submit-btn"
                      className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 bg-[#FD4621] text-white hover:bg-[#FD4621]/90 pl-5 pr-2 py-2"
                    >
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                          Submit Inquiry
                        </span>
                        <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                          Submit Inquiry
                        </span>
                      </div>
                      <span className="bg-white text-[#FD4621] p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                        <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                        <ArrowUpRight className="absolute size-4 transition-transform duration-500 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Access: col-span-12 lg:col-span-5 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="gsap-contact-direct-access p-5 md:p-7 bg-[#131313] rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Direct Access
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/6285934484380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-2xl flex items-center gap-5 hover:opacity-85 transition ease-in-out"
                >
                  <div className="p-3 w-fit bg-[#FD4621] rounded-2xl shrink-0">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base text-[#71717A] mb-0.5">
                      Whatsapp
                    </h4>
                    <strong className="font-semibold text-[#131313]">
                      +62 859-3448-4380
                    </strong>
                  </div>
                </a>

                <a
                  href="mailto:balibagusjourney@gmail.com"
                  className="bg-white p-4 rounded-2xl flex items-center gap-5 hover:opacity-85 transition ease-in-out"
                >
                  <div className="p-3 w-fit bg-[#FD4621] rounded-2xl shrink-0">
                    <Mail className="size-6 text-white" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-base text-[#71717A] mb-0.5">
                      Email Us
                    </h4>
                    <strong className="font-semibold text-[#131313] truncate block">
                      balibagusjourney@gmail.com
                    </strong>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Jl.+Puputan+Baru+Gg.+VI+A+No.26,+Tegal+Kertha,+Kec.+Denpasar+Bar.,+Kota+Denpasar,+Bali+80111,+Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-2xl flex items-center gap-5 hover:opacity-85 transition ease-in-out"
                >
                  <div className="p-3 w-fit bg-[#FD4621] rounded-2xl shrink-0">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base text-[#71717A] mb-0.5">
                      Address
                    </h4>
                    <strong className="font-semibold text-[#131313] text-sm leading-snug line-clamp-2">
                      Jl. Puputan Baru Gg. VI A No.26, Tegal Kertha, Kec. Denpasar Bar., Kota Denpasar, Bali 80111, Indonesia
                    </strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section
        id="faq"
        className="2xl:container mx-auto px-5 md:px-12 lg:px-20 2xl:px-30 py-12 md:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10">
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-0 lg:justify-between">
            <div>
              <div className="mb-4 lg:mb-6 flex items-center gap-2 w-fit bg-white border border-[#E5E5E5] rounded-full px-2.5 pr-3 py-2">
                <div className="size-2.5 bg-[#FD4621] rounded-full"></div>
                <strong className="font-medium text-sm md:text-base text-[#131313]">
                  FAQ
                </strong>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-[1.3] lg:max-w-xl text-[#131313]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex">
              <div className="w-full md:w-3/5 lg:w-4/5 xl:w-[75%] bg-[#F8F9FA] p-6 lg:p-7 rounded-2xl border border-[#E5E5E5]/50">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-2 text-[#131313]">
                    Have Another Question?
                  </h4>
                  <p className="text-sm w-[88%] text-[#131313]/80 leading-relaxed">
                    Contact us via WhatsApp and we will respond quickly
                  </p>
                </div>

                <a
                  href="https://wa.me/6285934484380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 font-semibold rounded-full text-sm cursor-pointer transition-all duration-500 bg-[#131313] text-white hover:bg-[#131313]/90 pl-3 pr-1.5 py-1.5 lg:pl-4 lg:pr-2 lg:py-1.5 w-fit text-xs lg:text-sm"
                >
                  <div className="relative overflow-hidden flex items-center justify-center">
                    <span className="block transition-transform duration-500 group-hover:translate-y-[150%]">
                      Contact Us
                    </span>
                    <span className="absolute block transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
                      Contact Us
                    </span>
                  </div>
                  <span className="bg-[#FD4621] text-white p-1.5 rounded-full relative overflow-hidden flex items-center justify-center">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="bg-[#F8F9FA] p-5 lg:p-6 rounded-2xl cursor-pointer border border-[#E5E5E5]/50 transition-colors hover:border-[#FD4621]/30"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-base lg:text-lg font-semibold text-[#131313]">
                      {faq.question}
                    </h3>
                    <div
                      className={`size-8 md:size-9 lg:size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#FD4621] text-white"
                          : "bg-[#131313] text-white"
                      }`}
                    >
                      <svg
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        )}
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-4 lg:pt-5 mt-4 lg:mt-5 border-t border-[#E5E5E5]">
                      <p className="text-sm lg:text-base text-[#131313]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
