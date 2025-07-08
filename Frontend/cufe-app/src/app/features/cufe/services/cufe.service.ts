import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CufePayload } from '../../../core/models/cufe.model';

const URL_SERVICE = "http://localhost:8080/api/cufe";

@Injectable({
  providedIn: 'root'
})
export class CufeService {

  constructor(private http: HttpClient) {}

  generarCufe(payload: CufePayload) {
    return this.http.post<{ cufe: string }>(URL_SERVICE, payload);
  }
}
