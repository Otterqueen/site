import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
       
  imgs = [
    {src: this.sanitization.bypassSecurityTrustStyle('../../assets/back1.jpg')},
    {src: this.sanitization.bypassSecurityTrustStyle('../../assets/back2.jpg')},
    {src: this.sanitization.bypassSecurityTrustStyle('../../assets/back3.jpg')},
    {src: this.sanitization.bypassSecurityTrustStyle('../../assets/back4.jpg')},
    {src: this.sanitization.bypassSecurityTrustStyle('../../assets/back5.jpg')},
    {src: this.sanitization.bypassSecurityTrustStyle('../../assets/back6.jpg')},
  ]

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

}
