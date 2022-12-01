import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { ProduitMockService } from './produits.mock.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

produits: Produit[] | undefined;

  constructor(private produitService: ProduitMockService  ) { }

  ngOnInit(): void {
    this.produits = this.produitService.getProduit();
  }

}
