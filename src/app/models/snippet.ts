export class Snippet {
    code: string = '';
    explanation: string = '';
    use_case: string = '';
    categories: Set<string> = new Set<string>();

    constructor(code: string, explanation: string, use_case: string, categories: Set<string>) {
        this.code = code;
        this.explanation = explanation;
        this.use_case = use_case;
        this.categories = categories;
    }
}
