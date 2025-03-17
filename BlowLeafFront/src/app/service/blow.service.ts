import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Garden } from '../model/garden'

export enum BlowDirection {
  right, left, up, down
  }

@Injectable({
  providedIn: 'root'
})
export class BlowService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/blow';
    }

  public ping() : Observable<string> {
    return this.http.get(this.usersUrl, {responseType: 'text'});
  }

  public blow(dir : BlowDirection, garden : Garden) : Observable<Garden>{
      let path = BlowDirection[dir];
      return this.http
             .post<Garden>(this.usersUrl + "/" + path, garden)
             .pipe( map((item: Garden) => new Garden(item) ));
    }
}
