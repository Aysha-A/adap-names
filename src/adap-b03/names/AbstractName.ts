import { Name, DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "./Name";

export abstract class AbstractName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    constructor(delimiter: string = DEFAULT_DELIMITER) {
       this.delimiter = delimiter;
    }

    public asString(delimiter: string = this.delimiter): string {
        let resultString = '';
        
        for (let i=0; i< this.getNoComponents();i++){
        resultString += this.getComponent(i);             //jede Komponenete im Array durchlaufen und hinzufügen 

            if (i < this.getNoComponents() -1){       //delimiter zwischen jeder Komponente außer am Ende
            resultString += delimiter;        
            }
        }
        return resultString
    
    }

    public toString(): string {
        return this.asString();
    }

    public asDataString(): string {
        let resultDataString = '';
        
        for (let i=0; i< this.getNoComponents();i++){
        let a = this.getComponent(i);

        let escapecomp = a.replace(this.delimiter, ESCAPE_CHARACTER + this.delimiter); // delimiter maskieren

        resultDataString += escapecomp;             //escapecomp hinzufuegen
            if (i < this.getNoComponents() -1){       //delimiter zwischen jeder Komponente außer am Ende
            resultDataString += this.delimiter;        
            }
        }
        return resultDataString
    }

    public isEqual(other: Name): boolean {
        for (let i=0; i< this.getNoComponents(); i++){
            if (this.getComponent(i) !== other.getComponent(i)){       //Vergleiche ob Stelle i gleich
                return false;
        }
    }
        if(this.getNoComponents() !== other.getNoComponents()){        //Vergeleiche ob Laenge gleich
            return false;
        }
        else {
            return true;
        }
    }

    public getHashCode(): number {
        let hash = 0;
        const strname = this.asString();
        for (let i=0; i< strname.length; i++){
            hash = (hash << 5) -hash + strname.charCodeAt(i);       //hash Berechnung
            hash |=0;
        }
        return hash;
    }

    public clone(): Name {
        throw new Error("needs implementation");
    }

    public isEmpty(): boolean {
        if(this.getNoComponents()==0){
            return true;
        }
        else {
            return false;
        }
    }

    public getDelimiterCharacter(): string {
        return this.delimiter;
    }

    abstract getNoComponents(): number;

    abstract getComponent(i: number): string;
    abstract setComponent(i: number, c: string): void;

    abstract insert(i: number, c: string): void;
    abstract append(c: string): void;
    abstract remove(i: number): void;

    public concat(other: Name): void {
        for(let i=0; i < other.getNoComponents(); i++){
            this.append(other.getComponent(i))     //other hinzufuegen
           }
    }

}