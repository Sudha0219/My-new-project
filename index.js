// libuv ---4 thread



const crypto=require("node:crypto");
// process.env.uv_THREADPOOL_SIZE=5;
const MAX_CALLS=6;
const start=Date.now();
for(let i=0;i<MAX_CALLS;i++)
{
    crypto.pbkdf2("password","salt",10000,512,"sha512",
    ()=>{console.log(`Hash: ${i+1}`,Date.now()-start);
});
}
//libuv thread pool ---4threads