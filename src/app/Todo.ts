export class Todo {
    sno: number;
    title: string;
    desc: string;
    active: boolean;

    constructor() {
        this.sno = 0; // You can provide a default value or initialize it based on your logic
        this.title = "";
        this.desc = "";
        this.active = false;
    }
}
