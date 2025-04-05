import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
export default function BentoGridDemo() {
  return (
    <>
    <h3 className="m-[30px] pl-[50px] text-gray-950" style={{color:"gray"}}>ChatBots Templates</h3>
    <BentoGrid className="max-w-7xl mx-auto mt-[40px] mb-[40px]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </>
  );
}

const items = [
  {
    title: "Deciml",
    description: "Turn your spare change into smart investments effortlessly with Deciml! Our micro-investment platform helps you grow your wealth by rounding up your digital transactions and investing the spare change into mutual funds automatically. Got questions? Our FAQ bot is here to assist! Whether you need information about the investment process, the Deciml platform, or managing your account, we've got you covered. Registered users can also create support tickets, and our experts will connect with them for personalized assistance.",
    header: "/assets/Decimi.png",
  },
  {
    title: "The Digital Revolution",
    description: "Craving a delicious bowl of Maggi? Whether you're a foodie or love experimenting with new recipes, this bot is your perfect kitchen companion! Discover a variety of Maggi recipes based on ingredients, themes, and even cooking time so you can whip up a tasty meal in no time. From classic flavors to unique twists, there’s something for everyone. Explore now and take your Maggi game to the next level!",
    header:"/assets/maggie.png",
  },
  {
    title: "Emaar Entertainment",
    description: "Experience thrilling adventures and unforgettable moments with Emaar’s world-class attractions! Now, booking your tickets is easier than ever simply select your favorite attraction, pick a date, add to cart, complete the payment, and get ready for an exhilarating ride. No queues, no hassle just a seamless way to access extraordinary experiences with a few clicks. Explore the bot now and start your next adventure!",
    header: "/assets/Emaar.png",
  },
  {
    title: "Pristyn Care",
    description:
      "Get expert medical assistance at your fingertips! Pristyn Care makes it easier than ever to connect with top doctors and specialists for consultations, treatments, and health inquiries all through a simple and interactive chat.No long waiting times, no hassle just instant access to trusted medical experts who can guide you every step of the way. Experience a smarter, faster, and more convenient way to manage your healthcare. Chat now and take the first step towards better health!",
    header: "/assets/pristyn.png",
  },
  {
    title: "Country Delight",
    description: "Enjoy the most convenient and user-friendly way to order fresh dairy products through WhatsApp! With the latest WhatsApp features (Flows), you can seamlessly browse, select, and place your order all within a chat. Get your favorite dairy essentials delivered straight to your doorstep at your preferred time and location.No apps, no hassle just a smooth and intuitive ordering experience. Check out the bot now and enjoy fresh, hassle-free deliveries!",
    header: "/assets/CountryDelight.png",
  },
  
];
