import React from "react";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white p-8">
    <div className="container mx-auto max-w-4xl">
      <header className="align-items-center mb-12">
      <Image src="/about.svg" alt="logo" width={130} height={50} />
      </header>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold">BLOCKCHAIN SUPERHEROES™ STANDARD DESCRIPTION</h3>
        <p className="mt-4 text-sm leading-6">
          Blockchain Superheroes is a Trademark in the USA for BCSH. 
          Blockchain Superheroes is a fictional and educational figure...
        </p>
        {/* Add the rest of the content here */}
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold">BLOCKCHAIN SUPERHEROES™ LEGAL STATEMENT</h3>
        <p className="mt-4 text-sm leading-6">
          A Blockchain Superhero is a science project endeavor...
        </p>
        {/* Add the rest of the content here */}
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold">BLOCKCHAIN SUPERHEROES™ LAYMAN (SIMPLE) VERSION</h3>
        <p className="mt-4 text-sm leading-6">
          What is a Blockchain Superhero?
        </p>
        {/* Add the rest of the content here */}
      </section>
    </div>
  </div>
  );
};

export default PrivacyPolicy;
