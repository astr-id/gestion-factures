import { Component, OnInit } from '@angular/core';
import { FactureService, Facture } from '../../../services/facture.service';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.scss'],
  standalone: false,
})
export class ListFactureComponent implements OnInit {
  factures: Facture[] = [];

  constructor(private factureService: FactureService) {}

  ngOnInit() {
    this.factures = this.factureService.getFactures();
  }
}
