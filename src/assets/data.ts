import { Snippet } from '../app/models/snippet';

export const data_source: Snippet[] = [
{
    code:
`
from Collections import Counter

count = Counter(iterable)
`,
    explanation: "counts everything in iterable",
    categories: ["count"]
},

{
    code:
`
R - L + 1
`,
    explanation: "current window size",
    categories: ["sliding window"]
}
];