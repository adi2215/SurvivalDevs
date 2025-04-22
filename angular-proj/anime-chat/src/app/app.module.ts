import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { BotsComponent } from './bots/bots.component';

// Импортируем standalone компоненты
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IntroComponent } from './intro/intro.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterCardComponent } from './character-card/character-card.component';

const routes: Routes = [
  { path: '', component: BotsComponent },
  { path: 'chat/:id', component: ChatComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BotsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

    // Standalone компоненты сюда
    HeaderComponent,
    SearchBarComponent,
    IntroComponent,
    CharacterListComponent,
    CharacterCardComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
