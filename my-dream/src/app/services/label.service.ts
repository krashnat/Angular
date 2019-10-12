import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private httpClient: HttpClient) { }


  getAllLabels(userId: any) {
    return this.httpClient.get('http://localhost:8080/label/getAllLabel?userId=' + userId, this.httpOptions);

  }
}
