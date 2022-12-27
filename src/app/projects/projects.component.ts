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
      src        : 'https://www.youtube.com/embed/9cey6-75uwg',
      titre      : 'Fall Girl',
      hash       : 'G4G',
      annee      : '2020',
      lang       : 'Unity 3D, C#',
      contexte   : "Développé dans le cadre du Hackathon Ready Player 42 organisé par 42entrepreneurs Paris, Fall Girl est un platformer.\
                   Développé avec l'aide de Coline Faure-Geors et Louise Pieri. Nous avons gagné le prix des meilleures ventes lors de cet hackathon et remporté ainsi 1000 euros.",
      decription : "Fall Girl est un platformer où nous contrôlons les plateformes pour sauver un personnage en train de tomber dans le vide.\
                  Cette façon de jouer est tout à fait innovante car pour la première fois notre but est de sauver la vie de notre personnage sans jamais interagir avec lui.\
                  Aujourd’hui Fall Girl est une beta adaptée pour les ordinateurs afin de répondre à la demande du Hackathon Ready Player 42, mais un jour il sera sûrement développé de façon plus complète (objectif jeu complet 2022).\
                  Fall Girl est une manière de déconstruire les normes de son propre univers afin d’offrir une nouvelle expérience de jeu.\
                  Vous pouvez télécharger le jeu (Win, MacOs, Android) à l'adresse suivante : https://otterqueen.itch.io/fall-girl",
      temps      : '1-120'
    },
    {
      type       : 'image',
      src        : '/assets/alchemist',
      titre      : 'Full Garbage Alchemist',
      hash       : 'Alchemist',
      annee      : '2019',
      lang       : 'Unity 3D, C#',
      contexte   : "Jeu de puzzle développé lors de la GameJam15 organisé par l'association GameDevParty du 8 au 11 novembre 2019.\
                    Développé avec l'aide de Suzanne et Ulysse que vous pourrez retrouver dans le lien suivant : https://gamedevparty.fr/interview-full-garbage-alchemist-game-jam-15/",
      decription : "Vous incarnez un alchimiste qui vit dans une contrée dans laquelle les déchets sont réglementés. Vous devez donc, au fil des niveaux fabriquer les potions demandées par vos clients sans faire de déchets.\
                    Pour ce faire vous avez à votre disposition un grimoire qui vous explique le fonctionnement de la chimie local et à l'aide de diagrammes explicatifs vous savez donc quelle combinaison d'élément et de couleur\
                    va produire quel élément/couleur et quelle quantité de déchets ! Ce jeu est téléchargeable à l'adresse suivante pour Mac et pour Windows  https://waaru.itch.io/full-garbage-alchemist",
      temps      : '30-60'
    },
    {
      type       : 'video',
      src        : 'https://player.vimeo.com/video/260747477',
      titre      : 'Quidditch Manager',
      hash       : 'Quidditch',
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
      hash       : 'Sanch',
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
      hash       : 'Detour',
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
      hash       : 'World',
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
      hash       : 'Compulsif',
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
      hash       : 'Framboisette',
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
      hash       : 'Chauve',
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
      group_bool : 'group',
      titre      : 'XV',
      note       : '124',
      lang       : 'Unity3D, C#',
      decription : "Ce projet a pour but de vous faire développer une interface graphique sous Unity\
                     à des fin d'optimisation de processus industriels. Mise en place d'un systeme de sauvegarde \
                     (online et locale), deplacement camera, bdd, ... en somme : les sims passion industrie."
    },
    {
      duree      : '1 mois',
      group_bool : 'no-group',
      titre      : 'in-the-shadows',
      note       : '125',
      lang       : 'Unity3D, C#',
      decription : "Ce projet a pour but de vous faire développer un jeu complet nécessitant un peu d'algo et \
                    beaucoup de créativité. Shadowmatics like, ce jeu comporte des niveaux de difficulté croissante \
                    et un niveau caché ainsi qu'un mode de test."
    },
    {
      duree      : '1 semaine',
      group_bool : 'no-group',
      titre      : 'Dr-Quine',
      note       : '125',
      lang       : 'C, ASM, Python',
      decription : "Ce petit projet d'algo vous permet d'aborder les problématiques de l'auto-réplication, et vous confronte au théorème de récursion de Kleene !\
                    Le projet est à réaliser entièrement en C, puis en ASM, puis de nouveau dans le langage de votre choix (ici Python)"
    },
    {
      duree      : '3 semaines',
      titre      : 'Darkly',
      group_bool : 'group',
      note       : '125',
      lang       : 'HTML, SQL, bash, Python',
      decription : "Projet introductif à la sécurité en informatique dans le domaine spécifique du web, ce projet va vous faire disséquer un site web vulnérable. \
                    Ce faisant, vous allez développer votre propre façon de penser sécurité dans une application web et prendre conscience des problèmes liés à de \
                    simples erreurs de développement, autant d'un point de vue programmation que d'un point de vue conception."
    },
    {
      duree      : '1 mois',
      titre      : 'Hypertube',
      group_bool : 'group',
      note       : '122',
      lang       : 'NodeJS, angular, html5, scss, mongoBd, docker',
      decription : "Dernier projet de sa série, le projet Hypertube vous invite à découvrir une catégorie d'outil extrêmement puissante : les frameworks MVC. \
                    Vous apprendrez à manipuler un MVC, dans le langage de votre choix, pour réaliser un site de streaming de video téléchargées via le protocole BitTorrent."
    },
    {
      duree      : '3 mois',
      titre      : 'Matcha',
      group_bool : 'group',
      note       : '91',
      lang       : 'nodeJS, html5, css, docker, SQL, mySql',
      decription : "Ce second projet vous introduit à un outil plus évolué pour réaliser vos applications web : le micro-framework. Nous vous invitons à réaliser, \
                    dans le langage de votre choix, un site de rencontres. Les interactions entre utilisateurs seront au coeur du projet !"
    },
    {
      duree      : '2 mois',
      titre      : 'Camagru',
      group_bool : 'no-group',
      note       : '117',
      lang       : 'php, html5, css, js',
      decription : "Ce premier projet vous remet dans le bain après la piscine PHP : vous allez devoir réaliser, en PHP, un petit site Instagram-like permettant à des \
                    utilisateurs de réaliser et partager des photo-montages. Vous allez ainsi implémenter, à mains nues (les frameworks sont interdits), les fonctionnalités\
                    de base rencontrées sur la majorité des sites possédant une base utilisateur."
    },
    {
      duree      : '4 mois et demi',
      titre      : 'Ft_printf',
      group_bool : 'no-group',
      note       : '98',
      lang       : 'c',
      decription : "Vous en avez assez de faire vos affichages en alternant ft_putstr et ft_putnbr ? Vous n'avez pas le droit d'utiliser printf ? \
                    Recodez le vôtre ! Ce sera l'occasion de découvrir une feature du C - les fonctions variadiques - et de vous entraîner à la gestion fine des options d'affichage. \
                    Vous aurez ensuite le droit d'utiliser votre printf dans tous vos projets ultérieurs."
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
