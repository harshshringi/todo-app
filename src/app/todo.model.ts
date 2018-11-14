export class Todo {
    id: number;
    title: string = '';
    content: string = '';
    label: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
