import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {
  studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 }
  ];

  getStudenti() {
    return this.studenti;
  }

  getStudenteById(id: number) {
    return this.studenti.find(studente => studente.id === id);
  }

  // Aggiungi questi metodi mancanti
  aggiungiStudente(nuovoStudente: any) {
    const id = this.generaId();
    this.studenti.push({ ...nuovoStudente, id });
  }

  rimuoviStudente(id: number) {
    const index = this.studenti.findIndex(studente => studente.id === id);
    if (index !== -1) {
      this.studenti.splice(index, 1);
    }
  }

  private generaId(): number {
    return this.studenti.length > 0 ? Math.max(...this.studenti.map(s => s.id)) + 1 : 1;
  }
}