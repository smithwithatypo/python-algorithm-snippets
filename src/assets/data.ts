import { Snippet } from '../app/models/snippet';

export const data_source: Snippet[] = [
{
    code:
`
from collections import Counter

count = Counter(iterable)
`,
    explanation: "counts everything in iterable",
    categories: ["count"]
},

{
    code:
`
# L = left side of window
# R = right side of window

length = min(R - L + 1, length)  # smallest window
length = max(R - L + 1, length)  # largest window
`,
    explanation: "current window of variable size",
    categories: ["sliding window"]
},

{
    code:
`
def factorial(n):
    if n <= 1:
        return 1

    return n * factorial(n - 1)
`,
    explanation: "recursion simple example",
    categories: ["recursion"]
},
    
{
    code:
`
def inorder(root):
    if not root:
        return

    inorder(root.left)  # look left
    print(root.val)     # process node
    inorder(root.right) # look right
`,
    explanation: "DFS: inorder traversal",
    categories: ["DFS", "tree"]
},
    
{
    code:
`
from collections import deque

def bfs(root):
    queue = deque()

    if root:
        queue.append(root)
    
    level = 0
    while len(queue) > 0:
        for i in range(len(queue)):
            curr = queue.popleft()
            print(curr.val)              # process node
            if curr.left:
                queue.append(curr.left)  # look left
            if curr.right:
                queue.append(curr.right) # look right
        level += 1                       # go to next level
`,
    explanation: "BFS: level order traversal",
    categories: ["BFS", "tree"]
},

{
    code:
`
d = {}
for item in list:
    if item not in d:
        d[item] = x
    else:
        # process
`,
    explanation: "init hashmap from list",
    categories: ["hashmap"]
},

{
    code:
`
rows, cols = len(grid), len(grid[0])

def dfs(r, c):
    if (
        r not in range(rows)     # out of bounds
        or c not in range(cols)  # out of bounds
        or grid[r][c] == "0"     # base case
        or (r, c) in visit       # visited
    ):
        return

    visit.add((r, c))
`,
    explanation: "DFS: base cases for graph traversal",
    categories: ["DFS", "base cases", "graph"]
},

{
    code:
`
directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
for dr, dc in directions:
    dfs(r + dr, c + dc)
`, 
    explanation: "DFS: directions for graph traversal",
    categories: ["DFS", "directions", "graph"]
},

{
    code:
`
def memoization(n, cache):
    if n <= 1:
        return n
    if n in cache:
        return cache[n]

    cache[n] = memoization(n - 1) + memoization(n - 2)
    return cache[n]
`,
    explanation: "DP: top down (fibonacci)",
    categories: ["dynamic programming", "DP", "top down"]
},

{
    code:
`
def dp(n):
    if n < 2:
        return n

    dp = [0, 1]
    i = 2
    while i <= n:
        tmp = dp[1]
        dp[1] = dp[0] + dp[1]
        dp[0] = tmp
        i += 1
    return dp[1]
`,
    explanation: "DP: bottom up (fibonacci)",
    categories: ["dynamic programming", "DP", "bottom up"]
},

{
    code:
`
def hasCycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
`,
    explanation: "two pointers: find cycle in a linked list",
    categories: ["two pointers", "slow and fast", "linked list"]
},



];