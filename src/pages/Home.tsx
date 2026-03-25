import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Car, Shield, TreePine, Wrench, Clock, Award, School, Hospital, ShoppingBag, Train, Landmark, Plane, Map, Home as HomeIcon, BedDouble, Maximize } from "lucide-react";
import heroImage from "@/assets/homecover.webp";
import ksrtcImg from "../assets/ksrtc.webp";
import schoolImg from "../assets/bharathmatha.webp";
import mallImg from "../assets/lulu.webp";
import railwayImg from "../assets/railway.webp";
import collegeImg from "../assets/victoria.webp";
import hospitalImg from "../assets/hospital.webp";

const amenities = [
  { icon: Map, label: "1.88 Acres Land" },
  { icon: HomeIcon, label: "22 Villas" },
  { icon: BedDouble, label: "1, 2, 3, 4 BHK" },
  { icon: Maximize, label: "1000 to 3000 Sqft" },
  { icon: TreePine, label: "Green Spaces" },
  { icon: Shield, label: "24/7 Security" },
];

const values = [
  { icon: Wrench, title: "Renovation Support", description: "Complete interior renovation support tailored to your taste and lifestyle." },
  { icon: Clock, title: "Timely Completion", description: "We deliver every project on schedule without compromising on quality." },
  { icon: Award, title: "Quality Construction", description: "Built with premium materials and meticulous attention to every detail." },
];

const facilities = [
  { icon: School, title: "BharathMatha School", distance: "3.0 KM", image: schoolImg, caption: "Top-tier education for your children just a short drive away." },
  { icon: Hospital, title: "Medical College", distance: "6.7 KM", image: hospitalImg, caption: "Advanced healthcare and medical emergencies reliably handled." },
  { icon: ShoppingBag, title: "Lulu Mall", distance: "9.4 KM", image: mallImg, caption: "World-class shopping, dining, and entertainment hub." },
  { icon: Train, title: "Railway Station Olavakkode", distance: "6.9 KM", image: railwayImg, caption: "Seamless connectivity for your long-distance travel needs." },
  { icon: Landmark, title: "Victoria College", distance: "4.9 KM", image: collegeImg, caption: "Historic institution offering excellent higher education." },
  { icon: Car, title: "KSRTC Stand Palakkad", distance: "5.8 KM", image: ksrtcImg, caption: "State-wide transport networks available for quick commute." },
];

const Home = () => {
  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (barsRef.current) {
      observer.observe(barsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Luxury villa by Dreamlands Properties"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-wide mb-6">
            Where Luxury Meets
            <span className="block text-green-300 mt-2">
              Perfect Living
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafted with precision and designed for comfort, Dreamlands Properties
            brings you premium villas and land developments that redefine modern living.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 md:px-10 md:py-4 text-sm md:text-lg font-medium rounded-full shadow-lg transition duration-300 hover:scale-105"
            >
              Explore Your Future Home
            </Link>
          </div>

        </div>
      </section>

      {/* About Company Snippet */}
      <section className="page-section bg-secondary/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              WELCOME TO DREAMLAND PROPERTIES
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Dreamlands Properties, we believe that a home is more than just a place to live—it's the foundation of your future. Specializing in premium villas, land development, and custom architectural solutions, we have built our legacy on trust, quality craftsmanship, and uncompromising standards. From finding the perfect layout to delivering your finished sanctuary, we are with you every step of the way to ensure a seamlessly luxurious living experience.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Marquee */}
      <section className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              KEY AMENITIES
          </h2>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden flex bg-transparent py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
            {/* Double the array for seamless infinite scroll loop */}
            {[...amenities, ...amenities].map((item, index) => (
              <div key={index} className="flex w-40 md:w-56 mx-4 md:mx-6 flex-col items-center justify-center gap-5 group cursor-default">
                <div className="p-5 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                  <item.icon size={44} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-semibold text-center text-foreground transition-colors duration-300 group-hover:text-green-600 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values as Progress Bars */}
      <section className="relative page-section py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Luxury living values"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/85" />
        
        <div className="relative z-10 section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
                WHY CHOOSE US
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Dreamlands Properties is built on a solid foundation of trust, uncompromising quality, and timely delivery. We don't just build homes; we craft luxurious lifestyles tailored exactly to your vision.
              </p>
            </div>

            {/* Right Content: Progress Bars */}
            <div className="flex flex-col gap-8" ref={barsRef}>
              
              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold tracking-wide text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Quality Construction</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">100%</span>
                </div>
                <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-emerald-400 h-2 rounded-full transform origin-left transition-transform duration-1000 ease-out" 
                    style={{ transform: barsVisible ? 'scaleX(1)' : 'scaleX(0)' }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold tracking-wide text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Timely Completion</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">100%</span>
                </div>
                <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-emerald-400 h-2 rounded-full transform origin-left transition-transform duration-1000 ease-out delay-150" 
                    style={{ transform: barsVisible ? 'scaleX(1)' : 'scaleX(0)' }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold tracking-wide text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Client Satisfaction</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">98%</span>
                </div>
                <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-emerald-400 h-2 rounded-full transform origin-left transition-transform duration-1000 ease-out delay-300" 
                    style={{ transform: barsVisible ? 'scaleX(0.98)' : 'scaleX(0)' }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold tracking-wide text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Renovation Support</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">95%</span>
                </div>
                <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-emerald-400 h-2 rounded-full transform origin-left transition-transform duration-1000 ease-out delay-500" 
                    style={{ transform: barsVisible ? 'scaleX(0.95)' : 'scaleX(0)' }}
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Nearby Facilities */}
      <section className="page-section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            NEARBY FACILITIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item) => (
              <div key={item.title} className="card-elevated p-0 overflow-hidden group cursor-pointer border border-border/50 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <item.icon size={14} />
                    {item.distance}
                  </div>
                </div>
                <div className="p-5 text-left border-t border-border/50 bg-card z-10 relative">
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-green-600 transition-colors">{item.title}</h4>
                  <span className="block text-sm text-muted-foreground mt-1.5">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
