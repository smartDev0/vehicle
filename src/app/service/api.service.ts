import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiBaseUrl = "http://localhost:8080/api";
  constructor() { }
}
