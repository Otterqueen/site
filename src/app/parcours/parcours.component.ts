import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements OnInit {
  
  experiences = [
    // {
    //   type       : 'exp',
    //   titre      : 'Mission Freelance',
    //   annee      : 'Janvier - Février 2021',
    //   lieu       : 'Saint-Etienne',
    //   decription : "Mise à niveau des outils informatiques d’une association. Upgrade hardware des postes fixes (ajout de RAM), puis installation de nouveaux logiciels, \
    //                 et création d’une VM afin d'assurer en douceur le passage et le suivi sans arrêter les activités de l’association. \
    //                 Et enfin, formation des personnes concernées sur le nouveau logiciel (ACCESS)."
    // },
    {
      type       : 'exp',
      titre      : 'Alternance',
      annee      : '2021-2022',
      lieu       : 'ENE à Lyon',
      decription : "Développement d'un simulateur d'atelier industriel, dans le cadre du consortium EthicFactory. \
                    Seule développeuse sur le projet, de la conception du cachier des charges à la livraison du logiciel \
                    Techologies utilisées : Python, MQTT, PygameGUI."
    },
    {
      type       : 'exp',
      titre      : 'Mission Freelance',
      annee      : 'Depuis 2020',
      lieu       : 'Région Rhône-Alpes',
      decription : "Missions dans différents domaines (cours, hardware, Full Stack, VM)."
    },
    {
      type       : 'perso',
      titre      : 'Tutrice référente',
      annee      : 'Février 2021 - 2022',
      lieu       : 'Lyon',
      decription : "Le rôle des tuteurs référents est de gérer l'organisation des tuteurs et de recruter les nouveaux afin de les former. "
    },
    // {
    //   type       : 'exp',
    //   titre      : 'Mission Freelance',
    //   annee      : 'Novembre - decembre 2020',
    //   lieu       : 'Lyon',
    //   decription : "Développement d’une application desktop qui permet à l'utilisateur de se connecter avec un compte déjà existant sur le site du client, \
    //                 puis de gérer ses informations personelles, son pseudo sur le jeu League of Legends, puis d'enregistrer, automatiquement ou non, les parties jouées,\
    //                 de les gérer, et de les sauvegarder sur le cdn du client si l’utilisateur le souhaite. \
    //                 Langages utilisés : App en électron, JS / Python, API (client et RiotGames), HTLM/CSS, Pascal (innoSetup Config)"
    // },
    {
      type       : 'perso',
      titre      : 'Trésorière adjointe de la GameDevParty',
      annee      : 'Février 2020 - Février 2021',
      lieu       : 'Lyon ',
      decription : "La GameDevParty est une association à but non lucratif qui organise des apéros, des conférences, des cours et bien d’autre événements axées sur le monde vidéoludique indépendant. \
                    Les game jams organisées par l’asso sont gratuits et non compétitives."
    },
    {
      type       : 'exp',
      titre      : 'Stage',
      annee      : '19 août 2019 - 17 février 2020',
      lieu       : 'Adrenalead, Lyon 7ème',
      decription : "Adrenalead est une startup dans le web marketting, mon rôle au sein de l'équipe de développement était d'appuyer le lead dev en tant que développeuse full stack. \
                    Principales missions : amélioration et création de nouvelles feature sur le site Notifadz, créations de nouvelles bases de données, amélioration de solution existante, créations de nouvelles sources d’acquisition, … \
                    Langages utilisés : php, js, jquery, bootstrap, css, html, myslq, pgsql, elasticSearch, redis, nodeJS, … "
    },
    {
      type       : 'perso',
      titre      : 'GameJam 15 de la GameDevParty',
      annee      : '8 au 11 novembre 2019',
      lieu       : 'Lyon ',
      decription : "La GameDevParty organise des GameJam gratuites et non competitives. Le jeu crée lors de cet evenement est visible dans l'onglets mes projets et s'intitule 'Full Garbage Alchemist' "
    },
    {
      type       : 'perso',
      titre      : 'Secretaire et tutrice',
      annee      : '2019 - Février 2021',
      lieu       : 'Lyon',
      decription : "Secretaire du BDE de 42Lyon (anciennement l'école le-101) et Tutrice mentor au sein de celle-ci. \
                    Le rôle des tuteurs est de guider les autres etudiants dans le cursus, de créer/maintenir des partenariats \
                    et de créer des activités pédagogiques ou encore d'assister le bocal lors des examens, \
                    des piscines ou lors de la création de nouveaux sujets. \
                    Les tuteurs mentors sont les référents des tuteurs."
    },
    {
      type       : 'scolaire',
      titre      : '42Lyon (anciennement l\'école le-101)',
      annee      : '2017 - aujourd\'hui',
      lieu       : 'Lyon',
      decription : "Campus de 42 à Lyon, le-101 est une école basée sur le peer-learning, l'entraide et la motivation."
    },
    {
      type       : 'perso',
      titre      : 'vice-secretaire',
      annee      : '2017 - 2018',
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
      type       : 'scolaire',
      titre      : 'DUT Informatique ',
      annee      : '2016 – 2017',
      lieu       : 'IUT de Montpellier',
      decription : "Année Spéciale DUT informatique : le diplôme universitaire technologique en informatique mais en un an.\
                    C'est-à-dire avec le programme de la première année pendant le premier semestre, celui de la deuxième année \
                    pendant le deuxième et le stage durant l'été."
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
      type       : 'scolaire',
      titre      : 'DUT GEII',
      annee      : '2014–2016',
      lieu       : 'Saint-Etienne puis Montpellier',
      decription : "Diplôme universitaire en génie éléctrique et informatique industrielle."
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
      type       : 'scolaire',
      titre      : 'Obtention du BAC S – Science de l’Ingénieur',
      annee      : '2014',
      lieu       : 'Lycée Georges Brassens à Rive-de-Gier',
      decription : "Bac scientifique option Science de l'ingénieur et Informatique et science du numérique."
    }
  ];

  mini_list = [

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/Csharp.png'), name: 'Lang. C#'},

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/angular.png'), name: 'Web angular'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/CSS3.png'), name: 'Web CSS3'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/PHP-Logo.png'), name: 'Web PHP'},
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

    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/HTML5.png'), name: 'Web HTML5'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/Jquery.png'), name: 'Web Jquery'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/bootstrap.png'), name: 'Web Bootstrap'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/docker.png'), name: 'Log. Docker'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/elasticsearch-logo-300x193.png'), name: 'BDD ElasticSearch'},
    {src: this.sanitization.bypassSecurityTrustUrl('assets/logos/kibana.png'), name: 'U.I. Kibana'},
  ]
  skills = [

    {name: 'CSS3', note:'70'},
    {name: 'PHP', note:'70'},
    {name: 'angular', note:'80'},
    {name: 'NodeJS', note:'82'},
    {name: 'MongoDB', note:'65'},
    {name: 'My sql', note:'80'},
    //{name: 'postgreSql', note:'50'},
    {name: 'JAVA', note:'70'},
    {name: 'JavaScript', note:'80'},
    {name: 'Unity3D -- C#', note:'90'},
    {name: 'Python', note:'85'},
    {name: 'C/C++', note:'75'},
    
    // {name: 'Visual Studio'},
    // {name: 'Photoshop'},
    // {name: 'Raspberry'},
    // {name: 'Linux'},

  ]

  constructor(private sanitization: DomSanitizer) { }

  
  ngOnInit() {
  }

  selectionChanged(item) {
  
    let persos = document.getElementsByClassName("perso") as HTMLCollectionOf<HTMLElement>;
    let scolaire = document.getElementsByClassName("scolaire") as HTMLCollectionOf<HTMLElement>;
    let exps = document.getElementsByClassName("exp") as HTMLCollectionOf<HTMLElement>;
    switch (item.value) {
      case 'exp':
        for(var i=0; i< scolaire.length; i++)
        {
          scolaire[i].style.display = "none";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "none";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "block";
        }
        break;
      case 'sco':
        for(var i=0; i< scolaire.length; i++)
        {
          scolaire[i].style.display = "block";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "none";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "none";
        }
        break;
      case 'perso':
        for(var i=0; i< scolaire.length; i++)
        {
          scolaire[i].style.display = "none";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "block";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "none";
        }
        break;
      default:
      case 'all':
        for(var i=0; i< scolaire.length; i++)
        {
          scolaire[i].style.display = "block";
        }
        for(var j=0; j< persos.length; j++)
        {
          persos[j].style.display = "block";
        }
        for(var k=0; k< exps.length; k++)
        {
          exps[k].style.display = "block";
        }
        break;
    }
  }

}
