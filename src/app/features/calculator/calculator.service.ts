import { Injectable } from '@angular/core';
import { InvestmentFormValue } from './models/investment-form-value.model';
import { InvestmentResult } from './models/investment-result.model';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
    calculateInvestmentResults(investmentFormValue: InvestmentFormValue) {
        const annualData: InvestmentResult[] = [];
        let investmentValue = investmentFormValue.initialInvestment;

        for (let i = 0; i < investmentFormValue.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear =
                investmentValue * (investmentFormValue.expectedReturn / 100);
            investmentValue += interestEarnedInYear + investmentFormValue.annualInvestment;
            const totalInterest =
                investmentValue -
                investmentFormValue.annualInvestment * year -
                investmentFormValue.initialInvestment;

            annualData.push({
                year: year,
                annualInvestment: investmentFormValue.annualInvestment,
                totalAmountInvested:
                    investmentFormValue.initialInvestment +
                    investmentFormValue.annualInvestment * year,
                interest: interestEarnedInYear,
                totalInterest: totalInterest,
                valueEndOfYear: investmentValue,
            });
        }

        return annualData;
    }
}
