import { IWeatherData, IWeatherStore } from "@/Models/WeatherData";
import { weatherApi } from "@/Transport/WeatherApi";
import { makeAutoObservable, runInAction } from "mobx";

class WeatherStore implements IWeatherStore {
  weatherData: IWeatherData | null = null;
  errorData = false;

  constructor() {
    makeAutoObservable(this);
  }

  getWeatherAction = async (city: string) => {
    try {
      const data = await weatherApi.getWeatherInfo(city);
      console.log(data);

      runInAction(() => {
        this.errorData = false;
        this.weatherData = data;
      });
    } catch (error) {
      console.error("Oops! Error fetching weather data:", error);
      this.errorData = true;

      setTimeout(() => {
        this.errorData = false;
      }, 4000);
    }
  };
}

export const weatherStore = new WeatherStore();
