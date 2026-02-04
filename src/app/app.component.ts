import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { CalculatorComponent } from "./features/calculator/calculator.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, CalculatorComponent],
    standalone: true,
})
export class AppComponent {}
