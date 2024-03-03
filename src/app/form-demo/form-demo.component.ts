import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {

  user = {
    name:"",
    email:"",
    password:"",
    contact:"",
    gender:"",
    hobbies:[]
  }

  onSubmit(){
    console.log("form subbmited..",this.user);
    //alert("form subbmited..");
    alert(JSON.stringify(this.user));
  }

}
