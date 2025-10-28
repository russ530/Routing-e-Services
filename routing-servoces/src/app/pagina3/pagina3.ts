import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // AGGIUNGI QUESTO IMPORT
import { Studente } from '../studente/studente';
import { StudentiService } from '../services/studente-services';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [Studente, CommonModule, RouterLink], // AGGIUNGI RouterLink QUI
  templateUrl: './pagina3.html',
  styleUrls: ['./pagina3.css']
})
export class Pagina3 implements OnInit {
  studenti: any[] = [];

  // Rendi il servizio pubblico per il template
  constructor(public studentiService: StudentiService) {}

  ngOnInit() {
    this.caricaStudenti();
  }

  // Metodo per caricare gli studenti
  caricaStudenti() {
    this.studenti = this.studentiService.getStudenti();
  }

  // Metodo per ottenere la media generale
  get mediaGenerale(): number {
    if (this.studenti.length === 0) return 0;
    const somma = this.studenti.reduce((acc, studente) => acc + studente.mediaVoti, 0);
    return Math.round((somma / this.studenti.length) * 100) / 100;
  }

  // Metodo per aggiungere uno studente di esempio
  aggiungiStudenteEsempio() {
    const nomi = ['Giulia', 'Francesco', 'Sofia', 'Matteo', 'Alessia'];
    const nuovoNome = nomi[Math.floor(Math.random() * nomi.length)];
    
    this.studentiService.aggiungiStudente({
      nome: nuovoNome,
      classe: '5D',
      mediaVoti: +(4 + Math.random() * 4).toFixed(1)
    });
    
    this.caricaStudenti();
  }

  // Metodo per rimuovere uno studente
  rimuoviStudente(id: number) {
    this.studentiService.rimuoviStudente(id);
    this.caricaStudenti();
  }

  // Metodo per alternare la visibilità della media
  toggleMediaStudente(id: number) {
    const studente = this.studenti.find(s => s.id === id);
    if (studente) {
      studente.mostraMedia = !studente.mostraMedia;
    }
  }
}