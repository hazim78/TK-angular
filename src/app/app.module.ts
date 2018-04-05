import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AppNavbarComponent} from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TotalListComponent } from './total-list/total-list.component';
import { LogListComponent } from './log-list/log-list.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';
import 'howler';

const appRoutes: Routes = [
  { path: 'dashboard', component: TotalListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    TotalListComponent,
    LogListComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})

export class AppModule { }
