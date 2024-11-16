export interface IWeatherStore {
  weatherData: IWeatherData | null;
  errorData: boolean;
  getWeatherAction(city: string): Promise<void>;
}

export interface IWeatherData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
