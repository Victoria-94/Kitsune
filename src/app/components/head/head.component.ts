import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
    welcomeMessage: string = 'Kitsune';
    // Métodos relacionados con el mensaje de bienvenida
    
}
