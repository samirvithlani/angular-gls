import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  title = 'learning';
  age: number = 18;
  name: string = "Amit";
  isMarried: boolean = true;
  vehicles: string[] = ["car", "bike", "cycle"]
  users:any = [
    {
      id: 1,
      name: "Amit",
      age: 18
    },
    {
      id: 2,
      name: "Rahul",
      age: 20
    },
    {
      id: 3,
      name: "Rohit",
      age: 22
    }
  ]
}
