import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProjectsComponent } from './projects/projects.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetDetailsComponent } from './projet-details/projet-details.component';
import { GalleryProjectComponent } from './gallery-project/gallery-project.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProjetEcoleComponent } from './projet-ecole/projet-ecole.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AboutMeComponent } from './about-me/about-me.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ProjectsComponent,
    ParcoursComponent,
    ContactComponent,
    ProjetDetailsComponent,
    GalleryProjectComponent,
    ProjetEcoleComponent,
    AboutMeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
