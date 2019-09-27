const m = new Map();
const obj = {wow: "Hello World"};
m.set(obj,'new world');
console.log(m);
console.log(m.get(obj));
console.log(m.has(obj));
console.log(m.size);
console.log(m.keys());
console.log(m.values());
console.log(m.entries());
m.forEach((value)=>{
  console.log(value);
});
m.delete(obj);
console.log(m);
m.set({test:'1'},'old world');
m.set({test:'2'},'normal world');
console.log(m);
m.clear();
console.log(m);

