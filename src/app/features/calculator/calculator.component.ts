import { Component } from '@angular/core';
import { InvestmentFormComponent } from './investment-form/investment-form.component.';

@Component({
    selector: 'app-calculator',
    imports: [InvestmentFormComponent],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css',
})
export class CalculatorComponent {}
