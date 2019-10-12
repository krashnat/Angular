import { Component, OnInit } from '@angular/core';
import { tokenName } from '@angular/compiler';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Keep';
  name = 'first';
  listLabels: [];
  token: string;
  constructor(
    private labelService: LabelService
  ) { }
  show = true;
  ngOnInit() {
    this.getAllLabels();
  }
  changeView(show: boolean) {
    this.token = localStorage.getItem('token');
    this.show = !show;
    console.log( this.token );
  }



  getAllLabels() {

    this.labelService.getAllLabels(1).subscribe((response: any) => {
      console.log(response.message);
      this.listLabels = response.obj;
    });

  }
}
