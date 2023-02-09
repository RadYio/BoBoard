import { Component, OnInit } from '@angular/core';
import { ApiPersonService } from '../../services/api-person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  Person:any = [];
  constructor(private apiService: ApiPersonService) { }

  ngOnInit(): void {
    this.apiService.GetPersons().subscribe((data) => {
      console.log(data);
      this.Person = data;
  });

  }

}

