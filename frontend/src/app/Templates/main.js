// "use client";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const bots = [
//     { name: "Qlink", link: "https://api.whatsapp.com/send/?phone=QLinkNumber&text=Hi", description: "An intelligent WhatsApp bot for booking appointments, searching products, and notifying friends with AI-powered calls." },
//     { name: "Axis Bank", link: "https://api.whatsapp.com/send/?phone=917036165000&text=Hi", description: "Access your Axis Bank account to check balances, open instant FDs, apply for loans, and more." },
//     { name: "Country Delight", link: "https://api.whatsapp.com/send/?phone=919107845105&text=Hi", description: "Order and pay for fresh Country Delight products directly through WhatsApp." },
//     { name: "Pristyn Care", link: "https://api.whatsapp.com/send/?phone=917428091471&text=Hi", description: "Easily book medical appointments with Pristyn Care for your health needs." },
//     { name: "Maggi Arabia", link: "https://api.whatsapp.com/send/?phone=971501889896&text=Hi", description: "Discover and learn delicious recipes from Maggi Arabia right on WhatsApp." },
//     { name: "Emaar Entertainment", link: "https://api.whatsapp.com/send/?phone=971800368378246&text=Hi", description: "Book tickets for shows and events at Emaar Entertainment directly through WhatsApp." },
// ];

// export function Carousel() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % bots.length);
//   const prevSlide = () => setIndex((prev) => (prev - 1 + bots.length) % bots.length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full max-w-lg mx-auto p-4 relative">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4"
//         >
//           <h2 className="text-2xl font-bold">{bots[index].name}</h2>
//           <p className="text-gray-600">{bots[index].description}</p>
//           <a
//             href={bots[index].link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             Chat Now
//           </a>
//         </motion.div>
//       </AnimatePresence>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         <ChevronRight size={24} />
//       </button>
//     </div>
//   );
// }