import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() src_list : Array<any>;

  constructor() { }

  ngOnInit() {
    console.log("list = ", this.src_list);
  }

  show_viewer(img_src){
    console.log("src = ", img_src.changingThisBreaksApplicationSecurity);
    document.getElementById('canvas').style.display = 'inline-flex';
    document.getElementById('canvas').style.backgroundImage = img_src.changingThisBreaksApplicationSecurity;
  }

  hide_viewer(){
    document.getElementById('canvas').style.display = 'none';
  }
}
