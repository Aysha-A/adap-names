import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { Node } from "./Node";

export class Directory extends Node {

    protected childNodes: Set<Node> = new Set();

    constructor(bn: string, pn: Directory) {
        super(bn, pn);
    }

    public add(cn: Node): void {
        if(cn == null || !(cn instanceof Node)){        //precondition
            throw new IllegalArgumentException("Invalid node");
        }
        if (this.childNodes.has(cn)){
            throw new IllegalArgumentException("Invalid node! Node is already a child")
        }
        this.childNodes.add(cn);
    }

    public remove(cn: Node): void {
        if(cn == null || !(cn instanceof Node)){        //precondition
            throw new IllegalArgumentException("Invalid node");
        }
        if (!this.childNodes.has(cn)){
            throw new IllegalArgumentException("Invalid node! Node is not a valid child")
        }
        this.childNodes.delete(cn); // Yikes! Should have been called remove
    }

}