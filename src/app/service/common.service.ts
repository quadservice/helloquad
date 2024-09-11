import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly _getIPUrl = new URL('https://api.ipify.org?format=json');
  constructor(
    private http: HttpClient
  ) { 
  }
  GetMyIPAddress(): Observable<any> {
    const url = this._getIPUrl.toString();
    return this.http.get(url);
  }
}
