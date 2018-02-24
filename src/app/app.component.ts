import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dictionary-Based Parser Pipe'
  textSamples = [
    'lemon, sliced into 1/4-in slices',
    'umbrella, neatly closed and dusted',
    'onion, chopped',
    'parsley, finely chopped',
    'parmesean, finely grated',
    'cheddar cheese, coarsely shredded'
  ];
}
