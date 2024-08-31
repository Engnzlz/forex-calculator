import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { QuoteResponse } from '../../services/quote-response.interface';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
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
  initialAmount = 200000;
  quote: QuoteResponse | undefined;

  constructor(private calculatorService: CalculatorService) {}

  getQuote() {
    this.calculatorService.getQuote(this.initialCurrency, this.finalCurrency, this.initialAmount)
      .subscribe((response: QuoteResponse) => {
        this.quote = response;
      }, error => {
        console.error('Error al obtener la cotización:', error);
      });
  }
}
