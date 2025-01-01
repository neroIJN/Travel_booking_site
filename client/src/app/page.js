import Image from "next/image";
import Hero from "../components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import BestHotels from "@/components/best-hotels/BestHotels";
import sea from "../assets/sea.jpg";
import hotel_image from "../assets/hotel.jpg";

export default function Home() {
  return (
    <>
    <Hero 
     image = {sea} 
     mainHeader = "Try to take adventure"
     secondaryHeader = "Find your perfect place to stay"
    />
    <PopularLocations/>
    <Hero
     image = {hotel_image} 
     mainHeader = "Get the best offer"
     secondaryHeader = "pick your place"/>
    <BestHotels />
    </>
    
  );
}
