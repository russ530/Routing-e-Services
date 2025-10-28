import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './studente.html', // SENZA .component
  styleUrls: ['./studente.css']
})
export class Studente {
  @Input() id!: number;
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;
  
  mostraMedia = false;

  toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }

  getColoreMedia(): string {
    if (this.mediaVoti < 5) return 'bg-danger';
    if (this.mediaVoti < 7) return 'bg-warning';
    return 'bg-success';
  }
}