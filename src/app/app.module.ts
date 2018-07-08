import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  MatButtonModule, 
          MatCheckboxModule, 
          MatDatepickerModule, 
          MatFormFieldModule,
          MatInputModule, 
          MatRadioModule, 
          MatSelectModule, 
          MatSliderModule,
          MatSlideToggleModule, 
          MatToolbarModule, 
          MatListModule, 
          MatGridListModule,
          MatCardModule, 
          MatIconModule, 
          MatProgressSpinnerModule, 
          MatDialogModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service'; 
import { LeaderService } from './services/leader.service';
import { FeedbackService } from './services/feedback.service';

//import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSliderModule,
    MatSlideToggleModule, 
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule,
    MatCardModule, 
    MatIconModule, 
    MatProgressSpinnerModule, 
    MatDialogModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ DishService,
    PromotionService,
    LeaderService,
    FeedbackService,
    { provide: 'BaseURL', useValue: baseURL},
    ProcessHTTPMsgService ],
    entryComponents: [
      LoginComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
