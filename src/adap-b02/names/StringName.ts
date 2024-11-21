import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export class StringName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;
    protected name: string = "";
    protected noComponents: number = 0;

    constructor(other: string, delimiter?: string) {
       this.name = other; 
        if (delimiter !== undefined) {                  //falls delimiter angegeben 
           this.delimiter = delimiter;

        } else {                        
            this.delimiter = DEFAULT_DELIMITER;    // delimiter nicht angegeben
        }
        this.length= this.getNoComponents();
    }

    public asString(delimiter: string = this.delimiter): string {
        let result = '';
        
        for (let i=0; i< this.name.length;i++){
        result += this.name[i];             //jede Komponenete im Array durchlaufen und hinzufügen 

           
        }
        return result
    }

    public asDataString(): string {
        let result = '';
        let i = 0;
        
        while ( i< this.name.length){
        
            if (this.name[i]== ESCAPE_CHARACTER && this.name[i+1]== this.delimiter){   //wenn Escape-Zeichen auf delimiter folgt 
            
                result += this.delimiter;
                        
            } else {

                result += this.name[i];
                
            }
        }
        return result
    }

    public isEmpty(): boolean {
        return this.name == "" ;           //pruefe ob Komponenten vorhanden sind
    }

    public getDelimiterCharacter(): string {
        return this.delimiter;
    }

    public getNoComponents(): number {
        return this.name.length;              //Laenge der Komponente
    }

    public getComponent(x: number): string {
        return this.name[x];                  //Komponenete an der Stelle x
    }

    public setComponent(n: number, c: string): void {
        const components = this.name.split(this.delimiter); // Aufteilung in einzelne Komponenete
        components[n] = c;                 // c ist Komponente an Stelle n
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }

    public insert(n: number, c: string): void {
        
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(n,0,c);             //c an Stelle n hinzufügen 
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
        
    }

    public append(c: string): void {

            this.name += this.delimiter + c;                    // am Ende c hinzufügen
        
    }

    public remove(n: number): void {
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(n,1);                       // Stelle n löschen
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }

    public concat(other: Name): void {
        for(let i=0; i < other.getNoComponents(); i++){
            this.append(other.getComponent(i))     //other hinzufuegen
           }
    }

}