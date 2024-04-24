// api.service.ts 
 
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Bron } from './models/Bron'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
  private apiUrl = 'http://127.0.0.1:8000'; 
 
  constructor(private http: HttpClient) {} 
 
  sendData(data: any): Observable<any> { 
    return this.http.post<any>(`${this.apiUrl}/bron/`, data); 
  } 
  getBron(id: number): Observable<Bron> { 
    return this.http.get<Bron>(`${this.apiUrl}/bron/`) 
  } 
}
