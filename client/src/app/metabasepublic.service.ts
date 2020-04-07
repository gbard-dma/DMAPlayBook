import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import * as models from './metabasepublic.model';

@Injectable()
export class MetabasepublicService {
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('metabasepublic');
  }

  getQuery() : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `6532f9e1-e726-49f0-91ac-959dd53ed663/query`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 202: {
          return response.body;
        }
      }
    }));
  }
}
