import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/cursos/agregar-curso.component';
import { EditarCursoComponent } from './components/cursos/editar-curso.component';
import { AgregarEducacionComponent } from './components/educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarEncabezadoComponent } from './components/encabezado/editar-encabezado.component';
import { AgregarExperienciaComponent } from './components/experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component'
import { AgregarProyectoComponent } from './components/proyectos/agregar-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { AgregarSkillComponent } from './components/skills/agregar-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'agregar-curso', component: AgregarCursoComponent},
  {path: 'editar-curso/:id', component: EditarCursoComponent},
  {path: 'agregar-educacion', component: AgregarEducacionComponent},
  {path: 'editar-educacion/:id', component: EditarEducacionComponent},
  {path: 'editar-encabezado/:id', component: EditarEncabezadoComponent},
  {path: 'agregar-experiencia', component: AgregarExperienciaComponent},
  {path: 'editar-experiencia/:id', component: EditarExperienciaComponent},
  {path: 'agregar-proyecto', component: AgregarProyectoComponent},
  {path: 'editar-proyecto/:id', component: EditarProyectoComponent},
  {path: 'agregar-skill', component: AgregarSkillComponent},
  {path: 'editar-skill/:id', component: EditarSkillComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
