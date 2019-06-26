var express = require('express');
var app = express();

app.get('/Emplist', function(req, res){
	var emplist=
	[
	{id: 1000, firstName:"pratima", lastName:"Talele", dept:"development"},
		{id: 2000, firstName:"Nikita", lastName:"Patil", dept:"Security"},
			{id: 3000, firstName:"Ashwini", lastName:"Dhavale", dept:"development"}
	];
			  
res.send(emplist);

});
app.listen(3000);
console.log("app listening at port 3000");