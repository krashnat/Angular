import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { MatDialog } from '@angular/material';
import { EditnoteComponent } from '../editnote/editnote.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor(private noteService: NoteServiceService, private dialog: MatDialog) { }
  private expand: any = false;
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

  openPopup(note: any) {
    console.log(note.title);
    const dialogRef = this.dialog.open(EditnoteComponent, {
      data:  note
    });
  }



}
