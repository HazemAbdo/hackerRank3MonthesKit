#include <cstdio>
#include <iostream>
using namespace std;
class minHeap
{
    int capacity = 10;
    int size = 0;
    int *items = new int[capacity];
    int getLeftChildIndex(int parentIndex)
    {
        return parentIndex * 2 + 1;
    }
    int getRightChildIndex(int parentIndex)
    {
        return parentIndex * 2 + 2;
    }
    int getParentIndex(int childIndex)
    {
        return (childIndex - 1) / 2;
    }
    bool hasLeftChild(int index)
    {
        return getLeftChildIndex(index) < size;
    }
    bool hasRightChild(int index)
    {
        return getRightChildIndex(index) < size;
    }
    bool hasParent(int index)
    {
        return getParentIndex(index) >= 0;
    }
    int getLeftChildValue(int index)
    {
        return items[getLeftChildIndex(index)];
    }
    int getRightChildValue(int index)
    {
        return items[getRightChildIndex(index)];
    }
    int getParentValue(int index)
    {
        return items[getParentIndex(index)];
    }
    void swap(int indexOne, int indexTwo)
    {
        int temp = items[indexOne];
        items[indexOne] = items[indexTwo];
        items[indexTwo] = temp;
    }
    void ensureCapacity()
    {
        if (size == capacity)
        {
            int *newArray = new int[capacity * 2];
            for (int i = 0; i < capacity; i++)
            {
                newArray[i] = items[i];
            }
            capacity *= 2;
        }
    }
    int binarySearch(int arr[], int l, int r, int x)
    {
        if (r >= l)
        {
            int mid = l + (r - l) / 2;
            if (arr[mid] == x)
                return mid;
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }

public:
    int getMin()
    {
        if (size == 0)
        {
            throw "No elements in heap";
        }
        return items[0];
    }
    int poll()
    {
        if (size == 0)
        {
            throw "No elements in heap";
        }
        int item = items[0];
        items[0] = items[size - 1];
        size--;
        heapifyDown();
        return item;
    }
    void add(int item)
    {
        ensureCapacity();
        items[size] = item;
        size++;
        heapifyUp();
    }
    void heapifyUp()
    {
        int index = size - 1;
        while (hasParent(index) && getParentValue(index) > items[index])
        {
            swap(getParentIndex(index), index);
            index = getParentIndex(index);
        }
    }
    void heapifyDown()
    {
        int index = 0;
        while (hasLeftChild(index))
        {
            int smallerChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && getRightChildValue(index) > getLeftChildValue(index))
            {
                smallerChildIndex = getRightChildIndex(index);
            }
            if (items[index] < items[smallerChildIndex])
            {
                break;
            }
            else
            {
                swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
    // void decreaseKey(int i, int new_val)
    //{
    //	items[i] = new_val;
    //	while (i != 0 && getParentValue(i) > items[i])
    //	{
    //		swap(i, getParentIndex(i));
    //		i = getParentIndex(i);
    //	}
    // }
    // int extractMin()
    //{
    //	if (size <= 0)
    //		return INT_MAX;
    //	if (size == 1)
    //	{
    //		size--;
    //		return items[0];
    //	}

    //	// Store the minimum value, and remove it from heap
    //	int root = items[0];
    //	items[0] = items[size - 1];
    //	size--;
    //	heapifyDown();
    //	return root;
    //}
    void remove(int val)
    {
        int index = binarySearch(items, 0, size, val);
        if (index == 0)
        {
            poll();
        }
        else
        {
            // Deletes an element, indexed by index
            // Ensure that it's lesser than the current root
            items[index] = getMin() - 1;
            // Now keep swapping, until we update the tree
            int curr = index;
            while (curr > 0 && getParentValue(curr) > items[curr])
            {
                int temp = getParentValue(curr);
                items[getParentIndex(curr)] = items[curr];
                items[curr] = temp;
                curr = getParentIndex(curr);
            }
            // Now simply delete the minimum element
            poll();
        }
    }
};
int main()
{
    int q = 0;
    cin >> q;
    minHeap mH;
    int qType = 0;
    int val = 0;

    for (int i = 0; i < q; i++)
    {
        cin >> qType;
        if (qType == 1)
        {
            cin >> val;
            mH.add(val);
        }
        else if (qType == 2)
        {
            cin >> val;
            mH.remove(val);
        }
        else
        {
            cout << "MIN:" << mH.getMin() << endl;
        }
    }
    return 0;
}