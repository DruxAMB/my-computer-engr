import About from "@/components/About";
import ArrowUp from "@/components/ArrowUp";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Schedule from "@/components/Schedule";
import SelectDevice from "@/components/SelectDevice";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="grid gap-12">
      <ArrowUp />
      <Banner />
      <SelectDevice />
      <Schedule />
      <About />
      <WhyUs />
      <ContactUs />
    </main>
  );
}
