import { useState, type ReactNode } from "react";
import imgBackground from "@/imports/Home/fa0765984e44f85e1a04562f820f1492949a1257.png";
import imgPlantLogo from "@/imports/Home/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png";
import imgSearch from "@/imports/Home/743cbcfb287217bc1d51247b1ef3fbccb15f8b6c.png";
import imgBag from "@/imports/Home/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import imgArrowRight from "@/imports/Home/65c9b2e2178b53eba63dace1c4f1d8c96673ade2.png";
import imgHeroReviewerAvatar from "@/imports/Home/72419c36cae7ef6f9c25b97e39a231fc9059935c.png";
import imgAglaonema from "@/imports/Home/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png";
import imgPlantainLilies from "@/imports/Home/b48312dbddc890f7f35ef3964ae1e7900b89782c.png";
import imgDeskPlant from "@/imports/Home/95e728282f4fb901ee2edc80783c2fbd7df490c2.png";
import imgCactus from "@/imports/Home/6d90916507b2b3030961c99c6af0ebac97b86c78.png";
import imgSansevieria from "@/imports/Home/eb0351a5771ed55c7f3454bcce697dfe63237769.png";
import imgAgave from "@/imports/Home/444fba49a2674d2262c5455bcc501cb91b314490.png";
import imgSwissCheese from "@/imports/Home/5196aba58f7006d90ec0712ac1d01688cde1a537.png";
import imgReviewerShelly from "@/imports/Home/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png";
import imgReviewerLula from "@/imports/Home/8af347a65acb49fcb29cfac2ba705f2b27151f3f.png";
import imgReviewerCarol from "@/imports/Home/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png";

// ─── Star Rating ─────────────────────────────────────────────────────────────

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M9.5 1L11.8 6.8L18 7.3L13.5 11.2L14.9 17.2L9.5 14L4.1 17.2L5.5 11.2L1 7.3L7.2 6.8L9.5 1Z"
            fill="#FFF84E"
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Glass Card ──────────────────────────────────────────────────────────────

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-[12px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] rounded-[32px] ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = ["Home", "Plants Type", "More", "Contact"];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={imgPlantLogo} alt="FloraVision plant icon" className="w-10 h-10 md:w-12 md:h-12 object-cover" />
        <span
          className="text-white font-black text-xl md:text-[28px] opacity-75"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          FloraVision.
        </span>
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white text-lg lg:text-2xl hover:opacity-100 opacity-80 transition-opacity flex items-center gap-1.5"
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              {link}
              {link === "Plants Type" && (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="rotate-180">
                  <path d="M1 5L5 1L9 5" stroke="white" strokeWidth="1.5" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-3 md:gap-4">
        <button aria-label="Search" className="opacity-75 hover:opacity-100 transition-opacity">
          <img src={imgSearch} alt="" className="w-6 h-6 object-cover" />
        </button>
        <button aria-label="Cart" className="opacity-75 hover:opacity-100 transition-opacity">
          <img src={imgBag} alt="" className="w-6 h-6 object-cover" />
        </button>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 opacity-75"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-0.5 bg-white rounded-full" />
          <span className="block w-5 h-0.5 bg-white rounded-full ml-auto" />
        </button>
        {/* Desktop hamburger icon */}
        <div className="hidden md:flex flex-col gap-1.5 opacity-75">
          <span className="block w-7 h-0.5 bg-white rounded-full" />
          <span className="block w-5 h-0.5 bg-white rounded-full ml-auto" />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#1b2316]/95 backdrop-blur-md border-t border-white/10 md:hidden">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-white text-xl py-2 opacity-80"
                  style={{ fontFamily: "'Indie Flower', cursive" }}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative px-6 md:px-10 pt-4 pb-20 md:pb-32">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
        {/* Left: copy */}
        <div>
          <h1
            className="font-semibold text-white opacity-75 text-3xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] whitespace-nowrap leading-tight mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Earth's Exhale
          </h1>
          <p
            className="text-white/75 text-xs sm:text-sm md:text-base mb-10 max-w-[520px] font-medium leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment
            and its essential role in sustaining life.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-5 mb-14">
            <div className="relative">
              <div className="border-2 border-white rounded-xl w-[217px] h-[64px] flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <span
                  className="text-white/75 text-2xl font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Buy Now
                </span>
              </div>
            </div>
          </div>

          {/* Small testimonial card */}
          <div className="backdrop-blur-[8px] bg-white/5 border border-white rounded-[45px] p-5 max-w-[409px]">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={imgHeroReviewerAvatar}
                alt="Ronnie Hamill"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p
                  className="text-white text-xl font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Ronnie Hamill
                </p>
                <StarRating count={5} />
              </div>
            </div>
            <p
              className="text-white/75 text-[15px] leading-relaxed font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I can't express how thrilled I am with my new natural plants! They bring such a
              fresh and vibrant energy to my home.
            </p>
          </div>
        </div>

        {/* Right: featured Aglaonema card */}
        <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Restored to exactly match Figma: 
            max-w is 512px. 
            h is 624px (The glass box height). 
            The plant breaking out of the top makes up the rest of the 719px total height. 
          */}
          <div className="relative w-full max-w-[312px] h-[379px] flex flex-col items-center justify-end pb-2 px-8">
            
            {/* Custom SVG Background matching Figma precisely */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg width="100%" height="100%" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <foreignObject x="-15" y="-15" width="100%" height="100%">
                  <div style={{ backdropFilter: "blur(7.5px)", clipPath: "url(#bgblur_0_11_19_clip_path)", height: "100%", width: "100%" }}></div>
                </foreignObject>
                <path data-figma-bg-blur-radius="15" d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_11_19)"/>
                <defs>
                  <clipPath id="bgblur_0_11_19_clip_path" transform="translate(15 15)">
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"/>
                  </clipPath>
                  <linearGradient id="paint0_linear_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Inner Content Overlaid on SVG */}
<div className="relative z-10 w-[320px] flex flex-col p-6">
  {/* Plant image: Adjusted to be larger and sit higher */}
  <img
    src={imgAglaonema}
    alt="Aglaonema indoor plant"
    className="w-full object-contain max-h-[320px] -mt-0 mb-0"
  />
  
  <p
    className="text-white/75 text-[0.9rem] font-normal"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    Indoor Plant
  </p>
  <p
    className="text-white/75 text-[1.8rem] font-normal leading-tight"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    Aglaonema plant
  </p>
  
  <div className="flex items-center justify-between mt-6">
    <div className="border border-white/50 rounded-lg px-10 py-3 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
      <span
        className="text-white text-1xl"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Buy Now
      </span>
    </div>
    <img
      src={imgArrowRight}
      alt="next"
      className="w-4 h-4 object-cover opacity-75"
    />
  </div>

  {/* Carousel dots */}
  <div className="flex items-center gap-1.5 mt-6 justify-center">
    <div className="w-4 h-1 bg-white rounded-full" />
    <div className="w-1 h-1 bg-white/50 rounded-full" />
    <div className="w-1 h-1 bg-white/50 rounded-full" />
  </div>
</div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading({
  children,
  accentColor = "white",
}: {
  children: ReactNode;
  accentColor?: "white" | "green";
}) {
  const isGreen = accentColor === "green";

  return (
    <div className="flex justify-center mb-12 w-full">
      <div className="relative inline-flex items-center justify-center px-8 py-3">
        {/* Left Graphic (Bottom-Left Corner Frame) */}
        <svg
          className="absolute left-0 bottom-0"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0 V45 Q2 63 20 63 H65"
            stroke={isGreen ? "url(#left-grad-green)" : "url(#left-grad-white)"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="left-grad-green" x1="0" y1="65" x2="65" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#75DF1B" />
              <stop offset="1" stopColor="#2a3522" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="left-grad-white" x1="0" y1="65" x2="65" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBD300" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Heading Text with strong Figma Drop Shadow */}
        <h2
          className="font-bold text-white text-4xl sm:text-[3.5rem] leading-tight text-center relative z-10"
          style={{
            fontFamily: "Inter, sans-serif",
            textShadow: "0px 15px 30px rgba(0,0,0,0.6), 0px 4px 10px rgba(0,0,0,0.4)"
          }}
        >
          {children}
        </h2>

        {/* Right Graphic (Top-Right Corner Frame) */}
        <svg
          className="absolute right-0 top-0"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63 65 V20 Q63 2 45 2 H0"
            stroke={isGreen ? "url(#right-grad-green)" : "url(#right-grad-white)"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="right-grad-green" x1="65" y1="0" x2="0" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#75DF1B" />
              <stop offset="1" stopColor="#2a3522" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="right-grad-white" x1="65" y1="0" x2="0" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#FBD300" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ─── Trendy Plants Section ────────────────────────────────────────────────────

interface TrendyPlant {
  image: string;
  imageAlt: string;
  label: string;
  name: string;
  description: string;
  price: string;
  imageLeft: boolean;
}

const trendyPlants: TrendyPlant[] = [
  {
    image: imgPlantainLilies,
    imageAlt: "Desk decoration plant",
    label: "For Your Desks Decorations",
    name: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    imageLeft: true,
  },
  {
    image: imgDeskPlant,
    imageAlt: "Aglaonema indoor plant",
    label: "For Your Desks Decorations",
    name: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
    imageLeft: false,
  },
];

function TrendyPlantRow({ plant }: { plant: TrendyPlant }) {
  return (
    <div className="backdrop-blur-[20px] bg-white/5 border-2 border-white/27 rounded-[32px] lg:rounded-[48px]">
      <div className={`flex flex-col lg:flex-row items-center gap-0 ${plant.imageLeft ? "" : "lg:flex-row-reverse"}`}>
        
        {/* Image - Scaled up massively to match Figma properties (732px) */}
        <div className="w-full lg:w-[38%] flex justify-center py-6 lg:py-0 relative">
          <img
            src={plant.image}
            alt={plant.imageAlt}
            // Height matches the 732px from Figma
            // Deep negative margins pull the image out of the top and bottom of the card
            className="h-[450px] lg:h-[732px] w-auto object-contain -mt-40 lg:-mt-[240px] -mb-16 lg:-mb-[180px] relative z-10"
          />
        </div>

        {/* Content (Unchanged) */}
        <div className={`w-full lg:w-[62%] px-8 lg:px-14 py-10 ${plant.imageLeft ? "" : ""}`}>
          <h3
            className="text-white text-2xl lg:text-[2.4rem] font-semibold mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              textShadow: "0px -9px 80px rgba(0,0,0,0.26), 0px -2.7px 24px rgba(0,0,0,0.17)",
            }}
          >
            {plant.name}
          </h3>
          <p
            className="text-white text-base lg:text-xl font-semibold mb-5 max-w-[732px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {plant.description}
          </p>
          <p
            className="text-white text-2xl lg:text-[2.4rem] font-semibold mb-7"
            style={{
              fontFamily: "Inter, sans-serif",
              textShadow: "0px 37px 80px rgba(0,0,0,0.62), 0px 8px 18px rgba(0,0,0,0.37)",
            }}
          >
            {plant.price}
          </p>
          <div className="flex items-center gap-5">
            <div className="border-2 border-white rounded-xl w-[217px] h-[64px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-white text-2xl font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                Explore
              </span>
            </div>
            <img src={imgBag} alt="" className="w-8 h-8 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendyPlantsSection() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeading>Our Trendy plants</SectionHeading>
        {/* CHANGED gap-10 to gap-24 lg:gap-32 and added mt-10 so the cards have room to breathe */}
        <div className="flex flex-col gap-24 lg:gap-32 mt-10">
          {trendyPlants.map((plant) => (
            <TrendyPlantRow key={plant.name + plant.price} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Top Selling Section ──────────────────────────────────────────────────────

interface TopPlant {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  price: string;
}

const topSellingPlants: TopPlant[] = [
  {
    image: imgAglaonema,
    imageAlt: "Aglaonema plant",
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
  },
  {
    image: imgPlantainLilies,
    imageAlt: "Plantain Lilies",
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs. 380/-",
  },
  {
    image: imgCactus,
    imageAlt: "Cactus plant",
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
  },
  {
    image: imgSwissCheese,
    imageAlt: "Swiss cheese plant",
    name: "Swiss cheese Plant",
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
  },
  {
    image: imgSansevieria,
    imageAlt: "Sansevieria plant",
    name: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
  },
  
  {
    image: imgAgave,
    imageAlt: "Agave plant",
    name: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
  },
];

function TopSellingCard({ plant }: { plant: TopPlant }) {
  const clipId = `bgblur_top_${plant.name.replace(/\s+/g, "_")}_clip_path`;
  const gradId = `paint0_linear_top_${plant.name.replace(/\s+/g, "_")}`;

  return (
    <div className="relative w-full h-[430px] flex flex-col items-center justify-end px-2 group">
      {/* wavy glass background — same shape as hero card */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 512 624"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <foreignObject x="-15" y="-15" width="100%" height="100%">
            <div
              style={{
                backdropFilter: "blur(7.5px)",
                clipPath: `url(#${clipId})`,
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <path
            data-figma-bg-blur-radius="15"
            d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"
            fill="white"
            fillOpacity="0.05"
            stroke={`url(#${gradId})`}
            className="group-hover:fill-white/10 transition-colors duration-300"
          />
          <defs>
            <clipPath id={clipId} transform="translate(15 15)">
              <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
            </clipPath>
            <linearGradient id={gradId} x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* text + image content, sits on top of the shape */}
      <div className="relative z-10 w-full flex flex-col p-6 pt-2">
        <img
          src={plant.image}
          alt={plant.imageAlt}
          className="w-full object-contain max-h-[520px] md:max-h-[540px] -mt-6 md:-mt-8 mb-1 group-hover:scale-105 transition-transform duration-500"
        />
        <p className="text-white/60 text-[0.85rem] font-normal mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
          Indoor Plant
        </p>
        <p className="text-white/75 text-xl md:text-[1.55rem] font-normal mb-3 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
          {plant.name}
        </p>
        <p className="text-white/60 text-sm font-normal mb-5 leading-relaxed line-clamp-2" style={{ fontFamily: "Inter, sans-serif" }}>
          {plant.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-white/75 text-lg md:text-xl font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
            {plant.price}
          </p>
          <div className="border-[1.5px] border-white/50 rounded-lg w-[48px] h-[48px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <img src={imgBag} alt="Add to cart" className="w-5 h-5 object-cover opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TopSellingSection() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeading>Our Top Selling Plants</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
          {topSellingPlants.map((plant) => (
            <TopSellingCard key={plant.name} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Customer Reviews ─────────────────────────────────────────────────────────

interface Review {
  name: string;
  avatar: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Shelly Russel",
    avatar: imgReviewerShelly,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    name: "Lula Rolfson",
    avatar: imgReviewerLula,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    name: "Carol Huels",
    avatar: imgReviewerCarol,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <GlassCard className="p-7 flex flex-col gap-5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          style={{ boxShadow: "0px 43px 135px rgba(0,0,0,0.29), 0px 12px 40px rgba(0,0,0,0.19)" }}
        />
        <div>
          <p
            className="text-white font-semibold text-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {review.name}
          </p>
          <StarRating count={5} />
        </div>
      </div>
      <p
        className="text-white/75 text-lg leading-relaxed font-normal"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {review.text}
      </p>
    </GlassCard>
  );
}

function ReviewsSection() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeading>Customer Review</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── O2 Section ───────────────────────────────────────────────────────────────

function O2Section() {
  const [page, setPage] = useState(1);

  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Title with green quotes */}
        <SectionHeading accentColor="green">Our Best o2</SectionHeading>

        {/* Main card */}
        <div className="mt-16 bg-[#2a3522]/30 backdrop-blur-md border border-white/20 rounded-[40px] lg:rounded-[60px] relative">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Plant image (breaking out of bounding box) */}
            <div className="w-full lg:w-[45%] flex justify-center items-end relative -mt-20 lg:-mt-24 lg:-ml-6">
              <img
                src={imgAglaonema}
                alt="O2 producing Aglaonema plant"
                className="h-72 md:h-[480px] lg:h-[560px] w-auto object-contain drop-shadow-2xl relative z-10"
              />
            </div>

            {/* Text content */}
            <div className="w-full lg:w-[55%] p-8 lg:py-14 lg:pr-16 flex flex-col justify-center">
              <h3
                className="text-white text-2xl md:text-3xl lg:text-[2.2rem] font-semibold mb-6 leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We Have Small And Best O2 Plants Collection's
              </h3>
              <p
                className="text-white/80 text-sm md:text-base font-normal mb-5 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Oxygen-producing plants, often referred to as "O2 plants," are those that release
                oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p
                className="text-white/80 text-sm md:text-base font-normal mb-10 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Many plants can help filter out pollutants and toxins from the air, such as
                formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and
                healthier to breathe.
              </p>

              {/* Explore button + nav */}
              <div className="flex flex-wrap items-center gap-8 lg:gap-16">
                <div className="border border-white/60 rounded-[14px] px-8 py-2.5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span
                    className="text-white text-sm md:text-base font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Explore
                  </span>
                </div>
                
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-label="Previous"
                    className="opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center w-6 h-6"
                  >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path d="M6 1L1 6L6 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <span
                    className="text-white font-medium text-sm tracking-widest"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {String(page).padStart(2, "0")}/04
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(4, p + 1))}
                    aria-label="Next"
                    className="opacity-100 hover:opacity-75 transition-opacity flex items-center justify-center w-6 h-6"
                  >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path d="M1 1L6 6L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator (extracted and centered below the card) */}
        <div className="flex items-center justify-center gap-2 mt-8 lg:mt-10">
          <div className="w-6 h-1.5 bg-white/90 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="px-6 md:px-16 pt-16 pb-12 bg-[#1b2316]">
      <div className="max-w-screen-xl mx-auto">
        {/* Asymmetrical layout matching Figma columns spacing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-10 items-start">
          
          {/* Column 1: Brand Info (Takes up 5/12 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={imgPlantLogo} 
                alt="FloraVision" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain" 
              />
              <span
                className="text-white font-black text-3xl md:text-4xl opacity-90 tracking-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                FloraVision.
              </span>
            </div>
            <p
              className="text-white font-normal text-sm md:text-base leading-relaxed max-w-[400px]"
              style={{ fontFamily: "Inter" }}
            >
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>
            {/* Social Links */}
            <div className="flex gap-5 mt-4">
              {["FB", "TW", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-white/80 font-bold text-lg hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Takes up 3/12 cols) */}
          <div className="md:col-span-3">
            <h3
              className="text-white font-bold text-lg mb-6 tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Quick Link's
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", url: "#" },
                { label: "Type's Of plant's", url: "#" },
                { label: "Contact", url: "#" },
                { label: "Privacy", url: "#" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-white font-medium text-sm md:text-base hover:text-white/70 transition-opacity underline decoration-white/60 underline-offset-4 inline-block"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter (Takes up 4/12 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h3
                className="text-white font-bold text-lg mb-6 tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                For Every Update.
              </h3>
              
              {/* Email input field container matches Figma layout */}
              <div className="relative flex items-center mb-8 max-w-[360px] h-[54px] border border-white/40 rounded-lg overflow-hidden bg-transparent">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="bg-transparent text-white/70 text-sm font-medium w-full pl-4 pr-32 outline-none placeholder-white/70"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  aria-label="Email for newsletter"
                />
                <button
                  className="absolute right-1 top-1 bottom-1 bg-white text-[#1b2316] font-bold text-[16px] px-5 rounded-[6px] tracking-wider hover:bg-white/90 transition-colors uppercase"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Copyright text at the bottom right anchor */}
            <p
              className="text-white/40 font-normal text-xs md:text-sm mt-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              FloraVision © all right reserve
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="relative min-h-screen bg-[#1b2316] overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Hero background image — covers top portion */}
      <div className="absolute inset-x-0 top-[-125px] h-[2200px] pointer-events-none select-none">
        <img
          src={imgBackground}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Gradient fade to dark at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#1b2316] to-transparent" />
      </div>

      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />
          <TrendyPlantsSection />
          <TopSellingSection />
          <ReviewsSection />
          <O2Section />
        </main>
        <Footer />
      </div>
    </div>
  );
}