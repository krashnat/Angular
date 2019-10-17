import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {
  note;
  noteForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteServiceService
  ,           public dialogRef: MatDialogRef<EditnoteComponent>) {
    this.note = this.data;

  }


  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required]),

      description: new FormControl(this.data.description, [Validators.required])
    });
  }
  ngOnclose() {
     this.dialogRef.close();
     this.noteService.updateNote(this.note)
     .subscribe((response: any) => {
       console.log(response);
     });


  }
}
