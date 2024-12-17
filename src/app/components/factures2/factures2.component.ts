import { Component, OnInit } from '@angular/core';
import { FactureService, Facture } from '../../services/facture.service';

@Component({
  selector: 'app-factures2',
  templateUrl: './factures2.component.html',
  styleUrls: ['./factures2.component.scss'],
  standalone: false,
})
export class Factures2Component implements OnInit {
  factures: Facture[] = [];

  constructor(private factureService: FactureService) {}

  ngOnInit() {
    this.factures = this.factureService.getFactures();
  }
}
