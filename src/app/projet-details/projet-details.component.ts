import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeUrl, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.scss']
})
export class ProjetDetailsComponent implements OnInit {

  constructor(private sanitization: DomSanitizer) { }

  @Input() src       : string;
  @Input() type      : string;
  @Input() titre     : string;
  @Input() annee     : string;
  @Input() lang      : string;
  @Input() contexte  : string;
  @Input() decription: string;
  @Input() temps     : string;
  src_video : SafeUrl = this.sanitization.bypassSecurityTrustResourceUrl(this.src);
  video : boolean;

  ngOnInit() {
  }

  test_type(){
    if(this.type == "video")
      return true;
    else
      return false;
  }

  photoURL() {
    return this.sanitization.bypassSecurityTrustResourceUrl(this.src);
  }
}
