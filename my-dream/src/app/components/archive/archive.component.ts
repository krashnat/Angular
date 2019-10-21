import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  listNotes: any;

  constructor(private noteService: NoteServiceService) { }

  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() {
    this.noteService.getArchiveNote().subscribe((response: any) => {
      this.listNotes = response.obj;
    });

  }
  unArchive(note, notetempid) {
    this.noteService.archiveNote(note).subscribe((response: any) => {
    if (response.statusCode === 200) {
      this.listNotes.splice(notetempid, 1);
    }
    });
  }



}
