import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
@Injectable()
export class AppService {

  private url = 'http://localhost:3000/';

  constructor(private http: Http) { }

  public getHelloWorld() {
    return this.http.get(this.url + 'api/hello') .map((response: Response) => {
                return response.text();
            });

}
}