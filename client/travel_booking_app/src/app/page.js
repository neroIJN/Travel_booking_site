import Image from "next/image";
import Hero from "../components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import BestHotels from "@/components/best-hotels/BestHotels";

export default function Home() {
  return (
    <>
    <Hero/>
    <PopularLocations/>
    <Hero/>
    <BestHotels />
    </>
    
  );
}
