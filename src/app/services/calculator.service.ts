import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QuoteResponse } from './quote-response.interface'; 

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'https://api-dev.supra.la';
  private clientId = '9da4b4e4-9a69-409f-84f1-95275118d1c9';
  private clientSecret = 'osGdxxHJshCsErYSn3FnsoZ5XdamAAJx6hr5n+ow2xewdqxmQ6YymCQt7VTCUOExHTJA90RU5u8H2e4+h4/wJAI0hYZvSuqIVpawnrdg/XWnduSqOAHV/MlckPeRKTMnQvCaEDwV+3fJjV94WXTe0RA+E0LO68n/AFkNl7S83JNPgKQfshLYaJA/jsqsISf91YuEezTDwS3Ml6LqgqD48XdeLOuRzlZAEIsBJdGPX4ndX8whrxPuRl2NDb9aspSsDhWDp/2wOCfavKOtOKIT7tPdsFKuXNxRukzsxTPnfgQpkkywhgl5IlADwTzAtWU4vUTFPtxOM+ZgQuNoIU5kow==';

  constructor(private http: HttpClient) { }

  private getToken(): Observable<string> {
    const url = `${this.apiUrl}/v1/auth/token`;
    const body = {
      clientId: this.clientId,
      clientSecret: this.clientSecret
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-TYPE': 'public'
    });

    return this.http.post<{ token: string }>(url, body, { headers }).pipe(
      map(response => response.token)
    );
  }

  getQuote(initialCurrency: string, finalCurrency: string, initialAmount: number): Observable<QuoteResponse> {
    return this.getToken().pipe(
      switchMap(token => {
        const url = `${this.apiUrl}/v1/exchange/quote`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-API-TYPE': 'public'
        });
        const body = {
          initialCurrency,
          finalCurrency,
          initialAmount
        };

        return this.http.post<QuoteResponse>(url, body, { headers });
      })
    );
  }
}
