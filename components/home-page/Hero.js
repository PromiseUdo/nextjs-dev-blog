import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/prom.jpg"
          alt="An image showing Promise"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Promise</h1>
      <p>
        I blog about web development - especially frontend technologies and
        frameworks like JavaScript or React
      </p>
    </section>
  );
};

export default Hero;
