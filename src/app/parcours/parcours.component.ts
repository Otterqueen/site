import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements OnInit {
  
  experiences = [
    {
      type       : 'sco',
      titre      : 'Ecole le 101',
      annee      : '2017- aujourd\'hui',
      lieu       : 'Lyon',
      decription : "Campus de 42 à Lyon, le-101 est une école basée sur le peer-learning, l'entraide et la motivation"
    },
    {
      type       : 'perso',
      titre      : 'Secretaire et tutrice',
      annee      : '2019- aujourd\'hui',
      lieu       : 'Lyon',
      decription : "Secretaire du BDE de l'école le-101 et Tutrice mentor au sein de celle-ci. \
                    Le rôle des tuteurs est de guider les autres etudiants dans le cursus, de créer/maintenir des partenariats \
                    et de créer des activités pédagogiques ou encore d'assister le bocal lors des examens, \
                    des piscines ou lors de la création de nouveaux sujets. \
                    Les tuteurs mentors sont les référents des tuteurs."
    },
    {
      type       : 'perso',
      titre      : 'vice-secretaire',
      annee      : '2017-2018',
      lieu       : 'Lyon',
      decription : "Vice-secretaire du premier BDE de l'école le-101."
    },
    {
      type       : 'exp',
      titre      : 'Stage',
      annee      : '12 juin - 25 août 2017',
      lieu       : 'Astrée Software à Saint-Etienne.',
      decription : "Création d’un journal des modifications et intégration de celui-ci dans un M.E.S. \
                    Débogage et amélioration d'application. \
                    Technologies utilisées : java, JS, HTML5, Bootstrap, AngularJS, ..."
    },
    {
      type       : 'sco',
      titre      : 'DUT Informatique ',
      annee      : '2016–2017',
      lieu       : 'IUT de Montpellier',
      decription : "Année Spéciale DUT informatique : le DUT mais en un an avec le stage l'été"
    },
    {
      type       : 'perso',
      titre      : 'Game pratic\' et Climate GameJam',
      annee      : '2016',
      lieu       : 'Montpellier / Castrie',
      decription : "La Game pratic' et la climate sont toutes deux des Game Jam : des événements \
                    pendant lequels les participants doivent développer un jeux vidéo fonctionnel dans un délai de 48h. \
                    Game pratic\' de la région Occitanie : 2éme prix remporté (voir projet), \
                    avec ''détours obscur'' jeu d’exploration en 3D développé en JavaScript sous Unity. \
                    Et climate Game Jam à Castrie."
    },
    {
      type       : 'exp',
      titre      : 'Stage',
      annee      : '11 Avril - 1er juillet 2016',
      lieu       : 'Oceasoft, à Montpellier.',
      decription : "Création d’un firmware et d’un protocole d’étalonnage pour sonde intelligente entre une Raspberry Pi et un microcontrôleur branché à la sonde.​"
    },
    {
      type       : 'sco',
      titre      : 'DUT GEII',
      annee      : '2014–2016',
      lieu       : 'Saint-Etienne puis Montpellier',
      decription : "Diplôme universitaire en génie éléctrique et informatique industrielle"
    },
    {
      type       : 'perso',
      titre      : 'Coupe de robotique',
      annee      : '2016',
      lieu       : 'Cachan',
      decription : "Coupe de robotique interIUT de Cachan : Robot sur Raspberry Pi. (voir projet) "
    },
    {
      type       : 'perso',
      titre      : 'Game pratic\' et Climate GameJam',
      annee      : '2015',
      lieu       : 'Montpellier, Castrie',
      decription : "La Game pratic' et la climate sont toutes deux des Game Jam : des événements \
                    pendant lequels les participants doivent développer un jeux vidéo fonctionnel dans un délai de 48h. \
                    Game pratic\' de la région Occitanie organisée par l’association Antithèse \
                    Et climate Game Jam à Castrie."
    },
    {
      type       : 'sco',
      titre      : 'Obtention du BAC S – Science de l’Ingénieur',
      annee      : '2014',
      lieu       : 'Lycée Georges Brassens à Rive-de-Gier',
      decription : "Bac scientifique option Science de l'ingénieur et Informatique et science du numérique"
    },
  ];

  mini_list = [

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/CSS3.png'), name: 'Web CSS3'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/PHP-Logo.png'), name: 'Web PHP'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/angular.png'), name: 'Web angular'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/nodejs.png'), name: 'Web NodeJS'},

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/mongo.png'), name: 'BDD MongoDB'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/mysql.png'), name: 'BDD My sql'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/postgresql-logo.png'), name: 'BDD postgreSql'},

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/Java_Logo.png'), name: 'Lang. JAVA'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/JavaScript-logo.png'), name: 'Lang. JavaScript'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/python.png'), name: 'Lang. Python'},

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/Logo_Unity.png '), name: 'Moteur Unity3D'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/Visual_Studio.png'), name: 'IDE. Visual Studio'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/photoshop.png'), name: 'Log. Photoshop'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/Raspberry.png'), name: 'Tech. Raspberry'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/linux.png'), name: 'Tech. Linux'},

  ]

  constructor(private sanitization: DomSanitizer) { }

  
  ngOnInit() {
  }

  selectionChanged(item) {
    console.log("value = ", item.value);
    let scos = document.getElementsByClassName("sco") as HTMLCollectionOf<HTMLElement>;
    let persos = document.getElementsByClassName("perso") as HTMLCollectionOf<HTMLElement>;
    let exps = document.getElementsByClassName("exp") as HTMLCollectionOf<HTMLElement>;
    switch (item.value) {
      case 'exp':
        for(var i=0; i< scos.length; i++)
        {
          scos[i].style.display = "none";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "none";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "block";
        }
        console.log("case exp ");
        break;
      case 'sco':
        for(var i=0; i< scos.length; i++)
        {
          scos[i].style.display = "block";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "none";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "none";
        }
        //console.log("case sco \n scos = ", scos);
        break;
      case 'perso':
        for(var i=0; i< scos.length; i++)
        {
          scos[i].style.display = "none";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "block";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "none";
        }
        console.log("case perso ");
        break;
      default:
      case 'all':
        for(var i=0; i< scos.length; i++)
        {
          scos[i].style.display = "block";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "block";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "block";
        }
        console.log("case default ");
        break;
    }
  }

}
