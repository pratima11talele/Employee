var http=require('http');   // module
//object----- model
var employee ={
    name:"pratima",
    description:"Software Developer",
    Salary:80000,
    Bonus:10000
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(employee));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");