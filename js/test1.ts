let a: number = 12;
let b: number = 17;
 
function showProduct(first: number, second: number): void {
    console.log("The product: " +  first * second);
    if (first > second) {
      return first;
    } else if (first < second) {
       return second;
    }
}

b = 'test';
a = {};

showProduct(a, b);
