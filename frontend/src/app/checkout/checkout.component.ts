import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productName!: string ;
  productPrice!: number ;
  quantity!: number ;
  subTotal : number = 0
  total : number = 0
  buttonDecreaseClicked: boolean = false;
  buttonIncreaseClicked: boolean = false;
  isShipToDifferentAddress: boolean = false;
  produits: any[] = [];
  paymentForm: FormGroup;
  showCreditCardLogos: boolean = false;
  receivedData: string = '';

  constructor(private elementRef: ElementRef,private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
    this.paymentForm = this.formBuilder.group({
    paymentMethod: ['']
  });}



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productName = params['productName'];
      this.productPrice = params['productPrice'];
      this.quantity = params['quantity'];
      this.receivedData = `${this.productName} - ${this.productPrice} - ${this.quantity}`;
    });
    console.log('receivedData', this.receivedData); 
    const nouveauProduit = {
      productName: this.productName,
      productPrice: this.productPrice,
      quantity: this.quantity,
      subTotal: this.productPrice * this.quantity // Calcul du sous-total en fonction du prix et de la quantité
    };
  
    this.produits.push(nouveauProduit);

    this.subTotal = this.productPrice * this.quantity
  }

  onCheckboxChange() {
    console.log('Checkbox selection changed. New value:', this.isShipToDifferentAddress);
    // Autres actions à effectuer en fonction de l'état de la sélection du checkbox
  }
  
  onPaymentMethodPaypal(){
    this.paymentForm.value.paymentMethod = 'paypal'
  }
  onPaymentMethodChange() { 
    const selectedValue = this.paymentForm.value.paymentMethod;
    this.showCreditCardLogos = (selectedValue === 'credit-card');
  }

  deleteProduct(index: number) {
    // Supprimez le produit du tableau en utilisant son index
    this.produits.splice(index, 1);
  }
 
   
  
  updateTotal() {
    this.subTotal = this.quantity * this.productPrice;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
    this.buttonDecreaseClicked = true;
    setTimeout(() => {
      this.buttonDecreaseClicked = false;
    }, 500);
    this.updateTotal();
  }

  increaseQuantity() {
    this.quantity++;
    this.buttonIncreaseClicked = true;
    setTimeout(() => {
      this.buttonIncreaseClicked = false;
    }, 500);
    this.updateTotal();
  }



}
