import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
       
  imgs = [
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/1.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/2.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/3.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/4.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/5.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/6.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/7.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/8.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/9.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/10.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/11.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/12.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/13.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/14.png')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/16.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/17.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/18.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/19.jpg')`)},
  ]

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

}
