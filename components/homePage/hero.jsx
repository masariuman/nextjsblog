import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/2.jpg"
          alt="gambar sendiri"
          width={300}
          height={300}
        />
      </div>
      <h1>Hai, Saya Arif</h1>
      <p>
        Hello, ini hanyalah sebuah percobaan dari nextjs, semoga berhaasil !!
      </p>
    </section>
  );
}

export default Hero;
