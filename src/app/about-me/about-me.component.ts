import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
       
  imgs = [
    {src: this.sanitization.bypassSecurityTrustStyle(`url('../../assets/back1.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('../../assets/back2.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('../../assets/back3.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('../../assets/back4.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('../../assets/back5.jpg')`)},
    {src: this.sanitization.bypassSecurityTrustStyle(`url('../../assets/back6.jpg')`)},
  ]

  // imgs = [
  //   {src: this.sanitization.bypassSecurityTrustUrl('../../assets/back1.jpg'),
  //    lol: 'miaou'},
  //   {src: this.sanitization.bypassSecurityTrustUrl('../../assets/back2.jpg'),
  //    lol: 'miaou'},
  //   {src: this.sanitization.bypassSecurityTrustUrl('../../assets/back3.jpg'),
  //    lol: 'miaou'},
  //   {src: this.sanitization.bypassSecurityTrustUrl('../../assets/back4.jpg'),
  //    lol: 'miaou'},
  //   {src: this.sanitization.bypassSecurityTrustUrl('../../assets/back5.jpg'),
  //    lol: 'miaou'},
  //   {src: this.sanitization.bypassSecurityTrustUrl('../../assets/back6.jpg'),
  //    lol: 'miaou'},
  // ]


  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

}
