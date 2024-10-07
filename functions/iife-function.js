// IIFE (Self-invoking function or immediate invoking function)

(function Execute() {
    console.log("Executing this self-invoking function");
})();

(() => {
    console.log("This is an arrow function IIFE");
})();

(function(game) {
    console.log("I love playing", game);
})("Cricket");