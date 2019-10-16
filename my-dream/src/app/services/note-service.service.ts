import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', token: localStorage.getItem('token') })
  };

  constructor(private http: HttpClient) { }





  public createNote(note: any) {
    return this.http.post('http://localhost:8080/note/create', note, this.httpOptions);
    console.log('entered into registeruser in service');
  }

  public getNote() {
    return this.http.get('http://localhost:8080/note/fetchNote',  this.httpOptions);
  }

}
