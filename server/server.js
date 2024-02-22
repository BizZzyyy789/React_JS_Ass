const express =  require('express')
let mysql = require('mysql');
const app = express();

const database_react_js = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_react_js",
    
})
database_react_js.connect((err) => {
    if(err){
        console.error('Error Connecting' + err.stack)
        return;
    } 
    console.log('aabv');
})
app.get('/', (req, res) => {
    const sql = "SELECT * FROM testing";
    database_react_js.query(sql, (err, result)=>{
        if(err){
            return res.json({Message: "Errorrrr Inside Server"});
        }
        return res.json(result);
    })
})
app.listen(3000, ()=>{
    // console.log("Hello World"); 
    console.log('Server is Working..!');
})

// app.get("/api", (req, res) => {
//     res.json({
//         "user" : ['1'],
//         "name" : 'leang'
//     })
// })
// app.listen(5000, ()=> {
//    console.log("Server Starting ");
// })

// export default database_react_js;