import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {Sort} from '@angular/material/sort';

// export interface Films {
//   id:string,
//   title:string,
//   description:string,
//   release_date:string,
//   director: string,
//   producer: string,
//   rt_score: number
  
// }


@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films:any;
  searchText='';
  search=false;

  constructor(
    private httpClientService:HttpClientService
  ) {}

  ngOnInit() {
    this.httpClientService.getFilms().subscribe(
     response =>this.showList(response),
    );
  }
  
  showList(response)
  {
      this.films=response;
  }
  key: string = 'title'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  filterByTitle(searchval: string){
    this.search=true;
    this.searchText= searchval;
  }
}

