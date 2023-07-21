import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';




const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/Json'})
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl="http://localhost:8081"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  
}
