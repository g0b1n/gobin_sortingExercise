function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    // Loop through both arrays, comparing the elements
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    // Push remaining elements from arr1, if any
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // Push remaining elements from arr2, if any
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort };