function subarray(arr, target) {
    let initial = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && initial <= end) {
            currentSum -= arr[initial];
            initial++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}


let arr = [3, 4, 2, 7, 5, 9, 8];
let target = 17;
console.log(subarray(arr, target));  