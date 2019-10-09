import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {
  emailForm: FormGroup;
  loading = false;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.emailForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required])


      }
    );
  }


  onSubmit() {
    console.log(this.emailForm.value);

    this.userservice.sendEmail(this.emailForm.value).subscribe((response: any) => {
      console.log(response.message);
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        this.router.navigate(['/informUser']);
      } else {
        this.router.navigate(['/sendmail']);
      }
    },
      error => {
        this.loading = false;
      }
    );

  }



}
