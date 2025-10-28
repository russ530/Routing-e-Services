import { Component, input } from '@angular/core';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
selector: 'app-root',
imports: [Pagina1,Pagina2,RouterOutlet,RouterLink],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {

}