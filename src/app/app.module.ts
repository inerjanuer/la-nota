import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ProgramasComponent } from './programas/programas.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { IngenieriaComponent } from './ingenieria/ingenieria.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EconomicaComponent } from './economica/economica.component';
import { EducativaComponent } from './educativa/educativa.component';
import { ResumenComponent } from './resumen/resumen.component';
import { TablaComponent } from './tabla/tabla.component';



const routes: Routes= [
  	{path: '', redirectTo: '/inicio', pathMatch: 'full'},
	  {path: 'inicio', component: InicioComponent},
    {path: 'programas', component: ProgramasComponent},
    {path: 'ingenieria', component: IngenieriaComponent},
    {path: 'administrador', component: AdministradorComponent},
    {path: 'economica', component: EconomicaComponent},
    {path: 'educativa', component: EducativaComponent},
    {path: 'universidad', component: UniversidadComponent},
    {path: 'resumen', component: ResumenComponent},
    {path: 'tabla', component: TablaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProgramasComponent,
    IngenieriaComponent,
    AdministradorComponent,
    EconomicaComponent,
    EducativaComponent,
    UniversidadComponent,
    ResumenComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
