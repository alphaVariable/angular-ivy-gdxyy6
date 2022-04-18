import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import rxjs map
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApicallerService {
  peopleindex:number = 1;
  constructor(private _http: HttpClient) {}

  private readonly request = this._http
    .get('https://swapi.dev/api/people/'+this.peopleindex)
    .pipe(shareReplay());

  getData() {
    return this.request;
  }
}
