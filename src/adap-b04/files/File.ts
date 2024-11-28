import { Node } from "./Node";
import { Directory } from "./Directory";
import { IllegalArgumentException } from "../common/IllegalArgumentException";

enum FileState {
    OPEN,
    CLOSED,
    DELETED        
};

export class File extends Node {

    
    protected state: FileState = FileState.CLOSED;

    constructor(baseName: string, parent: Directory) {
        super(baseName, parent);
    }

    public open(): void {
        if (this.state !== FileState.CLOSED){       //precondition
            throw new IllegalArgumentException("Invalid file state");
        }
        
        // do something
    }

    public read(noBytes: number): Int8Array {
        // read something
        return new Int8Array();
    }

    public close(): void {
        if (this.state !== FileState.OPEN){         //precondition
            throw new IllegalArgumentException("Invalid file state");
        }
        // do something
    }

    protected doGetFileState(): FileState {
        return this.state;
    }

}