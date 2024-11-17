import { Name, DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringName extends AbstractName {

    protected name: string = "";
    protected length: number = 0;

    constructor(other: string, delimiter?: string) {
        super();
        this.name = other; 
        if (delimiter !== undefined) {                  //falls delimiter angegeben 
           this.delimiter = delimiter;

        } else {                        
            this.delimiter = DEFAULT_DELIMITER;    // delimiter nicht angegeben
        }
        this.length= this.getNoComponents();
    
    }

    getNoComponents(): number {
        return this.name.length;              //Laenge der Komponente
    }

    getComponent(i: number): string {
        return this.name[i];                  //Komponenete an der Stelle x
    }
    setComponent(i: number, c: string) {
        const components = this.name.split(this.delimiter); // Aufteilung in einzelne Komponenete
        components[i] = c;                 // c ist Komponente an Stelle i
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }

    insert(i: number, c: string) {
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,0,c);             //c an Stelle i hinzufügen 
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }
    append(c: string) {
        this.name += this.delimiter + c;                    // am Ende c hinzufügen
    }
    remove(i: number) {
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,1);                       // Stelle i löschen
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
    }
}