import { Injectable } from '@angular/core';

export interface Facture {
  numero: number;
  montant: number;
  nomClient: string;
  villeClient: string;
}

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  private factures: Facture[] = [
    { numero: 5024, montant: 50, nomClient: 'DURANT', villeClient: 'Blagnac' },
  ];

  getFactures() {
    return this.factures;
  }

  addFacture(facture: Facture) {
    this.factures.push(facture);
  }
}
