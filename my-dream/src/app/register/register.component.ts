import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  registerForm:FormGroup;
  loading= true;
  
  constructor(private userservice: UserService,
    private router:Router) { }
  

  ngOnInit() {
    this.registerForm=new FormGroup(
      {
        name: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
        mobNo: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        
      }
    );
  }
  onSubmit(){
    console.log(this.registerForm.value);

     this.userservice.registration(this.registerForm.value).subscribe((response: any)=>{
       console.log(response.message);
       this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
      }
    );
     }
  }


