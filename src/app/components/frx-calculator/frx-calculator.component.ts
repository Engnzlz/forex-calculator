import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { QuoteResponse } from '../../services/quote-response.interface';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frx-calculator',
  standalone: true, 
  imports: [FormsModule, CommonModule],  
  templateUrl: './frx-calculator.component.html',
  styleUrls: ['./frx-calculator.component.css']
})
export class FrxCalculatorComponent {
  initialCurrency = 'COP';
  finalCurrency = 'USD';
  initialAmount: number | null = null;
  quote: QuoteResponse | undefined;
  errorMessage: string = '';
  minAmount: number = 1

  constructor(private calculatorService: CalculatorService) {}

  getQuote() {
    if (this.validateAmount()) {
      this.calculatorService.getQuote(this.initialCurrency, this.finalCurrency, this.initialAmount!)
        .subscribe((response: QuoteResponse) => {
          this.quote = response;
        }, error => {
          console.error('Error al obtener la cotización:', error);
        });
    }
  }
  validateAmount(): boolean {
    if (this.initialAmount === null || this.initialAmount === undefined) {
      this.errorMessage = 'Este campo es obligatorio.';
      return false;
    } else if (isNaN(this.initialAmount)) {
      this.errorMessage = 'Debe ingresar un número válido.';
      return false;
    } else if (this.initialAmount < this.minAmount) {
      this.errorMessage = `El monto debe ser mayor que ${this.minAmount}.`;
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}