import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router} from "@angular/router";
import { FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.createUser(this.email, this.password)
      .then(user => {
        this.router.navigate(['/panel']);
        this.flashMessage.show('New user create!!! Welcome!!!', {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
        });
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
        });
      });
  }

}
