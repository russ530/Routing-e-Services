import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
selector: 'app-studente',
imports: [CommonModule],
templateUrl: './studente.html',
styleUrl: './studente.css'
})
export class Studente {
@Input() nome!: string;
@Input() classe!: string;
}