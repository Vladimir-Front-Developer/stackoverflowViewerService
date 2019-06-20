import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  config: {} = {
    url: ''
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const options: {} = {
      client_id: 15619,
      scope: {
        read_inbox: true,
        no_expiry: true,
        write_access: true,
        private_info: true

      },
      redirect_uri: 'localhost:4200'
    }
    this.http.get('https://stackoverflow.com/oauth/dialog', options)
    .subscribe((data) => {
      console.log(data)
    })
  }
  // get(url: string, 
  // options: { headers?: HttpHeaders | { [header: string]: string | string[]; };
  // observe: "events"; params?: HttpParams | { [param: string]: string | string[]; };
  // reportProgress?: boolean; responseType?: "json";
  // withCredentials?: boolean; }): Observable<HttpEvent<Object>>
  
  showConfig() {
    // this.configService.getConfig()
    //   .subscribe(
    //     (data: Config) => this.config = { ...data }, // success path
    //     error => this.error = error // error path
    //   );
  }
  getConfig() {
    // return this.http.get<Config>(this.configUrl)
    //   .pipe(
    //     retry(3), // retry a failed request up to 3 times
    //     catchError(this.handleError) // then handle the error
    //   );
  }
}
