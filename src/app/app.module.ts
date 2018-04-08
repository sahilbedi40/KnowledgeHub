import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { FormsModule }   from '@angular/forms';
// import {FirebaseApp} from '@firebase/app-types';


import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './Components/questions/questions.component';
import {CategoryTypeService} from './Services/category-type.service';
import {ManageQuestionService} from './Services/manage-question.service';
import { AddQuestionPopupComponent } from './Components/add-question-popup/add-question-popup.component';

const appRoutes: Routes = [  
  { path: '',redirectTo: '/Dashboard',pathMatch: 'full'},
  {path:'Dashboard', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'addquestion',component:AddQuestionPopupComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddQuestionPopupComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [CategoryTypeService,ManageQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
