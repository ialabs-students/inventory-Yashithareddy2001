const express = require('express');
const app = express();
app.use(express.json());

//Function for next parameter
var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(400);
        response.send("Name to be provided");
    }
    next();
};

app.listen(8000,()=>{
    console.log("Server is ready to run");
});

const Fruits=[{"Name":"Mango","Color":"Yellow","Place":"South India"},
{"Name":"Apple","Color":"Red","Place":"Ooty"},
{"Name":"Banana","Color":"Green","Place":"Kerala"}
];

//GET CALL
app.get("/fruit",(request,response)=>{
    response.send(Fruits);
    });

app.get("/fetch/obj/",(request,response)=>{
    response.send(Fruits);
    });

//POST CALL
app.post("/add/obj",name_validate,(request,response)=>{
    const new_employee={
        "Name":request.body.Name,
        "Color":request.body.Color,
        "Place":request.body.Place
    }
    console.log(request.body);
    Fruits.push(new_fruit);
    response.send("Fruits created");
    });
// PUT
// in this put is used to update data to storage
app.put("/put/obj",(request,response)=>{
    for(let fruit of Fruits){
        if(emp.Name==request.body.Name){
            emp.Name="Mango"
        }
    }
    response.send(Fruits);
})
//DELETE
//  it is used to delete data from storage
app.delete("/delete/obj/",(request,response)=>{
    for(let fruit in Fruits){
        if(Fruits[fruit].Name=="Mango"){
            delete Fruits[fruit];
        }
    }
    response.send(Fruits);
})

app.get("/find/obj/",(request,response)=>{
    for(let fruit in Fruits){
        if(Fruits[fruit].Name=="Banana"){
            response.send(Fruits[fruit]);
        }
    }
})
