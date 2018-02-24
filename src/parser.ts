import { HttpClient, HttpHandler } from '@angular/common/http';
var json = require('./dictionary.json');

export class Parser {

    results: any;
    dictionary: any;

    constructor( ) {
        this.dictionary = json;
    }

    getDictionary(): void {
        console.dir(this.dictionary);
    }

    getWords(samples: string[]): string[] {
        let regexString = '';
        Object.keys(this.dictionary).forEach((key) => {
            console.log(key);
            regexString += key + '|';
        });
        const regex = new RegExp(regexString.substring(0, regexString.length - 1));
        console.log(regex);
        console.log(samples);
        let words = [];
        samples.forEach((s) => {
            if (regex.test(s)) {
                console.log(regex.exec(s)[0]);
                words.push(s.match(regex)[0]);
            }
            
            // words.push(s.match(regex));

        });
        return words;
    }
}