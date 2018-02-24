import { Component, OnInit } from '@angular/core';
import { Parser } from '../parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dictionary-Based Parser'
  textSamples = [
    ' lemon, sliced into 1/4-in slices',
    'umbrella, neatly closed and dusted',
    'onion, chopped',
    'parsley, finely chopped',
    'parmesean, finely grated',
    'cheddar cheese, coarsely shredded'
  ];

  parser: Parser;
  dictionary: any;

  constructor ( ){
    this.parser = new Parser();
  }

  ngOnInit() {
    this.parser.getDictionary();
    console.log(this.parser.getWords(this.textSamples));
    
  }



}
