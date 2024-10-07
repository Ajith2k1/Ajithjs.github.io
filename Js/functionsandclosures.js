function counter()
{
    let count=0;

    return {
        increment: function() {
            count = count+1
        },
        decrement: function() {
            count = count-1;
        },
        print: function() {
            return count;
        }
    };
}
let counterFunction = counter();
counterFunction.increment();
console.log('Current Counter Value :',counterFunction.print());
counterFunction.decrement();
console.log('Current Counter Value :',counterFunction.print());
counterFunction.increment();
console.log('Current Counter Value :',counterFunction.print());