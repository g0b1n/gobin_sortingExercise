function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // loop throught each element in the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // perform a single pass and comkpare each pair of adjacent items
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // if no elements swapped, the array is sorted
        if (!swapped) break;
    }
    return arr;
}

module.exports = bubbleSort;