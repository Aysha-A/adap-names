import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(other: string, delimiter?: string) {
        super(delimiter); //delimiter aus abstrakten Klasse 
        this.name = other; 
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
        if(this.getNoComponents() !== other.getNoComponents()){        //Vergeleiche ob Laenge gleich
            return false;
        }
        for (let i=0; i< this.getNoComponents(); i++){
            if (this.getComponent(i) !== other.getComponent(i)){       //Vergleiche ob Stelle i gleich
                return false;
            }
        }
        
            return true;
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
        return this.name.split(this.delimiter).length;              //Laenge der Komponente
    }

    public getComponent(i: number): string {
        const components = this.name.split(this.delimiter) //Komponenten voneinander trennen
        return components[i];                  //Komponenete an der Stelle i
    }

    public setComponent(i: number, c: string) {
        throw new Error("needs implementation or deletion");
    }

    public insert(i: number, c: string) {
        throw new Error("needs implementation or deletion");
    }

    public append(c: string) {
        this.name += this.delimiter + c;                    // am Ende c hinzufügen
    }

    public remove(i: number) {
        throw new Error("needs implementation or deletion");
    }

    public concat(other: Name): void {
        throw new Error("needs implementation or deletion");
    }

}