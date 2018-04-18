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
import { LoaderComponent } from './Components/loader/loader.component';
import {LoaderService} from './Services/loader.service';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import {UserAccessService} from './Services/user-access.service';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { FilterListPipe } from './Pipes/filter-list.pipe';
import { SafeHtmlPipe } from './Pipes/safe-html.pipe';

const appRoutes: Routes = [  
  { path: '',redirectTo: '/Dashboard',pathMatch: 'full'},
  {path:'Dashboard', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'addquestion',component:AddQuestionPopupComponent},
  {path:'aboutus',component:AboutMeComponent},
  {path:'admin/login',component:AdminLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddQuestionPopupComponent,
    QuestionsComponent,
    LoaderComponent,
    AboutMeComponent,
    AdminLoginComponent,
    FilterListPipe,
    SafeHtmlPipe
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
  providers: [CategoryTypeService,ManageQuestionService,LoaderService,UserAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
