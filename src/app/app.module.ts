import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule , 
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
