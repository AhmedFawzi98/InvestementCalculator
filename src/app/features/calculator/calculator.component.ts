import { Component } from '@angular/core';
import { InvestmentFormComponent } from './investment-form/investment-form.component.';
import { CalculatorService } from './calculator.service';
import { InvestmentFormValue } from './models/investment-form-value.model';

@Component({
    selector: 'app-calculator',
    imports: [InvestmentFormComponent],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
    constructor(private calculatorService: CalculatorService) {}

    onCalculate(investmentFormValue: InvestmentFormValue) {
        const investmentResult =
            this.calculatorService.calculateInvestmentResults(investmentFormValue);
        console.log(investmentResult);
    }
}
