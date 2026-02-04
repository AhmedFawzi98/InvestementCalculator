import { Component } from '@angular/core';
import { InvestmentFormComponent } from './investment-form/investment-form.component.';
import { CalculatorService } from './calculator.service';
import { InvestmentFormValue } from './models/investment-form-value.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResult } from './models/investment-result.model';

@Component({
    selector: 'app-calculator',
    imports: [InvestmentFormComponent, InvestmentResultsComponent],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
    investmentResults!: InvestmentResult[];
    constructor(private calculatorService: CalculatorService) {}

    onCalculate(investmentFormValue: InvestmentFormValue) {
        this.investmentResults =
            this.calculatorService.calculateInvestmentResults(investmentFormValue);
    }
}
