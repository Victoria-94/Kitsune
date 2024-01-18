import { Component } from '@angular/core';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {
  welcomeMessage: string ='Bienvenido a tu perfil de Angular!';
    

}
