import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterBillComponent } from './features/cufe/pages/register-bill/register-bill.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterBillComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cufe-app';
}
