import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
       
  imgs = [
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/1.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_1.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/2.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_2.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/3.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_3.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/4.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_4.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/5.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_5.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/6.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_6.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/7.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_7.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/8.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_8.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/9.jpg')`) , 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_9.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/10.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_10.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/11.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_11.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/12.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_12.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/13.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_13.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/14.png')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/14.png')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/16.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_16.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/17.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_17.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/18.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_18.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/19.jpg')`), 
     mini_src : this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/mini_19.jpg')`)},
  ]

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

}
