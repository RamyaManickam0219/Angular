import { Component } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private service: RequestService) { }
  title = 'pipes';
  users: any[] = [{
    name: 'Ramya', id: "23354"
  },
  { name: 'Giri', id: "287354" },
  {
    name: 'Sabari', id: "2388354"
  }]
  data$!: Observable<any>
  ngOnInit() {
    this.data$ = this.service.getPosts();
  }
  addUser(){
    this.users.push({name : 'Bubu' , id: "23354"})
  }
}
