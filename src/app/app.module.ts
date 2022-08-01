import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AgregarExperienciaComponent } from './components/experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { AgregarCursoComponent } from './components/cursos/agregar-curso.component';
import { EditarCursoComponent } from './components/cursos/editar-curso.component';
import { AgregarEducacionComponent } from './components/educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarEncabezadoComponent } from './components/encabezado/editar-encabezado.component';
import { AgregarProyectoComponent } from './components/proyectos/agregar-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { AgregarSkillComponent } from './components/skills/agregar-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    SkillsComponent,
    ProyectosComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    EditarEncabezadoComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent,
    AgregarSkillComponent,
    EditarSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
