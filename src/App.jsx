import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="gradient2 font-plus min-h-screen max-w-[90rem] mx-auto">
      <header className="flex justify-between items-center p-6">
        <div className="lg:pl-20">
          <img src="/images/logo-dark.svg" />
        </div>
        <Button className="bg-dark-blue md:mr-[2rem] lg:mr-[3.5rem] xl:mr-[16rem] hover:bg-gray" />
      </header>
      <main className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-24 lg:mt-28 pl-6 lg:pl-24">
        <div>
          <h2 className="text-[2.5rem] lg:text-[3.5rem] font-extrabold text-dark-blue">
            Maximize skill,minimize budget
          </h2>
          <p className="text-gray text-base lg:text-lg leading-[1.625rem] lg:leading-7 my-6">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Button className="gradient1 mt-4" />
        </div>
        <div className="bg-[url(/images/image-hero-mobile.png)] w-full h-[30rem] sm:h-[35rem] md:h-[50rem] bg-no-repeat bg-cover md:bg-[url(/images/image-hero-tablet.png)] lg:bg-[url(/images/image-hero-desktop.png)] md:mt-[-15rem] lg:mt-[-20rem]"></div>
      </main>
      <article className="grid md:grid-cols-2 lg:grid-cols-3 p-6 lg:p-24">
        <div className="gradient1 text-2xl leading-8 font-extrabold text-white px-6 rounded-lg lg:h-[20.125rem] m-6 lg:text-[2rem] lg:leading-10 py-12">
          Check out our most popular courses!
        </div>
        <Card
          icon="/images/icon-animation.svg"
          title="Animation"
          text="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        />
        <Card
          icon="/images/icon-design.svg"
          title="Design"
          text="Create beautiful, usable interfaces to help shape the future of how the web looks."
        />
        <Card
          icon="/images/icon-photography.svg"
          title="Photography"
          text="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        />
        <Card
          icon="/images/icon-crypto.svg"
          title="Crypto"
          text="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        />
        <Card
          icon="/images/icon-business.svg"
          title="Business"
          text="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        />
      </article>
      <footer className="bg-dark-blue flex justify-between items-center p-6 lg:px-40">
        <div>
          <img src="/images/logo-light.svg" />
        </div>
        <Button className="gradient3" />
      </footer>
    </div>
  );
}

export default App;
