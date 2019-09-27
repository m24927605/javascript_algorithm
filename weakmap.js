const wm=new WeakMap();
const obj = {wow: "Hello World"};
wm.set(obj,'wow');
console.log(wm);
console.log(wm.get(obj));
console.log(wm.has(obj));
wm.delete(obj);
console.log(wm.get(obj));
