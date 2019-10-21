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
  public archiveNote(note: any) {
    return this.http.post('http://localhost:8080/note/archieve/' + note.id, null,  this.httpOptions);
  }


  public getArchiveNote() {
    return this.http.get('http://localhost:8080/note/fetcharchivenote',  this.httpOptions);
  }

  public updateNote(note: any) {
    console.log('inside service' + note.description + 'id' + note.id );
    return this.http.put('http://localhost:8080/note/update', note,  this.httpOptions);
  }

  public deleteNote(note: any) {
    return this.http.delete('http://localhost:8080/note/delete/' + note.id,  this.httpOptions);
  }


  public getTrashedNote() {
    return this.http.get('http://localhost:8080/note/fetchTrashedNote',  this.httpOptions);
  }
  public deleteNotePermenently(note: any) {
    return this.http.delete('http://localhost:8080/note/deletenote/' + note.id,  this.httpOptions);
  }

}
