import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  private expand: any = false;
  constructor() { }

  ngOnInit() {
  }
  expandField() {
    this.expand = true;

  }

}
