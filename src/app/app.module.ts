import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { RouterModule, Routes } from "@angular/router";
import { ValidateLoginService } from "./services/validate-login.service";
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile/1',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [ ValidateLoginService ]
  }
];


@NgModule ( {
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot ( routes )
  ],
  providers: [ ApiService, ValidateLoginService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
