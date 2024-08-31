import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from './quote-response.interface'; 

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'https://api-dev.supra.la';

  constructor(private http: HttpClient) { }

  getQuote(initialCurrency: string, finalCurrency: string, initialAmount: number): Observable<QuoteResponse> {
    const url = `${this.apiUrl}/v1/exchange/quote`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
      'X-API-TYPE': 'public'
    });
    const body = {
      initialCurrency,
      finalCurrency,
      initialAmount
    };

    return this.http.post<QuoteResponse>(url, body, { headers }); 
  }

  private getToken(): string {
    return 'your_token_here';
  }
}
