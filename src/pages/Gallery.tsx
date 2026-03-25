import bedroom1 from "../assets/bedroom1.webp";
import bedroom2 from "../assets/bedroom2.webp";
import bedroom3 from "../assets/bedroom3.webp";

import living1 from "../assets/living1.webp";
import living2 from "../assets/living2.webp";
import living3 from "../assets/living3.webp";

import bathroom1 from "../assets/bathroom1.webp";
import bathroom2 from "../assets/bathroom2.webp";
import bathroom3 from "../assets/bathroom3.webp";

import kitchen1 from "../assets/kitchen1.webp";
import kitchen2 from "../assets/kitchen2.webp";
import kitchen3 from "../assets/kitchen3.webp";

import landscape1 from "../assets/landscape1.webp";
import landscape2 from "../assets/landscape2.webp";
import landscape3 from "../assets/landscape3.webp";

const categories = [
  {
    title: "Bedroom",
    images: [bedroom1, bedroom2, bedroom3],
  },
  {
    title: "Living Room",
    images: [living1, living2, living3],
  },
  {
    title: "Bathroom",
    images: [bathroom1, bathroom2, bathroom3],
  },
  {
    title: "Kitchen",
    images: [kitchen1, kitchen2, kitchen3],
  },
  {
    title: "Landscaping",
    images: [landscape1, landscape2, landscape3],
  },
];

const Gallery = () => {
  return (
    <div className="page-section">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
            GALLERY
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our thoughtfully designed interiors and surroundings.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.title} className="mb-16 last:mb-0">

            {/* Category Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 tracking-wide text-center">
              {category.title}
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {category.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={`${category.title} ${idx + 1}`}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {category.title}
                    </span>
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;