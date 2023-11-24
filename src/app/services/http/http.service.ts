import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export enum HttpVerbs {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}

@Injectable()
export class HttpService {

  baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
  ) { 
    console.log('HttpService initialized');
  }

  request(
    verb: HttpVerbs,
    url: string,
    body?: any,
    options?: any
  ) {

    let request;
    
    url = this.baseUrl + url;

    console.log(url, 'this is the url');   
    

    switch (verb) {

      case HttpVerbs.GET:
        request = this.httpClient.get(
          url,
          options
        ).pipe(
          retry(1)
        );
        break;
      
      case HttpVerbs.POST:
        request = this.httpClient.post(
          url,
          body,
          options
        );
        break;

      case HttpVerbs.PUT:
        request = this.httpClient.put(
          url,
          body,
          options
        );
        break;

      case HttpVerbs.PATCH:
        request = this.httpClient.patch(
          url,
          body,
          options
        );
        break;

      case HttpVerbs.DELETE:
        request = this.httpClient.delete(
          url,
          options
        );
        break;

      default:
        break;

    }

    return request;

  }

}
