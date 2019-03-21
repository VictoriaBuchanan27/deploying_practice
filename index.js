const express = require ('express');
const app= express ();
app.get ('/ping', (req,res)=>{
    res.status(200);
    res.json({'pong':🍔});
});

const port= 7272;
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})