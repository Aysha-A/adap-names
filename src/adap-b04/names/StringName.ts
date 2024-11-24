import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;
   
    constructor(other: string, delimiter?: string) {
        if(!other || other.trim().length ==0){ //precondition
            throw new IllegalArgumentException("String can not be null or empty");
        }
        super(delimiter); //delimiter aus abstrakten Klasse 
        this.name = other; 
        this.assertClassInvariants(); //postcondition
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
    
    public clone(): Name {
        this.assertClassInvariants();
        return new StringName (this.name, this.delimiter);
    }

    public asString(delimiter: string = this.delimiter): string {
        this.assertClassInvariants();
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

    public getNoComponents(): number {
        this.assertClassInvariants();
        return this.name.split(this.delimiter).length;              //Laenge der Komponente
    }

    public getComponent(i: number): string {
        this.assertClassInvariants();
    const components = this.name.split(this.delimiter) //Komponenten voneinander trennen
        return components[i];                  //Komponenete an der Stelle i
    }

    public setComponent(i: number, c: string) {
        this.assertHasValidIndex(i);        //precondition
        const components = this.name.split(this.delimiter); // Aufteilung in einzelne Komponenete
        components[i] = c;                 // c ist Komponente an Stelle i
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
        this.assertClassInvariants();      //postcondition
    }

    public insert(i: number, c: string) {
        this.assertHasValidIndex(i);
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,0,c);             //c an Stelle i hinzufügen 
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
        this.assertClassInvariants(); //postcondition
    }

    public append(c: string) {
        this.name += this.delimiter + c;                    // am Ende c hinzufügen
        this.assertClassInvariants();
    }

    public remove(i: number) {
        this.assertHasValidIndex(i);
        const components = this.name.split(this.delimiter);  // Aufteilung in einzelne Komponenete
        components.splice(i,1);                       // Stelle i löschen
        this.name = components.join(this.delimiter); // neuer zusammengefuegter String
        this.assertClassInvariants();
    }

    public concat(other: Name): void {
    
        for(let i=0; i < other.getNoComponents(); i++){
            this.append(other.getComponent(i))     //other hinzufuegen
           }
        this.assertClassInvariants();
        }

}