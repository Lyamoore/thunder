import { useState } from "react";

import styles from "../../styles/blocks/_searchBar.module.scss";
import { weatherStore } from "@/Stores/WeatherStore";
import { observer } from "mobx-react-lite";

export const SearchBar = observer(() => {
  const { getWeatherAction, errorData } = weatherStore;
  const [city, setCity] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    getWeatherAction(city);
    setCity("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search for location..."
        className={styles.search__input}
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button
        type="submit"
        className={styles.search__button}
        onClick={handleClick}
      >
        <svg
          className={styles.search__button_svg}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
            fill="#0D0D0D"
          />
        </svg>
      </button>
      {errorData && (
        <div className={styles.search__error}>the city doesnt exist</div>
      )}
    </div>
  );
});
