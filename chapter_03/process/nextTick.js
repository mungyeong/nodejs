setImmediate(() => {
   console.log("immediate");
});

process.nextTick(() => {
   console.log("nextTick");
});

setTimeout(()=>{
    console.log("timeout");
},0);

Promise.resolve().then(()=> console.log("promises"));

// 중요 마이크로태스크의 재귀 호출