import { Component, OnInit } from '@angular/core';
//const fs = require('fs');


@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent implements OnInit {

  /*path = '../../assets/imgs';
  imgs=[];*/

  constructor() { }

  ngOnInit() {
    /*fs.readdir(this.path, function(err, items) {
      console.log(items);
   
      for (var i=0; i<items.length; i++) {
          console.log(items[i]);
      }
  });*/
  }

}
