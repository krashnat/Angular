import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/label.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
 labels: any;
labelForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<LabelComponent>,  private labelService: LabelService) {
    this.labels = data;
  }

  ngOnInit() {
    this.labelForm = new FormGroup(
      {
        labelName: new FormControl('')
      }
    );
  }

}
