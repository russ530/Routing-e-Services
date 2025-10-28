import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentiService } from '../services/studente-services';

@Component({
  selector: 'app-dettaglio-studente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dettaglio-studente.html', // SENZA .component
  styleUrls: ['./dettaglio-studente.css']
})
export class DettaglioStudente implements OnInit {
  studente: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentiService: StudentiService
  ) {}

  ngOnInit() {
    this.caricaDettaglioStudente();
  }

  caricaDettaglioStudente() {
    this.isLoading = true;
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (isNaN(id)) {
      this.router.navigate(['/pagina3']);
      return;
    }

    const listaStudenti = this.studentiService.getStudenti();
    let trovato = false;
    
    for (let i = 0; i < listaStudenti.length; i++) {
      if (listaStudenti[i].id === id) {
        this.studente = listaStudenti[i];
        trovato = true;
        break;
      }
    }

    if (!trovato) {
      this.router.navigate(['/pagina3']);
      return;
    }

    this.isLoading = false;
  }

  getColoreMedia(): string {
    if (!this.studente) return 'bg-secondary';
    
    if (this.studente.mediaVoti < 5) return 'bg-danger';
    if (this.studente.mediaVoti < 7) return 'bg-warning';
    return 'bg-success';
  }

  getGiudizio(): string {
    if (!this.studente) return '';
    
    if (this.studente.mediaVoti < 5) return 'Insufficiente';
    if (this.studente.mediaVoti < 6) return 'Sufficiente';
    if (this.studente.mediaVoti < 7) return 'Buono';
    if (this.studente.mediaVoti < 8) return 'Distinto';
    return 'Ottimo';
  }
}