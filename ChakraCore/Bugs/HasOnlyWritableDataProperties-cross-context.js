//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function setUp(obj0, obj1) {
  obj1.foo0 = 1;
  Object.setPrototypeOf(obj0, {});
  Object.defineProperty(Object.getPrototypeOf(obj0), "foo1", {
    writable: false,
    value: "bar"
  });
}

function f() {
  var obj0 = {};
  obj1 = Object.create(obj0);
  setUp(obj0, obj1);
  obj1.foo2 = 'bar';
}

f();
print('Pass');
