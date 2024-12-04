import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(source: string[], delimiter?: string) {
        super();
        this.components = other; 
        if (delimiter !== undefined) {                  //falls delimiter angegeben 
           this.delimiter = delimiter;

        } else {                        
            this.delimiter = DEFAULT_DELIMITER;    // delimiter nicht angegeben
        }
    }

    getNoComponents(): number {
        return this.components.length;              //Laenge der Komponente 
    }

    getComponent(i: number): string {
        return this.components[i];                  //Komponenete an der Stelle i
    }
    setComponent(i: number, c: string) {
        this.components[i] = c;                     // c ist Komponente an Stelle i
    }

    insert(i: number, c: string) {
        this.components.splice(i,0,c);             //c an Stelle i hinzufügen
    }
    append(c: string) {
        this.components.push(c);                    // am Ende c hinzufügen
    }
    remove(i: number) {
        this.components.splice(i,1);                // Stelle i löschen
    }
}