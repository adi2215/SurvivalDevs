import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css'],
  imports: [RouterModule, CommonModule]
})
export class BotsComponent {
  bots = [
    { id: 1, name: 'Naruto', description: 'Believe it!', avatar: 'assets/naruto.jpg' },
    { id: 2, name: 'Luffy', description: 'King of Pirates!', avatar: 'assets/luffy.jpg' },
  ];

  constructor(private router: Router) {}

  selectBot(bot: any) {
    this.router.navigate(['/chat', bot.id], { state: { bot } });
  }
}
