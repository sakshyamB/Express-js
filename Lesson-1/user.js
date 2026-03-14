const fs = require('fs');
const userrequesthandler = (req,res)=>{
    console.log("User request handler", req.url, req.method);
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                    <title> Form </title>
                    </head>
                    <body>
                        <form action="/create-user" method="POST">
                            <input type="text" name="username" placeholder="Enter your name"> </input>
                            <input type='text' name='password' placeholder='Enter your password'> </input>
                            <input type='radio' name='Gender' value='Male'> Male </input>
                            <input type='radio' name='Gender' value='Female'> Female </input>
                            <button type='submit'> Submit </button>
                        </form>
                    </body>
            </html>
            `        )
        return res.end();
} 
else if(req.url === "/create-user" && req.method === "POST"){
    const body = [];
    req.on("data", (chunk)=>{
        body.push(chunk);
    });
    req.on("end", ()=>{
        const parsedbody = Buffer.concat(body).toString();
        console.log(parsedbody);
        fs.writeFile("user.txt", parsedbody, (err)=>{
            if(err){
                console.log(err);
            }
            console.log("User data saved to file");
        })
    })
    return res.end();
}
else{
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> Page not found </h1>");
    return res.end();
}   
}   
module.exports = userrequesthandler;
