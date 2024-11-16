import axios from "axios";
import { IWeatherFetcher } from "@/Models/Api";
import { IWeatherData } from "@/Models/WeatherData";

class WeatherApi implements IWeatherFetcher {
  private static instance: WeatherApi;

  private constructor() {}

  public static getInstance(): WeatherApi {
    if (!WeatherApi.instance) {
      WeatherApi.instance = new WeatherApi();
    }
    return WeatherApi.instance;
  }

  async getWeatherInfo(city: string = "Moscow"): Promise<IWeatherData> {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=ee0def27a9894992992181650241710&q=${city}&aqi=no`,
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    const currenData = response.data;

    return currenData;
  }
}

export const weatherApi = WeatherApi.getInstance();
