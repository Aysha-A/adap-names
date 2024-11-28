import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(other: string, delimiter?: string) {
        super();
        this.name = other; 
        if (delimiter !== undefined) {                  //falls delimiter angegeben 
           this.delimiter = delimiter;

        } else {                        
            this.delimiter = DEFAULT_DELIMITER;    // delimiter nicht angegeben
        }
        
    
    }

    public clone(): Name {
        throw new Error("needs implementation or deletion");
    }

    public asString(delimiter: string = this.delimiter): string {
        throw new Error("needs implementation or deletion");
    }

    public asDataString(): string {
        throw new Error("needs implementation or deletion");
    }

    public isEqual(other: Name): boolean {
        throw new Error("needs implementation or deletion");
    }

    public getHashCode(): number {
        throw new Error("needs implementation or deletion");
    }

    public isEmpty(): boolean {
        throw new Error("needs implementation or deletion");
    }

    public getDelimiterCharacter(): string {
        throw new Error("needs implementation or deletion");
    }

    public getNoComponents(): number {
        return this.name.length;              //Laenge der Komponente
    }

    public getComponent(i: number): string {
        return this.name[i];                  //Komponenete an der Stelle x
    }

    public setComponent(i: number, c: string) {
        const components = this.name.split(this.delimiter); // Aufteilung in einzelne Komponenete
        components[i] = c;                 // c ist Komponente an Stelle i
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }

    public insert(i: number, c: string) {
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,0,c);             //c an Stelle i hinzufügen 
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }

    public append(c: string) {
        this.name += this.delimiter + c;                    // am Ende c hinzufügen
    }

    public remove(i: number) {
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,1);                       // Stelle i löschen
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }

    public concat(other: Name): void {
        for(let i=0; i < other.getNoComponents(); i++){
            this.append(other.getComponent(i))     //other hinzufuegen
           }
    }

}