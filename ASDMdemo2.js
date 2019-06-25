var express=require('express');
var app=express();

var customerController=function(req,res){
	console.log("Customers are")
	
	var customers=[
	
	{Firstname:'Apoorva',Lastname:'Joshi',age=22},
	{Firstname:'Namo',Lastname:'Tolmatti',age=30},
	{Firstname:'Aish',Lastname:'Raje',age=40},
	{Firstname:'Akku',Lastname:'Nafade',age=50},
	];
	res.send(customers)
		
};
app.get('/customers',customerController);

var server= app.listen(8088,function ()){
var host=server.address().address
var port=server.address().port

 console.log("Example app listening at http://localhost:8088", host, port)
})