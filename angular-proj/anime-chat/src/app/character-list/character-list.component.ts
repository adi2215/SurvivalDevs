import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  standalone: true,
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  imports: [CommonModule, CharacterCardComponent]
})
export class CharacterListComponent {
  characters = [
    { name: 'Naruto', image: 'assets/naruto.jpg', description: 'Believe it!' },
    { name: 'Luffy', image: 'assets/luffy.jpg', description: 'I’m gonna be King of the Pirates!' },
  ];
}
