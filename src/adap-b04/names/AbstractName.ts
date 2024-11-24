import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { InvalidStateException } from "../common/InvalidStateException";
import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export abstract class AbstractName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    constructor(delimiter: string = DEFAULT_DELIMITER) {
        this.delimiter = delimiter;
    }
//Assertion-Methoden

    protected assertHasValidDelimiter(): void{
        if(!this.delimiter || this.delimiter.length == 0){       //Faelle wo delimiter ungueltig ist
            throw new IllegalArgumentException("invalid delimiter");
        }
    }
    protected assertClassInvariants(): void{
        this.assertHasValidDelimiter();
    }
    
    public clone(): Name {
        this.assertClassInvariants();
        const clonedInstance = Object.create(Object.getPrototypeOf(this)) as Name; //neues Objekt erstellen
    
    for (let i= 0; i< this.getNoComponents(); i++){
        clonedInstance.append(this.getComponent(i)) //Inhalt kopieren
    }
    if (!clonedInstance.isEqual(this)){
        throw new InvalidStateException("Cloned instance is not identical to the original instance");
    }
    return clonedInstance;
    }   

    public asString(delimiter: string = this.delimiter): string {
        this.assertClassInvariants();
        let resultString = '';
        
        for (let i=0; i< this.getNoComponents();i++){
        resultString += this.getComponent(i);              

            if (i < this.getNoComponents() -1){       
            resultString += delimiter;        
            }
        }
        return resultString
    }

    public toString(): string {
        this.assertClassInvariants();
        return this.asString();
    }

    public asDataString(): string {
        this.assertClassInvariants();
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
        this.assertClassInvariants();
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
        this.assertClassInvariants();
        let hash = 0;
        const strname = this.asString();
        for (let i=0; i< strname.length; i++){
            hash = (hash << 5) -hash + strname.charCodeAt(i);       //hash Berechnung
            hash |=0;
        }
        return hash;
    }

    public isEmpty(): boolean {
        this.assertClassInvariants();
        if(this.getNoComponents()==0){
            return true;
        }
        else {
            return false;
        }
    }

    public getDelimiterCharacter(): string {
        this.assertClassInvariants();
        return this.delimiter;
    }

    abstract getNoComponents(): number;

    abstract getComponent(i: number): string;
    abstract setComponent(i: number, c: string): void;

    abstract insert(i: number, c: string): void;
    abstract append(c: string): void;
    abstract remove(i: number): void;

    public concat(other: Name): void {
    if(!other || other.getNoComponents() == 0){ //precondition
        throw new IllegalArgumentException("Other name can not be null or empty");
    }
        for(let i=0; i < other.getNoComponents(); i++){
            this.append(other.getComponent(i))     //other hinzufuegen
           }
    this.assertClassInvariants(); //postcondition
    }

}