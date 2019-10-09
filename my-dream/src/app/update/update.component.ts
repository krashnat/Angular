import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  loading = false;
  constructor(private userservice: UserService,
    private router: Router, private route: ActivatedRoute) { }
  token: any;
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    this.updateForm = new FormGroup(
      {
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])


      }
    );
  }


  onSubmit() {
    console.log(this.updateForm.value);
    console.log(this.token);

    this.userservice.updatePassword(this.updateForm.value, this.token).subscribe((response: any) => {
      console.log(response.message);
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/updatePassword']);
      }
    },
      error => {
        this.loading = false;
      }
    );

  }

}
