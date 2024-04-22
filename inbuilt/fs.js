let fs = require('fs');

fs.writeFile('myfile.txt','Coding with code',function(){
    console.log('File created')
})


// fs.appendFile('MyCode.txt','Code for 1 line',function(){
//     console.log('file appeneded')
// })


fs.readFile('myfile.txt',function(err,data){
    if(err) throw err;
    console.log(data)
}) 
