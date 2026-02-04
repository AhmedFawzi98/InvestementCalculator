import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent],
    standalone: true,
})
export class AppComponent {}
