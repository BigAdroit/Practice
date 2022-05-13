import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  getEmployee() {
    return [
      {"id": 1, "name": "Adeola", "Age":23},
      {"id":2, "name":"ItunuOluwa", "Age":22},
      {"id":3, "name":"Abosede", "Age": 20}
    ]
  }
}
