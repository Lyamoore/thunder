import { weatherStore } from "@/Stores/WeatherStore";
import styles from "../../styles/blocks/_weather.module.scss";
import { observer } from "mobx-react-lite";
import { dateFormatter } from "@/Services/DateFormatter";

export const Weather = observer(() => {
  const { weatherData } = weatherStore;

  if (!weatherData || !weatherData.location || !weatherData.current) {
    return <p>Loading...</p>;
  }

  const {
    location: { name, localtime },
    current: {
      temp_c,
      wind_kph,
      humidity,
      condition: { text, icon },
    },
  } = weatherData;

  const date = dateFormatter(localtime);

  return (
    <>
      <article className={styles.weather}>
        <div className={styles.weather__block}>
          <h2 className={styles.weather__block_city}>{name}</h2>
          <img src={`${icon}`} alt="weather icon" />
        </div>
        <p className={styles.weather__text}>Today, {date}</p>
        <h3 className={styles.weather__temperature}>{temp_c}</h3>
        <p className={styles.weather__condition}>{text}</p>
        <div className={`${styles.weather__dual} ${styles.weather__text}`}>
          <span className={styles.weather__dual_left}>{wind_kph} km/h</span>
          <span className={styles.weather__dual_right}>wind</span>
        </div>
        <div className={`${styles.weather__dual} ${styles.weather__text}`}>
          <span className={styles.weather__dual_left}>Hum</span>
          <span className={styles.weather__dual_right}>{humidity}%</span>
        </div>
      </article>
    </>
  );
});
