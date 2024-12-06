import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { InvalidStateException } from "../common/InvalidStateException";

export class StringArrayName extends AbstractName {

    private readonly components: readonly string[] = [];         //immutable 

    constructor(source: string[], delimiter?: string) {
        if (!source || source.length ==0){ //precondition
            throw new IllegalArgumentException("Array can not be null or empty");
        }
        super(delimiter);
        this.components= [...source];
        this.assertClassInvariants();
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
    if (this.getNoComponents() !== this.components.length){
        throw new InvalidStateException("Number of components doesn't match array length");
        }    
    }
    public getNoComponents(): number {
        this.assertClassInvariants();
        return this.components.length;      //Laenge der Komponente
    }

    public getComponent(i: number): string {
        this.assertClassInvariants();
        return this.components[i];          //Komponente an der Stelle i
    }

    public setComponent(i: number, c: string): StringArrayName {
       this.assertHasValidIndex(i); //precondition 
       const newComponents = [...this.components];          
       newComponents[i]=c;                  //Komponente an der Stelle i
       this.assertClassInvariants(); //postcondition
       return new StringArrayName(newComponents,this.delimiter);    
    }

    public insert(i: number, c: string): StringArrayName {
       this.assertHasValidIndex(i);  //precondition 
       const newComponents = [...this.components];
       newComponents.splice(i,0,c);            //c an Stelle i hinzufuegen
       this.assertClassInvariants(); //postcondition
       return new StringArrayName(newComponents,this.delimiter);
    }

    public append(c: string): StringArrayName {
        this.assertClassInvariants();
        return new StringArrayName([...this.components,c],this.delimiter);      //c am Ende hinzufuegen
    }

    public remove(i: number): StringArrayName {
        this.assertHasValidIndex(i); //precondition  
        const newComponents = [...this.components];
        newComponents.splice(i,1);              //Stelle i löschen
        this.assertClassInvariants(); //postcondition
        return new StringArrayName(newComponents,this.delimiter);

    }

    public concat(other: Name): StringArrayName {
        this.assertClassInvariants();
        const newComponents = [...this.components];
        for(let i=0; i < other.getNoComponents(); i++){
            newComponents.push(other.getComponent(i))     //other hinzufuegen
           }
        return new StringArrayName(newComponents,this.delimiter);   
    }
}