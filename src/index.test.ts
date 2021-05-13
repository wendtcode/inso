import inso from '.'

const obj = {
  foo: 1,
  FOO: "a",
  BAR: 2,
  bAz: 3
};

describe('inso()', () => {
  it("undefined when invalid object", () => {
    expect(inso()).toBeUndefined();
  });
  
  it("undefined when no searches", () => {
    expect(inso(obj)).toBeUndefined();
  });
  
  it("finds an exact-case matching key", () => {
    expect(inso(obj, 'foo')).toEqual(1);
  });
  
  it("finds an opposite-case matching key", () => {
    expect(inso(obj, 'FOO')).toEqual('a');
  });
  
  it("finds a mixed-case matching key", () => {
    expect(inso(obj, 'Foo')).toEqual(1);
  });
  
  it("finds until a matching key", () => {
    expect(inso(obj, "a", "b", "c", "Bar")).toEqual(2);
  });
});
