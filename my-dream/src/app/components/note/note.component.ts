import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  private expand: any = false;

  noteForm: FormGroup;
  constructor(private noteService: NoteServiceService) { }

  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }
  expandField() {
    this.expand = true;

  }
  ngOnclose() {
    if (this.noteForm.value.title !== '' &&  this.noteForm.value.description !== '' ) {
    console.log(this.noteForm.value);
    this.noteService.createNote(this.noteForm.value).subscribe((response: any) => {
      console.log(response.message);
      console.log(response.statuscode);
      if (response.statuscode === 200) {
        console.log(response.note);
      }
    },
      error => {

      }
    );

  }
  }
}
