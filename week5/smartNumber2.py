# Because factors are in pairs. Let's take 12 for example, it has the following pairs of factors:
# 1 * 12
# 2 * 6
# 3 * 4
# Since factors are always in pairs, the total number of factors must be even, 
# unless there is a pair with two identical factors, like 9 = 3 * 3.So, 
# a smart number is a number which has a pair of factors with two identical numbers.
import math

def is_smart_number(num):
    val = int(math.sqrt(num))
    if num / val == val:
        return True
    return False

print(is_smart_number(17))
print(is_smart_number(100))
print(is_smart_number(88))
print(is_smart_number(19))
print(is_smart_number(41))
print(is_smart_number(10))
print(is_smart_number(16))
print(is_smart_number(92))


