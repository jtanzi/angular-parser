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
    ' lemons, sliced into 1/4-in slices',
    'umbrella, neatly closed and dusted',
    'onions, chopped',
    'parsley, finely chopped',
    'parmesean, finely grated',
    'cheddar cheese, coarsely shredded',
    'lemon zest, grated from a fresh lemon',
    'parsley, washed and minced'
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
