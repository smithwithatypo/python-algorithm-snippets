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

{
    code:
`
l, r = 0, len(nums) - 1

while l <= r:
    m = (l + r) // 2)
    if nums[m] > target:
        r = m - 1
    elif nums[m] < target:
        l = m + 1
    else:
        return m
return -1
`,
    explanation: "binary search",
    categories: ["binary search"]
},

{
    code:
`
import heapq

heapq.heapify(iterable)       # min heap by default
heapq.heappush(minheap, item) # add item
heapq.heappop(minheap)        # pop smallest item

heapq.heappush(heap, -item)   # max heap, stores as negative
-heapq.heappop(heap)          # pop largest item as positive
`,
    explanation: "heap basics",
    categories: ["heap", "heapify"]
},

{
    code:
`
def canAttendMeetings(self, intervals):
    intervals.sort(key=lambda i: i[0])

    for i in range(1, len(intervals)):
        i1 = intervals[i - 1]
        i2 = intervals[i]

        if i1[1] > i2[0]:
            return False
    return True
`,
    explanation: "overlapping intervals - leetcode meeting rooms",
    categories: ["sort", "intervals", "meeting rooms", "leetcode"]
}, 

{
    code:
`
list.sort()      # in-place stable sort (lists only)
sorted(iterable) # returns new sorted   (iterable)
`,
    explanation: "sort in place versus copy",
    categories: ["sort", "in place"]
},

{
    code:
`
def merge(self, intervals):
    intervals.sort(key=lambda pair: pair[0])
    output = [intervals[0]]

    for start, end in intervals:
        lastEnd = output[-1][1]

        if start <= lastEnd:
            output[-1][1] = max(lastEnd, end)
        else:
            output.append([start, end])
    return output

`,
    explanation: "overlapping intervals - leetcode merge intervals",
    categories: ["sort", "intervals", "merge intervals", "leetcode"]
},

{
    code: 
`
def subsets(self, nums):
    res = []
    subset = []

    def dfs(i):
        if i >= len(nums):
            res.append(subset.copy())
            return
        
        subset.append(nums[i])  # decision to include nums[i]
        dfs(i + 1)
        subset.pop()   # decision NOT to include nums[i]
        dfs(i + 1)

    dfs(0)
    return res
`,
    explanation: "backtracking: leetcode subsets",
    categories: ["backtracking", "subsets", "leetcode"]
},

{
    code:
`
def topKFrequent(self, nums, k):
    if k == len(nums):
        return nums

    count = Counter(nums)

    return heapq.nlargest(k, count.keys(), key=count.get)
`,
    explanation: "heap: leetcode top k frequent elements",
    categories: ["heap", "top k elements", "leetcode"]
}, 

{
    code:
`
stack.append()  # push
stack.pop()     # pop
stack[-1]       # peek top
`,
    explanation: "stack basics",
    categories: ["stack"]
},

{
    code:
`
from collections import deque
queue = deque()

queue.append()   # enqueue
queue.popleft()  # dequeue
queue[0]         # peek front
`,
    explanation: "queue basics",
    categories: ["queue"]
},

{
    code:
`
node = ListNode()   # add node
node.next = head
head = node

node.next = node.next.next  # remove node

while node:        # traverse
    node = node.next

`,
    explanation: "linked list basics",
    categories: ["linked list"]
},

{
    code:
`
dummy.next = head        # dummy node
# dummy -> head -> node -> node -> None
`,
    explanation: "dummy node",
    categories: ["linked list", "dummy node"]
},

{
    code:
`
def group_anagrams(words):
    d = {}

    for word in words:
        sorted_word = "".join(sorted(word))
        
        if sorted_word not in d:
            d[sorted_word] = [word]
        else:
            d[sorted_word].append(word)

    return list(d.values())
`,
    explanation: "hashmap: leetcode group anagrams",
    categories: ["hashmap", "anagrams", "group anagrams", "leetcode"]
}


];