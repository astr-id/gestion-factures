import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FactureService, Facture } from '../../../services/facture.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.scss'],
  standalone: false,
})
export class AddFactureComponent {
  factureForm: FormGroup;

  constructor(private fb: FormBuilder, private factureService: FactureService) {
    this.factureForm = this.fb.group({
      numero: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Valide si c'est un numéro
      montant: ['', [Validators.required, Validators.min(0)]], // Montant positif
      nomClient: ['', [Validators.required, Validators.minLength(3)]], // Minimum 3 caractères
      villeClient: ['', [Validators.required, Validators.minLength(3)]], // Minimum 3 caractères
    });
  }

  onSubmit() {
    if (this.factureForm.valid) {
      const nouvelleFacture: Facture = this.factureForm.value;
      this.factureService.addFacture(nouvelleFacture);
      alert('Facture ajoutée avec succès !');
      this.factureForm.reset(); // Réinitialise le formulaire
    } else {
      alert('Le formulaire contient des erreurs.');
    }
  }
}
