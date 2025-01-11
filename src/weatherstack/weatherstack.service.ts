import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, Observable } from "rxjs";
import { AxiosResponse } from 'axios';

@Injectable ()
    export class weatherstackService {
        constructor(private readonly httpService: HttpService) {}
       
        get(url: string, options: any): Observable<AxiosResponse<any>> {
            return this.httpService.get(url, options);
          }

    }