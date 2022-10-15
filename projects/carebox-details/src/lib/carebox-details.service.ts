import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DailyData, UsDaily} from "./us-daily.intervace";

@Injectable({
  providedIn: 'root'
})
export class CareboxDetailsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getData(): Observable<DailyData[]> {
    return this.http.get<UsDaily>(`https://api.covidtracking.com/v2/us/daily.json`)
      .pipe(
        map(res => res.data)
      );
  }
}
