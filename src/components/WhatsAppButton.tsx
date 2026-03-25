const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-6 h-6 md:w-7 md:h-7"
  >
    <path
      fill="white"
      d="M16.04 2C8.82 2 3 7.82 3 15.04c0 2.65.7 5.14 2.04 7.33L3 30l7.8-2.02c2.1 1.15 4.48 1.76 6.94 1.76 7.22 0 13.04-5.82 13.04-13.04S23.26 2 16.04 2zm0 23.84c-2.24 0-4.43-.6-6.34-1.74l-.45-.27-4.63 1.2 1.24-4.5-.29-.46a10.8 10.8 0 01-1.66-5.73c0-6 4.88-10.88 10.88-10.88S26.92 9.34 26.92 15.34s-4.88 10.5-10.88 10.5zm5.94-7.86c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.74.16-.22.32-.86 1.04-1.06 1.26-.2.22-.4.24-.72.08-.32-.16-1.34-.5-2.54-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.32.32-.54.1-.22.06-.42-.02-.58-.08-.16-.74-1.78-1.02-2.44-.26-.62-.52-.54-.74-.56-.2-.02-.42-.02-.64-.02-.22 0-.58.08-.88.42-.3.34-1.14 1.12-1.14 2.74 0 1.62 1.16 3.18 1.32 3.4.16.22 2.28 3.48 5.54 4.88.78.34 1.38.54 1.86.7.78.24 1.48.2 2.04.12.62-.1 1.9-.78 2.16-1.54.26-.76.26-1.4.18-1.54-.08-.14-.3-.22-.62-.38z"
    />
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = "916282844739";

  const message =
    "Hello%2C%20I%E2%80%99m%20interested%20in%20your%20projects.%20Could%20you%20please%20share%20more%20details%20about%20available%20plots%2Fvillas%3F";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-24 right-5 md:right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition duration-300">
        <WhatsAppIcon />
      </div>
    </a>
  );
};

export default WhatsAppButton;