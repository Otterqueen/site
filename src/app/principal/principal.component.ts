import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent implements OnInit {

  imgs = [
    {lien: "/projects" , mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_1.jpg')`)}
    ]

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
  }
  

}
