function test1(x) {
  function foo(x) { return x.prop; }
  if (x) {
    return foo(x); // alarm
  }
}

// Multiple depth case
function test2(x) {
  function foo1(x) { return foo2(x); }
  function foo2(x) { return x.prop; }
  if (!x) {
    return foo1(x); // alarm
  }
}

// Property access path case
function test3(x) {
  function foo(y) { return y.prop2; }
  if (!x.prop1) {
    return foo(x.prop1); // alarm
  }
}

function test4(x) {
  if (x) {
    return x;
  } if (!x) {
    return null;
  } else {
    var temp = x; 
  }
}

function test5(x) {
  const t = x;
  t = "test";
  return y;
}

class A {
    constructor() {}
}
class B extends A {
    constructor() {
        this.a = 1;
        super(); // ACCESS_THIS_BEFORE_SUPER_CALL alarm
    }
}

new B();
