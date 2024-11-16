import { SearchBar } from "./SearchBar";
import { Weather } from "./Weather";

import styles from "../../styles/blocks/_hero.module.scss";
import utils from "../../styles/style.module.scss";

export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.hero__container} ${utils.container}`}>
          <div className={styles.hero__info}>
            <h2 className={styles.hero__info_name}>Weather and Forecast</h2>
            <h1 className={styles.hero__info_title}>
              Daily Weather Forecast Update News
            </h1>
            <p className={styles.hero__info_description}>
              Get the latest weather forecast for today with up-to-date
              <br />
              information on temperature, precipitation, and more.
            </p>
            <SearchBar />
          </div>
          <Weather />
        </div>
      </section>
    </>
  );
};
