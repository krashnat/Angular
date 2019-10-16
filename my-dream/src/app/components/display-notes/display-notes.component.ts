import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor(private noteService: NoteServiceService) { }

  listNotes: [];

  ngOnInit() {
    this.getAllNotes();

  }

  getAllNotes() {
    this.noteService.getNote().subscribe((response: any) => {
      this.listNotes = response.obj;
      console.log(response.obj);
    });

  }

}
