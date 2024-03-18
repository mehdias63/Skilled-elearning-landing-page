import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="p-6 font-plus">
      <header className="flex justify-between">
        <div>
          <img src="/images/logo-dark.svg" />
        </div>
        <Button className="bg-dark-blue" />
      </header>
      <main className="flex flex-col md:flex-row">
        <div>
          <h2>Maximize skill,minimize budget</h2>
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Button className="btn" />
        </div>
        <div className="bg-[url(/images/image-hero-mobile.png)] w-full h-[24rem] md:h-[50rem] bg-no-repeat bg-cover md:bg-[url(/images/image-hero-tablet.png)] lg:bg-[url(/images/image-hero-desktop.png)]"></div>
      </main>
      <article>
        <div className="btn w-[21.4375rem] h-[7.5rem] text-2xl leading-8 font-extrabold text-white p-6 rounded-lg">
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
    </div>
  );
}

export default App;
