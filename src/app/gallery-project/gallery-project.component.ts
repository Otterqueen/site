import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'gallery-project',
  templateUrl: './gallery-project.component.html',
  styleUrls: ['./gallery-project.component.scss']
})
export class GalleryProjectComponent implements OnInit {

  @Input() src : string;
  image        : SafeUrl;
  
  tab1 = [];
  avatars = [];
  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
    console.log("nani ?????? ====== "+this.src);
    if (this.src == "/assets/robot"){
      this.avatars = [
        {src: 'assets/robot/1.jpg'},
        {src: 'assets/robot/2.jpg'},
        {src: 'assets/robot/3.jpg'},
        {src: 'assets/robot/4.jpg'},
        {src: 'assets/robot/5.jpg'},
        {src: 'assets/robot/6.jpg'}
      ];
      this.image = this.sanitization.bypassSecurityTrustResourceUrl('assets/robot/1.jpg');
      this.tab1 = ["assets/robot/1.jpg", "assets/robot/2.jpg", "assets/robot/3.jpg", "assets/robot/4.jpg", "assets/robot/5.jpg", "assets/robot/6.jpg"];
    }
    else{
      this.avatars = [
        {src: 'assets/alchemist/1.jpg'},
        {src: 'assets/alchemist/2.jpg'},
        {src: 'assets/alchemist/3.jpg'},
        {src: 'assets/alchemist/4.jpg'}
      ];
      this.image = this.sanitization.bypassSecurityTrustResourceUrl('assets/alchemist/1.jpg');

      this.tab1 = ["assets/alchemist/1.jpg", "assets/alchemist/2.jpg", "assets/alchemist/3.jpg", "assets/alchemist/4.jpg"];
    }
    
    
  }
  toggleOptions: Array<String> = this.tab1;

  selectionChanged(item) {
    console.log("value = ", item.value);
    this.image = item.value;
  }

}
