import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IntroComponent } from './intro/intro.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    SearchBarComponent,
    IntroComponent,
    CharacterListComponent,
    FooterComponent,
  ]
})
export class AppComponent { title = 'anime-chat' }
