import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AmbientBackgroundComponent } from './shared/components/ambient-background/ambient-background.component';
import { AiAssistantComponent } from './ai-assistant/ai-assistant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    AmbientBackgroundComponent,
    AiAssistantComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
