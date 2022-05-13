import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iemployee } from './Iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public url : string = "http://localhost:500/task";

  httpOption = {
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  getEmployee():Observable<Iemployee []>{
   return  this.http.get<Iemployee[]>(this.url)
  }

  deleteRecord(data : Iemployee): Observable<Iemployee>{
    const record =` ${this.url}/${data.id}`
    return this.http.delete<Iemployee>(record)
  }

  addRecord (data : Iemployee) : Observable <Iemployee> {
    return this.http.post<Iemployee>(this.url, data, this.httpOption )
  }
}