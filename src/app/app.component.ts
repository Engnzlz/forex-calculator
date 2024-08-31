import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrxCalculatorComponent } from "./components/frx-calculator/frx-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrxCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forex-calculator';
}
