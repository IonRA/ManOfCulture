import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent, LogInDialog, SignUpDialog } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoursesComponent, CourseDialog } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UsersComponent, UserDialog } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { UsersService } from './_services/users.service';
import { AppConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from './_services/courses.service';
import { CourseComponent } from './course/course.component';
import { NotificationService } from './_services/notification.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { EnrollmentsService } from './_services/enrollments.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CourseStagesService } from './_services/course-stages.service';
import { RoleGuardService } from './auth/role-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogInDialog,
    SignUpDialog,
    UserDialog,
    CourseDialog,
    CoursesComponent,
    HomeComponent,
    UsersComponent,
    PageNotFoundComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [
    AppConfig,
    AuthService,
    AuthGuardService,
    RoleGuardService,
    NotificationService,
    UsersService,
    CoursesService,
    EnrollmentsService,
    CourseStagesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LogInDialog,
    SignUpDialog,
    UserDialog,
    CourseDialog
  ]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
