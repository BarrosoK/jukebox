import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(private http: HttpClient) {
  }

  syncOrder(startDate: string, onlyNew: boolean, disableOpportunities: boolean, endDate: string) {
    return this.http.post(`${environment.apiUrl}/sync/order`, {
      start_date: startDate,
      end_date: endDate,
      onlyNew,
      disableOpportunities
    });
  }

  syncProspects(prospects: object) {
    return this.http.post(`${environment.apiUrl}/sync/prospect`, {
      prospects,
    });
  }

  mail(dateStart, dateEnd) {

    return this.http.post(`${environment.apiUrl}/sync/mail`, {
      updateStart: dateStart,
      updateEnd: dateEnd
    }, {responseType: 'text'});
  }

  getLastestExecution() {
    return this.http.get(`${environment.apiUrl}/sync/order`);
  }
}
