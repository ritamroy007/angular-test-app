import { Component, OnInit ,Input} from '@angular/core';
import * as _ from 'lodash';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public data: string;
   lists:any;
  constructor(public dataService: DataService) { 
    // this.dataService.myMethod.subscribe((data) => {
    //   let rs = this.data = data;
    //   this.lists = this.data
    //   ? this.users.filter(function(a) {           
    //     return a.name.toLocaleLowerCase().includes(rs.toLocaleLowerCase());
    //   })
    //   : this.users;
    // });
    this.dataService.myMethod.subscribe((data) => {
      this.getData(data);
    });
  }
  
   users = [
    { 'id':'1','name': 'Cristiano Ronaldo'},
    { 'id':'2', 'name': ' Leo Messi'},
    { 'id':'3', 'name': 'Neymar Jr'}
  ];

  getData(data){
    let rs = this.data = data;
    this.lists = this.data
    ? this.users.filter(function(a) {           
      return a.name.toLocaleLowerCase().includes(rs.toLocaleLowerCase());
    })
    : this.users;
  }

  ngOnInit() {
  }

  

}
