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

function test6(x) {
    bar = 44; // ASSIGN_BEFORE_DECL alarm
    var bar;
    console.log(bar);
}

