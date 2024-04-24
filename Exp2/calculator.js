function calculator(operation, nums1, nums2) {
    var result;
    switch (operation) {
        case '+':
            result = nums1 + nums2;
            break;
        case '-':
            result = nums1 - nums2;
            break;
        case '*':
            result = nums1 * nums2;
            break;
        case '/':
            result = nums1 / nums2;
            break;
        default:
            throw new Error("Invalid Operation");
    }
    return result;
}
var num1 = 10;
var num2 = 5;
var operation = '+';
var result = calculator(operation, num1, num2);
console.log("Result of ".concat(num1, " ").concat(operation, " ").concat(num2, " is ").concat(result));
