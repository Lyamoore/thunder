import { IWeatherData } from "./WeatherData";

export interface IWeatherFetcher {
  getWeatherInfo(city: string): Promise<IWeatherData>;
}
