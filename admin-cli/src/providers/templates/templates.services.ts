import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemplateEndPoints } from './templates.endpoints';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private _httpClient: HttpClient) { }

  saveTemplate(data): Observable<any> {
    return this._httpClient.post(TemplateEndPoints.saveTemplate, data);
  }

}
