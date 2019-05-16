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

  avatars = [
      {src: 'assets/robot/1.jpg'},
      {src: 'assets/robot/2.jpg'},
      {src: 'assets/robot/3.jpg'},
      {src: 'assets/robot/4.jpg'},
      {src: 'assets/robot/5.jpg'},
      {src: 'assets/robot/6.jpg'}
  ];
  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.image = this.sanitization.bypassSecurityTrustResourceUrl('assets/robot/1.jpg');
  }

  toggleOptions: Array<String> = ["assets/robot/1.jpg", "assets/robot/2.jpg", "assets/robot/3.jpg", "assets/robot/4.jpg", "assets/robot/5.jpg", "assets/robot/6.jpg"];

  selectionChanged(item) {
    console.log("value = ", item.value);
    this.image = item.value;
  }

}
