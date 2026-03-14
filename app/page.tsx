"use client"

import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";


import {motion} from "framer-motion"


export default function Home() {
  return (
 <main className="min-h-screen bg-background">
  <Hero/>
  <Skills/>
  <Projects/>
  <Contact/>
 </main>
  );
}
