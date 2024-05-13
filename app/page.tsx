"use client";

import { AnimatePresence, backInOut, easeInOut, motion } from "framer-motion";
import About from "@/components/About";
import ArrowUp from "@/components/ArrowUp";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Schedule from "@/components/Schedule";
import SelectDevice from "@/components/SelectDevice";
import WhyUs from "@/components/WhyUs";
import { useEffect, useState } from "react";
import Loading from "./loading";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <NavBar />
      <motion.div className="md:px-20 px-4 lg:px-32 mt-20">
        <AnimatePresence mode="popLayout" >
          {!isLoading && (
            <motion.div className="slow grid gap-12" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 2, ease: easeInOut}}>
              <ArrowUp />
              <Banner />
              <SelectDevice />
              <Schedule />
              <About />
              <WhyUs />
              <ContactUs />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </main>
  );
}
