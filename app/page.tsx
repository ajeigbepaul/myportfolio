import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative bg-black-100 flex-col items-center justify-between sm:px-10 px-5 mx-auto overflow-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[

        ]}/>
       <Hero/>
       <Grid/>
      </div>
    </main>
  );
}
