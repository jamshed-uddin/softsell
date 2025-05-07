import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-16 ">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Reviews />
    </div>
  );
}
