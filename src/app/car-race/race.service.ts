import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class RaceService {
  constructor(private http:HttpClient) {
    console.log(this.http);
  }
  getRaces():Observable<any> {
    return this.http.get('assets/json/races.json', {responseType:'json'});
  }

}
