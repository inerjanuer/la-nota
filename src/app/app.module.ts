import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ProgramasComponent } from './programas/programas.component';
import { IngenieriaComponent } from './ingenieria/ingenieria.component';



const routes: Routes= [
  	{path: '', redirectTo: '/inicio', pathMatch: 'full'},
	  {path: 'inicio', component: InicioComponent},
    {path: 'programas', component: ProgramasComponent},
    {path: 'ingenieria', component: IngenieriaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProgramasComponent,
    IngenieriaComponent
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
