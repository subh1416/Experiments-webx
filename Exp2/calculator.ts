function calculator(operation:string,nums1:number,nums2:number): number {
    let result : number;

    switch(operation){
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
        default :
            throw new Error("Invalid Operation")
    }

    return result;

}

const num1 = 10;
const num2 = 5;
const operation = '+';
const result = calculator(operation, num1, num2);
console.log(`Result of ${num1} ${operation} ${num2} is ${result}`);
