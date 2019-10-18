import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  listNotes: [];

  constructor(private noteService: NoteServiceService) { }

  ngOnInit() {
    this.getTrashedNotes();
  }


  getTrashedNotes() {
    this.noteService.getTrashedNote().subscribe((response: any) => {
     this.listNotes = response.obj;

    });

  }
  deletenotePemenently(note, noteindex) {
     this.listNotes.splice(noteindex, 1);
     console.log(noteindex);

     this.noteService.deleteNotePermenently(note).subscribe((response: any) => {
        if (response.statusCode === 200) {
          this.listNotes.splice(noteindex, 1);

        }
    });
  }


  restoreNote(note, noteindex) {

    console.log(noteindex);

    this.noteService.deleteNote(note).subscribe((response: any) => {
       if (response.statusCode === 200) {
         this.listNotes.splice(noteindex, 1);

       }
   });
 }

}
