import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../models/investment-result.model';
import { CurrencyPipe } from '@angular/common';
@Component({
    selector: 'app-investment-result',
    imports: [CurrencyPipe],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
    @Input({ required: true }) investmentResults!: InvestmentResult[];
}
