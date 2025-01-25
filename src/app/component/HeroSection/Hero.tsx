import Image from "next/image";
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className="relative max-w-[1440px] h-[100vh] bg-black mx-auto">
      <div className={`w-full h-full`}>
        <Image
          src="/Hero/Hero.jpeg"
          alt="Hero Image"
          width={300}
          height={300}
          className={`${styles.Image} w-full h-full`}
        />
      </div>

      <div className={`${styles.heroContent} absolute top-[53px] right-[60px]`}>
        <div className="flex flex-col gap-6 pt-8 pl-[40px]">
          <span className={styles.arrival}>New Arrival</span>
          <h3 className={styles.discover}>Discover Our New Collection</h3>
          <p className={styles.discoverP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className={styles.btn}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
