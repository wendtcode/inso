import test from "ava";

import inso from "./dist/inso";

const obj = {
  foo: 1,
  FOO: "a",
  BAR: 2,
  bAz: 3
};

test("undefined when invalid object", t => {
  t.is(inso(), undefined);
});

test("undefined when no searches", t => {
  t.is(inso(obj), undefined);
});

test("finds an exact-case matching key", t => {
  t.is(inso(obj, "foo"), 1);
});

test("finds an opposite-case matching key", t => {
  t.is(inso(obj, "FOO"), "a");
});

test("finds a mixed-case matching key", t => {
  t.is(inso(obj, "Foo"), 1);
});

test("finds until a matching key", t => {
  t.is(inso(obj, "a", "b", "c", "Bar"), 2);
});
