import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentFormValue } from '../models/investment-form-value.model';

@Component({
    selector: 'app-investment-form',
    imports: [FormsModule],
    templateUrl: './investment-form.component..html',
    styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent {
    initialInvestment = 1000;
    annualInvestment = 100;
    expectedReturn = 4;
    duration = 10;

    @Output() calculate = new EventEmitter<InvestmentFormValue>();

    onSubmit() {
        const investmentFormValue: InvestmentFormValue = {
            initialInvestment: this.initialInvestment,
            annualInvestment: this.annualInvestment,
            expectedReturn: this.expectedReturn,
            duration: this.duration,
        };

        this.calculate.emit(investmentFormValue);
    }
}
