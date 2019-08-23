import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Films{
  constructor(
    public id:string,
    public title:string,
    public description:string,
    public release_date:number,
    public director: string,
    public producer: string,
    public rt_score: number
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  
  getFilms()
  {
    return this.httpClient.get<Films[]>('https://ghibliapi.herokuapp.com/films');
  }
}
