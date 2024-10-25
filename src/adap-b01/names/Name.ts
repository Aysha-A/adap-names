export class Name {

    public readonly DEFAULT_DELIMITER: string = '.';
    private readonly ESCAPE_CHARACTER = '\\';

    private components: string[] = [];
    private delimiter: string = this.DEFAULT_DELIMITER;

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
