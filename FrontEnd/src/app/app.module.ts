import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FotoDePerfilComponent } from './components/foto-de-perfil/foto-de-perfil.component';
import { DescargaCurriculumComponent } from './components/descarga-curriculum/descarga-curriculum.component';
import { CurriculumPdfComponent } from './components/curriculum-pdf/curriculum-pdf.component';
import { NombreComponent } from './components/nombre/nombre.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    FotoDePerfilComponent,
    DescargaCurriculumComponent,
    CurriculumPdfComponent,
    NombreComponent,
    TituloComponent,
    AccordionComponent,
    ModalLoginComponent,
    SobreMiComponent,
    HabilidadesComponent,
    SkillsComponent,
    IdiomasComponent,
    EstudiosComponent,
    ExperienciaLaboralComponent,
    ProyectosComponent,
    ContactosComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
