import Hero from "@/components/home/Hero";
import AboutCompany from "@/components/home/AboutCompany";
import OurServices from "@/components/home/OurServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CalltoAction from "@/components/home/CalltoAction";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <OurServices />
      <WhyChooseUs />
      <CalltoAction />
    </>
  );
}