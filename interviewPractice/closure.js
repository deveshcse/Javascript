function one() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); // output: printd 6 after each 1 seconds total 5 times
    }, i * 1000);
  }
}

function two() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); // prints 1 to 5 on each 1 second
    }, i * 1000);
  }
}

function outer() {
  for (var i = 1; i <= 5; i++) {
    function inner(x) {
      setTimeout(function () {
        console.log(x); // prints 1 to 5 on each 1 second

      }, x * 1000);
    }
    inner(i);
  }
}

outer();
