export class Snippet {
    code: string = '';
    explanation: string = '';
    categories: string[] = [];

    constructor(code: string, explanation: string, categories: string[]) {
        this.code = code;
        this.explanation = explanation;
        this.categories = categories;
    }
}
