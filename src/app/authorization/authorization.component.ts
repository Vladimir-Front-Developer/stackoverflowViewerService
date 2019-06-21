import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders()
    headers.set( 'Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    headers.set('key', 'z7tCKsNBm0ETQIX9EIEZjQ')

    const params = new HttpParams()
    // params.set('client_id', '15627')
    // params.set('redirect_uri', 'http://localhost:4200')
    // params.set('key', 'z7tCKsNBm0ETQIX9EIEZjQ')
    // params.set('order', 'desc')
    // params.set('sort', 'activity')
    // params.set('site', 'stackoverflow.com')

    const options = {
      headers: headers,
      params: params
    }
    this.http.get('https://api.stackexchange.com/2.2/sites', options).subscribe((data) => {
      console.log(data)
    },
    error => {
      console.log(error)
    })
  }
}
