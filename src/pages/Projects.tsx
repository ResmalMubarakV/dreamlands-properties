import { Download, ShieldCheck, Sun, Droplets, Landmark, Cctv, TreePine, MapPin } from "lucide-react";
import plotImg from "../assets/plot.png";

const Projects = () => {
  return (
    <div className="page-section bg-background">
      <div className="section-container max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
            OUR PROJECTS
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest residential developments designed for modern living.
          </p>
        </div>

        {/* Download Brochure */}
        <div className="flex justify-center mb-16">
  <a
    href="/brochure.pdf"
    download
    className="
      relative overflow-hidden
      flex items-center gap-2
      px-6 py-3 rounded-full
      text-white font-medium
      bg-gradient-to-r from-green-600 via-green-500 to-gray-400
      shadow-lg
      transition duration-300
      hover:scale-105
      group
    "
  >
    {/* Black Gradient Hover Layer */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-black via-gray-900 to-black
        opacity-0 group-hover:opacity-100
        transition duration-300
      "
    ></span>

    {/* Content */}
    <span className="relative z-10 flex items-center gap-2">
      <Download size={20} />
      Download Brochure
    </span>
  </a>
</div>

        {/* Primary Location Hero Image */}
        <div className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl mb-16 group border border-border/50 bg-white dark:bg-card">
          <div className="absolute top-6 left-6 z-10 bg-black/70 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-xl flex items-center gap-2">
            <MapPin size={16} className="text-primary" /> Location Overview
          </div>
          <img
            src={plotImg}
            alt="Garden Green Location"
            className="w-full h-auto max-h-[500px] object-contain transform transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* The Narrative Content */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <MapPin size={18} />
            <span>Alampallam, Palakkad</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-10 leading-tight">
            YOUR LAND, <span className="text-primary">YOUR VILLA!</span>
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground space-y-8 leading-relaxed">
            <p>
              <strong className="text-foreground font-semibold">Imagine a place of your own.</strong> A house that is truly yours, with its doors and windows wide open to welcome you in each day.
            </p>
            <p>
              We at Dreamland Properties believe the best things in life come in small packages. Dreamland Properties Garden Green, comprising of just <strong className="text-foreground font-semibold">22 exclusive villas</strong>, is all about living in open spaces with an open mind, where quality of life meets quality of living.
            </p>
            <p>
              Making the best use of lands with abundant sunlight and fresh air, we assure you a peaceful life in a secure development at Alampallam, Palakkad.
            </p>
            
            <div className="mt-14 p-8 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/40 dark:to-emerald-900/20 rounded-3xl border border-primary/20 shadow-lg relative overflow-hidden text-left transform transition hover:scale-[1.02] duration-500">
              <div className="absolute -right-6 -top-6 text-primary/10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
              <p className="text-foreground font-bold text-xl md:text-2xl m-0 flex items-center gap-5 relative z-10">
                <span className="text-5xl shrink-0">🌱</span> 
                <span>The value of the land increases with the resources up to <span className="text-primary">25% yearly</span> itself.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Exclusive Facilities / Features */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground inline-block relative">
              Exclusive Features
              <div className="absolute -bottom-4 left-1/4 right-1/4 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <ShieldCheck size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-foreground text-xl mb-3">Security Cabin</h4>
              <p className="text-muted-foreground leading-relaxed">24 x 7 manned security surveillances ensuring complete peace of mind.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Sun size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-foreground text-xl mb-3">Solar Street Lights</h4>
              <p className="text-muted-foreground leading-relaxed">Fully covered walkways, driveways & streets illuminated cleanly.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Droplets size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-foreground text-xl mb-3">Proper Drainage</h4>
              <p className="text-muted-foreground leading-relaxed">Regular maintaining drainage system assures a healthy living space.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Landmark size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-foreground text-xl mb-3">Loan Facility</h4>
              <p className="text-muted-foreground leading-relaxed">Upto 95% bank loans easily available for both plots and villas.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Cctv size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-foreground text-xl mb-3">Gated Community</h4>
              <p className="text-muted-foreground leading-relaxed">Strictly monitored entrances and CCTVs keep a thorough check.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <TreePine size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-foreground text-xl mb-3">Common Park</h4>
              <p className="text-muted-foreground leading-relaxed">Natural green areas that help to improve physical and mental health.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;