import { Module } from "@nestjs/common";
import { weatherstackController } from "./weatherstack.controller";
import { weatherstackService } from "./weatherstack.service";
import { HttpModule } from "@nestjs/axios";

@Module ({
    controllers: [weatherstackController], 
    providers: [weatherstackService],
    imports: [HttpModule],
})
export class weatherstackModule{}
