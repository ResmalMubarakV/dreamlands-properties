import anilSign from "../assets/anilchacko.png";
import ratheeshSign from "../assets/ratheeshrajan.png";

const team = [
  {
    name: "Anil Chacko",
    role: "Managing Director",
    image: anilSign,
    description:
      "With strong leadership and vision, Anil Chacko drives Dreamlands Properties towards delivering high-quality residential developments focused on trust, value, and modern living.",
  },
  {
    name: "Ratheesh Rajan",
    role: "Senior Manager",
    image: ratheeshSign,
    description:
      "Ratheesh Rajan ensures smooth execution of projects and maintains high standards in customer experience, quality control, and timely delivery.",
  },
];

const About = () => {
  return (
    <div className="page-section">
      <div className="section-container max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
            ABOUT US
          </h1>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Dreamlands Properties is a trusted name in real estate, committed to delivering
            premium residential projects with modern amenities, superior construction quality,
            and timely completion. We focus on creating spaces that bring comfort, value,
            and long-term satisfaction.
          </p>
        </div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">

          <div className="bg-white p-8 rounded-2xl shadow-md border text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading real estate brand known for innovation, quality, and trust,
              creating living spaces that enhance lifestyles and build lasting value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver thoughtfully designed homes with superior craftsmanship,
              ensuring transparency, timely delivery, and customer satisfaction at every step.
            </p>
          </div>

        </div>

        {/* LEADERSHIP */}
<h2 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-14 tracking-wide">
  OUR LEADERSHIP
</h2>

<div className="flex flex-col gap-12 max-w-3xl mx-auto mb-24">

  {team.map((member) => (
    <div
      key={member.name}
      className="relative rounded-2xl p-8 text-center overflow-hidden transition duration-300 hover:-translate-y-1"
    >

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-green-100/30 to-transparent blur-2xl opacity-70"></div>

      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-md border border-green-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">

        {/* Signature */}
        <div className="mb-6 flex justify-center">
          <img
            src={member.image}
            alt={member.name}
            className="h-28 md:h-32 lg:h-36 object-contain"
          />
        </div>

        {/* Name */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-primary font-medium mb-4">
          {member.role}
        </p>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {member.description}
        </p>

      </div>

    </div>
  ))}

</div>

        {/* WHAT WE STAND FOR */}
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            WHAT WE STAND FOR
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              {
                title: "Trust & Transparency",
                desc: "Clear processes, honest communication, and zero hidden surprises in every step.",
              },
              {
                title: "Quality First Approach",
                desc: "We never compromise on materials, design, or execution standards.",
              },
              {
                title: "Timely Delivery",
                desc: "Every project is completed as promised, without delays or shortcuts.",
              },
              {
                title: "Customer Commitment",
                desc: "We focus on long-term relationships, not just one-time transactions.",
              },
              {
                title: "Thoughtful Design",
                desc: "Every space is planned to enhance comfort, usability, and lifestyle.",
              },
              {
                title: "Value Creation",
                desc: "We build properties that grow in value and stand strong over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition text-center"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* STATS */}
<div className="max-w-5xl mx-auto py-16">

  <div className="grid grid-cols-2 md:grid-cols-4 text-center">

    {[
      { number: "10+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "500+", label: "Happy Clients" },
      { number: "100%", label: "Client Satisfaction" },
    ].map((stat, index) => (
      
      <div
        key={stat.label}
        className={`flex flex-col items-center justify-center px-6 py-4
        ${index !== 3 ? "md:border-r border-gray-300" : ""}
        ${index !== 1 ? "border-r border-gray-200 md:border-none" : ""}
        `}
      >
        {/* Number */}
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {stat.number}
        </h3>

        {/* Label */}
        <p className="text-sm md:text-base text-muted-foreground">
          {stat.label}
        </p>
      </div>

    ))}

  </div>

</div>

      </div>
    </div>
  );
};

export default About;