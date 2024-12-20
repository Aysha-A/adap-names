export const DEFAULT_DELIMITER: string = '.';
export const ESCAPE_CHARACTER = '\\';

/**
 * A name is a sequence of string components separated by a delimiter character.
 * Special characters within the string may need masking, if they are to appear verbatim.
 * There are only two special characters, the delimiter character and the escape character.
 * The escape character can't be set, the delimiter character can.
 * 
 * Homogenous name examples
 * 
 * "oss.cs.fau.de" is a name with four name components and the delimiter character '.'.
 * "///" is a name with four empty components and the delimiter character '/'.
 * "Oh\.\.\." is a name with one component, if the delimiter character is '.'.
 */
export class Name {

    private delimiter: string = DEFAULT_DELIMITER;
    private components: string[] = [];

    /** Expects that all Name components are properly masked */
    constructor(other: string[], delimiter?: string) {
        this.components = other; 
        if (delimiter !== undefined) {                  //falls delimiter angegeben 
           this.delimiter = delimiter;

        } else {                        
            this.delimiter = this.DEFAULT_DELIMITER;    // delimiter nicht angegeben
        }
    }
 /** @methodtype conversion-method */
    public asNameString(delimiter: string = this.delimiter): string {
        
        let result = '';
        
        for (let i=0; i< this.components.length;i++){
        result += this.components[i];             //jede Komponenete im Array durchlaufen und hinzufügen 

            if (i < this.components.length -1){       //delimiter zwischen jeder Komponente außer am Ende
            result += delimiter;        
            }
        }
        return result
       
    }
/** @methodtype get-method */
    public getComponent(i: number): string {
        return this.components[i];                  //Komponenete an der Stelle i
        
    }
/** @methodtype set-method */
    public setComponent(i: number, c: string): void {
        this.components[i] = c;                     // c ist Komponente an Stelle i
    }
/** @methodtype get-method */
    public getNoComponents(): number {
        return this.components.length;              //Laenge der Komponente 
    }
/** @methodtype regular-method */
    public insert(i: number, c: string): void {
        this.components.splice(i,0,c);             //c an Stelle i hinzufügen 
    }
/** @methodtype regular-method */
    public append(c: string): void {
        this.components.push(c);                    // am Ende c hinzufügen
    }
/** @methodtype regular-method */
    public remove(i: number): void {
        this.components.splice(i,1);                // Stelle i löschen
    }
}
