import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'projet-ecole',
  templateUrl: './projet-ecole.component.html',
  styleUrls: ['./projet-ecole.component.scss']
})

export class ProjetEcoleComponent implements OnInit {

  constructor() { }
  @Input() duree      : string;
  @Input() titre      : string;
  @Input() note       : string;
  @Input() decription : string;
  @Input() lang       : string;
  @Input() group_bool : string;


  ngOnInit() {
  }

}
