import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddactorComponent } from './addactor/addactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ErrorComponent } from './error/error.component';
import { ActortomovieComponent } from './actortomovie/actortomovie.component';

const week10Routes:Routes=[
  {path: 'addactor', component: AddactorComponent},
  {path: 'listactors', component: ListactorsComponent},
  {path: 'updateactor', component: UpdateactorComponent},
  {path: 'deleteactor', component: DeleteactorComponent},

  {path: 'addmovie', component: AddmovieComponent},
  {path: 'listmovies', component: ListmoviesComponent},
  {path: 'deletemovie', component: DeletemovieComponent},
  {path: "", redirectTo: "/listactors", pathMatch: "full" },

  {path: 'actortomovie', component: ActortomovieComponent},

  {path: '**', component: ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddactorComponent,
    ListactorsComponent,
    DeleteactorComponent,
    UpdateactorComponent,
    AddmovieComponent,
    ListmoviesComponent,
    DeletemovieComponent,
    ErrorComponent,
    ActortomovieComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(week10Routes, { useHash: true }), HttpClientModule, FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
