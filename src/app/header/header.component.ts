import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    // this.getval();
  }

  // myInput:any;

  // this.myInput = (<HTMLInputElement>document.getElementById('myInput')).value;
  // console.log(this.myInput + 'good');
  // let typingTimer;                //timer identifier
  // let doneTypingInterval = 5000;
  //   $('#myInput').keyup(function(){
  //     clearTimeout(typingTimer);
  //     if ($('#myInput').val()) {
  //         typingTimer = setTimeout(this.getSuggestion(myInput), doneTypingInterval);
  //     }
  // });

  constructor(public dataService: DataService) {
  }

  // getval() {
  //   // Init a timeout variable to be used below
  //   let timeout = null;
  //   let that = this;
  //   // Listen for keystroke events
  //   $('#myInput').keyup(function () {
  //     let input = (<HTMLInputElement>document.getElementById('myInput')).value;
  //     // console.log(input);
  //     clearTimeout(timeout);
  //     // Make a new timeout set to go off in 1000ms (1 second)
  //     timeout = setTimeout(function () {
  //       that.getSuggestion(input)
  //     }, 3000);
  //   });
  // }

  name: any;

  getSuggestion(name) {
    // console.log(name);
    this.name = name;
    // console.log(this.name);
    this.dataService.sendData(this.name);
  }

  
  doSomething(name) {
    // console.log(name);
    let timeout = null;
    let that = this;
    clearTimeout(timeout);
    let input = this.name = name;
    // console.log(input); 
    timeout = setTimeout(function () {
      that.getSuggestion(input)
    }, 3000);
      // Make a new timeout set to go off in 1000ms (1 second)s 
    //});
  }
 
}
