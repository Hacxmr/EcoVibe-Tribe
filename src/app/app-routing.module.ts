import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

const routes: Routes = [
 {path: 'chat',
  component: ChatDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
