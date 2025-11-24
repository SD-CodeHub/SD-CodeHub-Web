import { useState } from "react";
import whatsappLogo from "../assets/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.webp";

function PopupAd() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-[80%] mx-auto mt-2">
      {/* Close Button */}
      <div
        onClick={() => setVisible(false)}
        className="absolute -top-1 -right-0 bg-white text-gray-500 hover:text-gray-700 rounded-full w-6 h-6 flex items-center justify-center shadow-md z-10 border cursor-pointer"
      >
        ✖
      </div>

      {/* Popup Card */}
      <a
        href="https://wa.me/919930994315?text=Hello!%20I%20want%20to%20know%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-2xl transition-all cursor-pointer"
      >
        <span className="font-medium text-xs sm:text-base">
          Reach our team directly on WhatsApp!
        </span>

        {/* WhatsApp Logo Box */}
        <div
          className="
            bg-white rounded-full flex items-center justify-center
            w-[45px] h-[40px]        /* Mobile size */
            sm:w-[68px] sm:h-[52px] /* Desktop size */
          "
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="
              w-[38px] h-[34px]         /* Mobile size */
              sm:w-[60px] sm:h-[48px]  /* Desktop size */
              object-contain
            "
          />
        </div>
      </a>
    </div>
  );
}

export default PopupAd;
