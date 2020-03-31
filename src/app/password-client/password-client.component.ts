import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PasswordServiceService } from '../password-service.service';

@Component({
  selector: 'app-password-client',
  templateUrl: './password-client.component.html',
  styleUrls: ['./password-client.component.css']
})
export class PasswordClientComponent implements OnInit {

  form: FormGroup;
  private values  = [];
  private message: string;

  constructor(private passwordService: PasswordServiceService) { }

  ngOnInit() {

    this.form = new FormGroup({password: new FormControl('')});
  }

  onSubmit() {

    const body = {'password':this.form.controls.password.value}
    this.passwordService.callService(body).subscribe(
     data => {console.log("data",data),
     this.message = data.message;
    },
      error =>
     {
        console.log("error",error);
        this.values.push(error.error);
        console.log("values",this.values);
      }

      )

  }

}
