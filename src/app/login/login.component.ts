import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user =new User();
  erreur!: number;

  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }

  err:number = 0;
  onLoggedin()
  {
  this.authService.login(this.user).subscribe({
  next: (data) => {
  let jwToken = data.headers.get('Authorization')!;
  this.authService.saveToken(jwToken);
  this.router.navigate(['/']);
  },
  error: (err: any) => {
  this.err = 1;
  }
  });
  }

}


