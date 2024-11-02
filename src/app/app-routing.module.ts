import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path: 'chat',
  component: ChatDashboardComponent
},
{path: '',
  component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
