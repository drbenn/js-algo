# =========================== Nodemon for Python ======================== #
# pip install watchdog
# watchmedo shell-command --patterns="*.py" --recursive --command='python algo.py' .
import math

# Dijkstra's algorithm
# Dijkstra's algorith requires 3 hash tables, 1. ) the graph 2.) the costs for each node 3.) parent tracking...also 4. A set to track who has been processed to not cyclically search

# 1.) graph hash table
dij_graph = {}
dij_graph["start"] = {}
dij_graph["start"]["a"] = 6
dij_graph["start"]["b"] = 2

dij_graph["a"] = {}
dij_graph["a"]["fin"] = 1

dij_graph["b"] = {}
dij_graph["b"]["a"] = 3
dij_graph["b"]["fin"] = 5

dij_graph["fin"] = {}

# 2.) costs for each node

infinity = math.inf
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

# 3.) Parent tracking

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

# 4.) Set for tracking

processed =set()



def find_lowest_cost_node(costs):
  lowest_cost = math.inf
  lowest_cost_node = None
  for node in costs:
    cost = costs[node]
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node

def find_quickest_dijkstra_path(costs):
  node = find_lowest_cost_node(costs)
  while node is not None:
    cost = costs[node]
    neighbors = dij_graph[node]
    for n in neighbors.keys():
      new_cost = cost + neighbors[n]
      if costs[n] > new_cost:
        costs[n] = new_cost
        parents[n] = node
    processed.add(node)
    node = find_lowest_cost_node(costs)

# Breadth-First-Search

bfs_graph = {}
bfs_graph["you"] = ["alice", "bob", "claire"]
bfs_graph["bob"] = ["anuj", "peggy"]
bfs_graph["alice"] = ["peggy"]
bfs_graph["claire"] = ["thom", "jonny"]
bfs_graph["anuj"] = []
bfs_graph["peggy"] = []
bfs_graph["thom"] = []
bfs_graph["jonny"] = []


def breadth_first_search(name):
  search_queue =  [] # creates a new queue
  search_queue += bfs_graph[name] # adds all out-neighbors to queue
  searched = set() # tracks previously searched neighbors
  while search_queue:
    person = search_queue.pop(0)
    if not person in searched:
      if person_is_seller(person):
        print(f"{person} is a mango seller!")
        return True
      else:
        search_queue += bfs_graph[person]
        searched.add(person)
  return False

# the only factor is someone sells mangoes is if their name ends in m
def person_is_seller(name):
  return name[-1] == 'm'

# print(bfs_graph)
# breadth_first_search("you")

# Binary search

def binary_search(arr, target):
  print('Binary Search')
  low_index = 0
  high_index = len(arr) - 1

  while low_index <= high_index:
    mid_index = (low_index + high_index) // 2
    guess = arr[mid_index]

    if guess == target:
      return f"Success!! {target} was at index {mid_index}"
    elif guess > target:
      high_index = mid_index - 1
    else:
      # guess < target
      low_index = mid_index + 1
  
  # Failure return
  return None

binary_search_list = [1,3,5,7,9]

# print(binary_search(binary_search_list, 7))
# print(binary_search(binary_search_list, 101))



# Merge Sort - much like quick sort, and in some cases faster than quick sort ===> however, quick sort is generally faster
# also uses divide and conquer like quicksort
# the visualization for merge sort helps alot with the recombining last step - https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/

def merge_sort(arr):
  # base condition to break recursion
  if len(arr) <= 1:
    return arr
  
  mid = len(arr) // 2 # split list in half (not a pivot, the actual place to divide array in 2)
  left_half = arr[:mid]
  right_half = arr[mid:]

  merge_sort(left_half)
  merge_sort(right_half)

  a,b,c = 0,0,0
  # merge the two halves
  while a < len(left_half) and b < len(right_half):
    if left_half[a] < right_half[b]:
      arr[c] = left_half[a]
      a += 1
    else:
      arr[c] = right_half[b] 
      b += 1  
    c += 1
  
  # actions for remaining items in arr
  while a < len(left_half):
    arr[c] = left_half[a]
    a += 1
    c += 1
  
  while b < len(right_half):
    arr[c] = right_half[b]
    b += 1
    c += 1
  
  return arr

# print(merge_sort([21,22,23,28,1,5,8,333,10,98,4]))

# Quick Sort - uses divide and conquer - faster than selection sort and bubble sort(And in most cases faster than merge sort)
# - uses recursion. base case is arrays with 1 or no items.
# - if 2 items in array, then if need be, items can switch places like bubble sort
# - if 3 or greater items in array. 1 item is designated the pivot, then subarrays are created,
#     one subarray containing values less than the pivot, another subarray for values greater than pivot.
#     The two subarrays are not sorted, just partitioned.
# - BUT, since the base case for recursion is array of 1 or 0 items, the partitioned arrays will eventually
#   be sorted due to recursion

def quicksort(arr):
  if len(arr) < 2:
    return arr
  else:
    pivot = arr[0]
    lesser_partition = [i for i in arr[1:] if i <= pivot]
    greater_partition = [i for i in arr[1:] if i > pivot]
    return quicksort(lesser_partition) + [pivot] + quicksort(greater_partition)
  
# print(quicksort([10,5,2,3, 22, 7, 4]))





# Selection Sort

def findSmallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_index = i
  return smallest_index

def selectionSort(arr):
  newArr = []
  copiedArr = list(arr) # copy array before mutating
  for i in range(len(copiedArr)):
    smallest = findSmallest(copiedArr)
    newArr.append(copiedArr.pop(smallest))
  return newArr

# print(selectionSort([5,3,6,2,10]))



def bubble_sort(list):
  last_element_index = len(list) - 1
  # print(f"last el index: {last_element_index}")
  for pass_no in range(last_element_index, 0, -1):
    # print(f"pass no: {pass_no}")
    # print("OK")
    for idx in range(pass_no):
      # print(f"idx: {idx} of passNo: {pass_no}")
      # print(f"{list[idx] ,list[idx +1]}")
      if list[idx] > list[idx + 1]:
        list[idx], list[idx + 1] = list[idx + 1], list[idx]
        # print(f"list at end of pass: {list}")
  return list

bubble_sort_list = [99,25,21,22,24,23,27,26,1]

# print(bubble_sort(bubble_sort_list))