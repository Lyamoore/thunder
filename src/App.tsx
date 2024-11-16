import { observer } from "mobx-react-lite";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Routing } from "./Routing/Routing";
import { useEffect } from "react";
import { weatherStore } from "./Stores/WeatherStore";

export const App = observer(() => {
  const { getWeatherAction } = weatherStore;

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherAction("Moscow");
    };

    fetchWeather();
  }, [getWeatherAction]);

  return (
    <>
      <Header />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
});
