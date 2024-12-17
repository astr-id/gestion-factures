import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import du module pour les formulaires réactifs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactureComponent } from './components/facture/facture.component';
import { AddFactureComponent } from './components/facture/add-facture/add-facture.component';
import { ListFactureComponent } from './components/facture/list-facture/list-facture.component';
import { Factures2Component } from './components/factures2/factures2.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FactureComponent,
    AddFactureComponent,
    ListFactureComponent,
    Factures2Component,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
