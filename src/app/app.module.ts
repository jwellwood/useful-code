import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { ListComponent } from "./components/list/list.component";
import { PageContainerComponent } from "./layout/page-container/page-container.component";
import { CodeCardComponent } from "./components/code-card/code-card.component";
import { BackButtonComponent } from "./utils/buttons/back-button/back-button.component";
import { AddButtonComponent } from "./utils/buttons/add-button/add-button.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { SubmitButtonComponent } from "./utils/buttons/submit-button/submit-button.component";
import { HighlightService } from "./services/highlight.service";
import { CodeBlockComponent } from "./components/code-block/code-block.component";
import { SpinnerComponent } from "./utils/spinner/spinner.component";
import { LoginComponent } from "./components/login/login.component";
import { ListIconComponent } from "./utils/icons/list-icon/list-icon.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CardHeaderIconComponent } from './utils/icons/card-header-icon/card-header-icon.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    PageContainerComponent,
    CodeCardComponent,
    BackButtonComponent,
    AddButtonComponent,
    AddFormComponent,
    SubmitButtonComponent,
    CodeBlockComponent,
    SpinnerComponent,
    LoginComponent,
    ListIconComponent,
    CardHeaderIconComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule {}
