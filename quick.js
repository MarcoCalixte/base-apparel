function sumAll(arr) {
    let minimumNumber = Math.min(arr[0], arr[1]);
    let maximumNumber = Math.max(arr[0], arr[1]);
    let result = 0;

    for (let i = minimumNumber; i <= maximumNumber; i++) {
        console.log(i, "<= i",
            result, " <= result");
        result += i;
    }
    return result;
}

console.log(sumAll([10, 15]))