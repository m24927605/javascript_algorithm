const ws =new WeakSet();
const aObj={a:'a'};
ws.add(aObj);
console.log(ws.has(aObj));
ws.delete(aObj);
console.log(ws.has(aObj));
