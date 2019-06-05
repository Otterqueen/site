import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projets = [
    {
      type       : 'video',
      src        : 'https://player.vimeo.com/video/260747477',
      titre      : 'Quidditch Manager',
      annee      : '2017',
      lang       : 'python, sql, pygame',
      contexte   : "Jeu de gestion d'équipe sportive en 2D développé dans le cadre de notre projet de fin d'étude d'année spéciale (DUT informatique en 1 an).\
                    Développé avec l'aide d'Emma Moussaron, Cyril Bougeard et Yann Camelot",
      decription : "Vous gérez votre équipe de quidditch dans un championnat pendant lequel votre équipe va jouer 6 matchs. Entre chaque match vous avez la possibilité de \
                    gérer les joueurs et de les échanger avec ceux disponibles sur le banc des remplaçants, mais attention, leurs statistiques évoluent suivant leurs actions durant les matchs. \
                    Pour voir une partie (dont seul le premier tour est réellement joué, le reste étant juste accéléré) cliquez sur la video ci-contre.",
      temps      : '15'
    },
    {
      type       : 'video',       
      src        : 'https://player.vimeo.com/video/260747271',
      titre      : 'Sanch eau vania',
      annee      : '2017',
      lang       : 'Unity 3D, JavaScript (UnityScript)',
      contexte   : "Jeu ''plateformer'' en 2D développé durant la Climate GameJam 2017.\
                    Modificateur de la goutte d'eau.\
                    Développé sous Unity 3D avec l'aide d'Emma Moussaron.",
      decription : "Sanch eau Vania se déroule dans notre monde aujourd'hui et dans la situation qui est la notre : 2 degrés de plus et notre pauvre terre ne s'en remettrait pas.\
                    Le jeu consiste donc à battre la pollution sans faire monter la température.\
                    (Il faut même la faire descendre d'au moins un degré pour avoir la bonne fin.)",
      temps      : '10'
    },
    {
      type       : 'video',       
      src        : 'https://player.vimeo.com/video/198478875',
      titre      : 'Détour Obscur',
      annee      : '2016',
      lang       : 'Unity 3D, JavaScript (UnityScript)',
      contexte   : "Jeu ''explorer'' en 3D développé durant la Game pratic' 2016. 2ème prix.",
      decription : "Détour obscur se déroule dans une grotte et met en scène un enfant qui s'est détourné du groupe de visite et se rend compte que certaines peintures ont disparu du mur.\
                    Il part donc à leur recherche.",
      temps      : '5 - 10'
    },
    {
      type       : 'video',
      src        : 'https://www.youtube.com/embed/NXxL8e8WtrU',
      titre      : 'World Eater',
      annee      : '2016',
      lang       : 'GML (Game Maker Language)',
      contexte   : "Jeu ''Shoot them All'' en 2D, développé dans la cadre de la Climate Game Jam 2016\
                    codé en GML sous Game Maker. Sur ce projet je n’étais pas la programmeuse principale mais je renforçais seulement Nicolas Counil. ",
      decription : "Dans World Eater vous contrôlez un vaisseau spatial, lorsque les vaisseaux ''ennemis'' arrivent, comme tout joueur, la première fois vous avez le réflexe de tirer. \
                    Seulement, il y a la possibilité de tous les éviter afin de ne pas détruire la planète.\
                    http://hakatah.com/creations/world_eater/",
      temps      : '5 - 8'
    },
    {
      type       : 'video',
      src        : 'https://player.vimeo.com/video/198479089',
      titre      : 'L\'inventoriste Compulsif',
      annee      : '2015',
      lang       : 'Python, PyGame',
      contexte   : "Jeu ''Point and click'', développé lors de la Game Pratic' 2015\
                   de la région Languedoc Roussillon organisé par le Collectif Antithese",
      decription : "Dans l'inventoriste compulsif, vous incarnez un inventoriste de la région Languedoc Roussillon, \
                    et vous devez aller chez une vielle dame qui requiert vos services, afin de faire l'inventaire \
                    des objets qui ont de la valeur pour le patrimoine de la région.",
      temps      : '5 - 10'
    },
    {
      type       : 'image',
      src        : '/assets/robot',
      titre      : 'Framboisette, le robot Raspberry pi',
      annee      : '2015',
      lang       : 'Python, linux',
      contexte   : "Framboisette est un robot développé dans le cadre du projet de fin d’étude de mon DUT GEII. \
                    Nous avons codé en Python et le cœur de Framboisette est une Raspberry Pi 2B+.",
      decription : "Nous avons participé à la coupe de robotique de Cachan. Framboisette a été dessinée, \
                    construite, et développée entièrement par notre équipe. (Du dessin des cartes à la programmation). \
                    Elle est programmée pour éviter les obstacles et arriver le plus vite possible jusqu’à sa balise d'arrivée.",
      temps      : ''
    },
    {
      type       : 'video',
      src        : 'https://player.vimeo.com/video/198479201',
      titre      : 'Chauve souris',
      annee      : '2014',
      lang       : 'Python, Pygame',
      contexte   : "Jeu ''Flappy Bird like'', développé dans le cadre de mon projet de fin d'année en terminale. Note au bac = 16/20",
      decription : "Dans ce jeu, vous contrôlez une petite chauve-souris qui se déplace verticalement, afin d’éviter les obstacles, \
                    et d'arriver à 3000 points pour sortir à l'air libre.",
      temps      : '5'
    },

  ];

  projets_ecole = [
    {
      duree      : '1 mois',
      titre      : 'Hypertube',
      note       : '122',
      lang       : 'NodeJS, angular, html5, scss, mongoBd, docker',
      decription : "Dernier projet de sa série, le projet Hypertube vous invite à découvrir une catégorie d'outil extrêmement puissante : les frameworks MVC. \
                    Vous apprendrez à manipuler un MVC, dans le langage de votre choix, pour réaliser un site de streaming de video téléchargées via le protocole BitTorrent."
    },
    {
      duree      : '3 mois',
      titre      : 'Matcha',
      note       : '91',
      lang       : 'nodeJS, html5, css, docker, SQL, mySql',
      decription : "Ce second projet vous introduit à un outil plus évolué pour réaliser vos applications web : le micro-framework. Nous vous invitons à réaliser, \
                    dans le langage de votre choix, un site de rencontres. Les interactions entre utilisateurs seront au coeur du projet !"
    },
    {
      duree      : '2 mois',
      titre      : 'Camagru',
      note       : '117',
      lang       : 'php, html5, css, js',
      decription : "Ce premier projet vous remet dans le bain après la piscine PHP : vous allez devoir réaliser, en PHP, un petit site Instagram-like permettant à des \
                    utilisateurs de réaliser et partager des photo-montages. Vous allez ainsi implémenter, à mains nues (les frameworks sont interdits), les fonctionnalités\
                    de base rencontrées sur la majorité des sites possédant une base utilisateur."
    },
    {
      duree      : '4 mois et demi',
      titre      : 'Ft_printf',
      note       : '98',
      lang       : 'c',
      decription : "Vous en avez assez de faire vos affichages en alternant ft_putstr et ft_putnbr ? Vous n'avez pas le droit d'utiliser printf ? \
                    Recodez le vôtre ! Ce sera l'occasion de découvrir une feature du C - les fonctions variadiques - et de vous entrainer à la gestion fine des options d'affichage. \
                    Vous aurez ensuite le droit d'utiliser votre printf dans tous vos projets ultérieurs."
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
