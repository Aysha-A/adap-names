import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";

export class StringName extends AbstractName {

    private readonly name: string = "";

    constructor(other: string, delimiter?: string) {
        super(delimiter);           //delimiter aus abstrakten Klasse 
        this.name = other; 
    }

//Assertion-Methoden
    
    protected assertHasValidIndex(i: number): void{
        if (i<0 || i >= this.getNoComponents()){        // Faelle mit ungueltigem index
            throw new IllegalArgumentException("Invalid index");
        }
    }

    protected assertClassInvariants(): void{
        super.assertClassInvariants();
            this.assertHasValidDelimiter();

    
        }
    public getNoComponents(): number {
        this.assertClassInvariants();
        return this.name.split(this.delimiter).length;              //Laenge der Komponente
    }

    public getComponent(i: number): string {
        this.assertClassInvariants();
        const components = this.name.split(this.delimiter);           //Komponenten voneinander trennen
        return components[i];                                        //Komponenete an der Stelle i
    }

    public setComponent(i: number, c: string): StringName {
        this.assertHasValidIndex(i);        //precondition
        const components = this.name.split(this.delimiter);                     // Aufteilung in einzelne Komponenete
        components[i]=c; 
        this.assertClassInvariants();      //postcondition                                                       // c ist Komponente an Stelle i
        return new StringName(components.join(this.delimiter),this.delimiter); //neuer zusammengefuegter StringName
    }

    public insert(i: number, c: string): StringName {
        this.assertHasValidIndex(i);
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,0,c);             //c an Stelle i hinzufügen 
        this.assertClassInvariants(); //postcondition
        return new StringName(components.join(this.delimiter), this.delimiter); // neuer zusammengefuegter String
    }

    public append(c: string): StringName {
        return new StringName(this.name + this.delimiter + c, this.delimiter);                    // am Ende c hinzufügen
        this.assertClassInvariants();    
    }

    public remove(i: number):StringName {
        this.assertHasValidIndex(i);
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,1);                       // Stelle i löschen
        this.assertClassInvariants();
        return new StringName(components.join(this.delimiter), this.delimiter); // neuer zusammengefuegter String
    }

    public concat(other: Name): StringName {
        const otherComponents = other.asString(this.delimiter);
        this.assertClassInvariants();
        return new StringName(this.name + this.delimiter + otherComponents, this.delimiter);            //otherComponents am Ende hinzufuegen
           
    }

}