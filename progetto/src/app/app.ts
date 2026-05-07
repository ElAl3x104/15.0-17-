import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './foo/foo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('progetto');
}
