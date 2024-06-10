# =========================== Nodemon for Python ======================== #
# pip install watchdog
# watchmedo shell-command --patterns="*.py" --recursive --command='python algo.py' .


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
    print("OK")
    for idx in range(pass_no):
      # print(f"idx: {idx} of passNo: {pass_no}")
      print(f"{list[idx] ,list[idx +1]}")
      if list[idx] > list[idx + 1]:
        list[idx], list[idx + 1] = list[idx + 1], list[idx]
        print(f"list at end of pass: {list}")
  return list

bubble_sort_list = [99,25,21,22,24,23,27,26,1]

print(bubble_sort(bubble_sort_list))