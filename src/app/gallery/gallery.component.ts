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

}
