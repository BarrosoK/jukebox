import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) {
  }

  search(name: string) {
    return this.http.get(`${environment.apiUrl}/api/youtube/search`, {
      params: {
        q: name
      }
    }).pipe(
      map((q: any) => {
        q.name = name;
        return q;
      })
    );
  }

}
