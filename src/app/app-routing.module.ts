import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProjectsComponent} from './projects/projects.component'
import{ParcoursComponent} from './parcours/parcours.component'
import{ContactComponent}  from './contact/contact.component'
import{PrincipalComponent}  from './principal/principal.component'

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'home',
    component: PrincipalComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
      path: 'parcours',
      component: ParcoursComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
    path: 'about_me',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
