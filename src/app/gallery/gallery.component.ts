import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() src_list : Array<any>;

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
    console.log("list = ", this.src_list);
  }

  show_viewer(img_src){
    
    document.getElementById('canvas').style.display = 'inline-flex';
    document.getElementById('canvas').style.backgroundImage = img_src.changingThisBreaksApplicationSecurity;
    
    
    
    // var regex = /(\d)/;

    // //console.log("src = ", img_src.changingThisBreaksApplicationSecurity.split(regex));
    // //console.log("this san truc = ",this.sanitization.bypassSecurityTrustStyle(`url('assets/photos/${tab[1]+tab[2]}')`));
    // var tab =img_src.changingThisBreaksApplicationSecurity.split(regex);
    // //console.log(tab)
    // document.getElementById('canvas').style.backgroundImage = 'assets/photos/'+tab[1]+tab[2];
    // console.log("src backgrou = ",document.getElementById('canvas').style)
  }

  hide_viewer(){
    document.getElementById('canvas').style.display = 'none';
  }
}
