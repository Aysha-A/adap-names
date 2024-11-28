import { File } from "./File";
import { Directory } from "./Directory";
import { ServiceFailureException } from "../common/ServiceFailureException";

export class BuggyFile extends File {

    constructor(baseName: string, parent: Directory) {
        super(baseName, parent);
    }

    /**
     * Fault injection for homework
     * @returns base name, here always ""
     */
    protected doGetBaseName(): string {
        this.baseName = "test";
        return super.doGetBaseName();
    }

}
