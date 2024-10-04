"use client";
import React, { useEffect, useState } from "react";
// import { testimonials } from "@/data";
// import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
interface CompanyProps {
  _id: number;
  name: string;
  img: string;
}

const Clients = ({ company }: { company: CompanyProps[] }) => {
  return (
    <section id="testimonials" className="py-20">
      {/* <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1> */}

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {company.map((compi) => (
            <React.Fragment key={compi._id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={urlFor(compi.img).url()}
                  alt={compi.name}
                  className="md:w-10 w-5"
                  width={20}
                  height={20}
                />
                <h2 className="text-2xl font-semibold">{compi?.name}</h2>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
