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
    explanation: "recursion",
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
    explanation: "create a dictionary",
    categories: ["hashmap", "dictionary"]
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
list.sort()      # in-place stable sort (lists only)
sorted(iterable) # returns new sorted   (iterable)
`,
    explanation: "sort in place versus copy",
    categories: ["sort", "in place"]
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
    explanation: "heap: top k frequent elements",
    categories: ["heap", "top k elements"]
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
# CREATE
my_list = []
my_list = list("hello")
squares = [x**2 for x in range(5)]

# READ
first_item = my_list[0]
last_item = my_list[-1]
length = len(my_list)
slice = my_list[0:3]

# UPDATE
my_list[0] = 10
my_list.append(4)
my_list.insert(1, 5)    # insert at position

# DELETE
del my_list[0]          # delete at index 0
my_list.remove(3)       # remove by value (first occurence)
item = my_list.pop()    # Remove & return last item
item = my_list.pop(1)   # Remove & return index 1
my_list.clear()         # Remove all items

`,
    explanation: "CRUD List",
    categories: ["list", "array", "crud"]
},

{
    code:
`
# CREATE
my_dict = {}
my_dict = {"key": "value", "num": 42}
my_dict = dict(name="John", age=30)

# READ
value = my_dict["key"]            # Access by key (raises KeyError if not found)
value = my_dict.get("key")        # Access by key (returns None if not found)
value = my_dict.get("key", "default")  # With default value
keys = my_dict.keys()             # Get all keys
values = my_dict.values()         # Get all values
items = my_dict.items()           # Get all (key, value) pairs
length = len(my_dict)             # Get number of items

# UPDATE
my_dict["key"] = "new value"      # Add or update entry
my_dict.update({"a": 1, "b": 2})  # Add/update multiple entries
my_dict.update(c=3, d=4)          # Another way to update
value = my_dict.setdefault("key", "default")  # Get value or set default if key doesn't exist

# DELETE
del my_dict["key"]                # Delete by key
value = my_dict.pop("key")        # Remove & return value
value = my_dict.pop("key", "default")  # With default value if key not found
item = my_dict.popitem()          # Remove & return (key, value) pair (last inserted)
my_dict.clear()                   # Remove all items

`,
    explanation: "CRUD Dictionary",
    categories: ["dictionary", "hashmap", "crud"]
},

{
    code:
`
# CREATE
my_set = set()                    # Empty set
my_set = {1, 2, 3}                # Initialize with values
my_set = set([1, 2, 2, 3])        # From iterable (duplicates removed)

# READ
length = len(my_set)              # Get number of elements
if 3 in my_set:                   # Check if element exists
    print("Found 3")

# UPDATE
my_set.add(4)                     # Add single element
my_set.update([4, 5, 6])          # Add multiple elements
my_set |= {5, 6}                  # Union update (alternate way to add)

# Set operations
union = my_set | other_set        # Union (elements in either)
intersection = my_set & other_set # Intersection (elements in both)
difference = my_set - other_set   # Difference (elements in my_set but not other_set)
symmetric_diff = my_set ^ other_set  # Symmetric difference (elements in either but not both)

# DELETE
my_set.remove(3)                  # Remove element (raises KeyError if not found)
my_set.discard(3)                 # Remove if present (no error if not found)
element = my_set.pop()            # Remove and return arbitrary element
my_set.clear()                    # Remove all elements

`,
    explanation: "CRUD Set",
    categories: ["set", "hashset", "crud"]
},

{
    code:
`
# CREATE
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name}"

person = Person("John", 30)

# READ
name = person.name                # Access attribute
greeting = person.greet()         # Call method
attributes = vars(person)         # Get all attributes as dict
has_attr = hasattr(person, "name")  # Check if attribute exists

# UPDATE
person.name = "Jane"              # Modify attribute
person.email = "jane@example.com" # Add new attribute
setattr(person, "age", 31)        # Set attribute using setattr

# DELETE
del person.email                  # Delete attribute
delattr(person, "age")            # Delete attribute using delattr
del person                        # Delete the object

`,
    explanation: "CRUD Object",
    categories: ["object", "class", "struct", "crud"]
},

{
    code:
`
# BASIC METHODS
"needle" in "haystack"  # check membership
str.find(substring)     # returns index of first occurence, or -1
str.replace(old, new)
str.lower()
str.upper()
str.startswith(prefix)

# FORMAT
f"{variable}"

`,
    explanation: "Strings",
    categories: ["strings", "array"]
},



];