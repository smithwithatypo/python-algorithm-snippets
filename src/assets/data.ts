import { Snippet } from '../app/models/snippet';

export const data_source: Snippet[] = [
{
    code: 
`
for i in range(10):
    print(i)
now print 10
`,
    explanation: "this is the explanation",
    categories: ["testing", "this", "too"]
},

{
    code:
`
from Collections import Counter

count = Counter(s)
`,
    explanation: "counts everything in s",
    categories: ["count", "hashmap"]
}
];