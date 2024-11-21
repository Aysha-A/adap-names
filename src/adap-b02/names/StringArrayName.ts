import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export class StringArrayName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;
    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
        this.components = other; 
        if (delimiter !== undefined) {                  //falls delimiter angegeben 
           this.delimiter = delimiter;

        } else {                        
            this.delimiter = DEFAULT_DELIMITER;    // delimiter nicht angegeben
        }
    }

    public asString(delimiter: string = this.delimiter): string {
        
        let resultString = '';
        
        for (let i=0; i< this.components.length;i++){
        resultString += this.components[i];             //jede Komponenete im Array durchlaufen und hinzufügen 

            if (i < this.components.length -1){       //delimiter zwischen jeder Komponente außer am Ende
            resultString += delimiter;        
            }
        }
        return resultString
    }

    public asDataString(): string {
        let resultDataString = '';
        
        for (let i=0; i< this.components.length;i++){
        let a = this.components[i];

        let escapecomp = a.replace(this.delimiter, ESCAPE_CHARACTER + this.delimiter); // delimiter maskieren

        resultDataString += escapecomp;             //escapecomp hinzufuegen
            if (i < this.components.length -1){       //delimiter zwischen jeder Komponente außer am Ende
            resultDataString += this.delimiter;        
            }
        }
        return resultDataString
    }

    public isEmpty(): boolean {
        return this.components.length ==0 ;           //pruefe ob Komponenten vorhanden sind
    }

    public getDelimiterCharacter(): string {
        return this.delimiter;
    }

    public getNoComponents(): number {
        return this.components.length;              //Laenge der Komponente 
    }

    public getComponent(i: number): string {
        return this.components[i];                  //Komponenete an der Stelle i
    }

    public setComponent(i: number, c: string): void {
        this.components[i] = c;                     // c ist Komponente an Stelle i
    }

    public insert(i: number, c: string): void {
        this.components.splice(i,0,c);             //c an Stelle i hinzufügen 
    }

    public append(c: string): void {
        this.components.push(c);                    // am Ende c hinzufügen
    }

    public remove(i: number): void {
        this.components.splice(i,1);                // Stelle i löschen
    }

    public concat(other: Name): void {
       for(let i=0; i < other.getNoComponents(); i++){
        this.components.push(other.getComponent(i))     //other hinzufuegen
       }
    }

}