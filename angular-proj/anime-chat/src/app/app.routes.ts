import { Routes } from '@angular/router';
import { BotsComponent } from './bots/bots.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bots', pathMatch: 'full' },
  { path: 'bots', component: BotsComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'login', component: LoginComponent }
];
