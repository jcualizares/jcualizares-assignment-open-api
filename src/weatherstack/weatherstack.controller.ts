import { Controller, Get, HttpException, Query } from "@nestjs/common";
import { weatherstackService } from "./weatherstack.service";
import { firstValueFrom } from "rxjs";

@Controller ('weatherstack')
    export class weatherstackController {
        constructor(private readonly  weatherstackService: weatherstackService){}

        @Get()
  async getWeather(@Query('query') location: string): Promise<any> {
    const apiKey = 'a709db297e2eafe04b63e6958fec9a76'; // Replace with your API key
    const apiUrl = 'https://api.weatherstack.com/current';

    try {
      if (!location) {
        throw new HttpException('Location query is required.', 400);
      }

      // Add "Philippines" to the query dynamically
      const response = await firstValueFrom(
        this.weatherstackService.get(apiUrl, {
          params: {
            access_key: apiKey,
            query: `${location}, Philippines`, // Ensure the query is for Philippine locations
          },
        }),
      );

        const data = response.data;

        // Handle API errors
        if (!data.success && data.error) {
            throw new HttpException(data.error.info, data.error.code);
        }

        return data; // Return the weather data to the client
        } catch (error) {
        // Handle network or server errors
        throw new HttpException(
            error.response?.data || 'Failed to fetch weather data',
            error.response?.status || 500,
      );
    }
  }
  
}
