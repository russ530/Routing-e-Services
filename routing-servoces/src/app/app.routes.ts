import { Routes } from '@angular/router';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2} from './pagina2/pagina2';
import { Pagina3} from './pagina3/pagina3';
import { DettaglioStudente} from './dettaglio-studente/dettaglio-studente';

export const routes: Routes = [
  { path: '', redirectTo: 'pagina1', pathMatch: 'full' },
  { path: 'pagina1', component: Pagina1 },
  { path: 'pagina2', component: Pagina2},
  { path: 'pagina3', component: Pagina3 },
  // Rotta parametrica per dettaglio studente
  { path: 'studente/:id', component: DettaglioStudente},
  // Rotta di fallback
  { path: '**', redirectTo: 'pagina1' }
];