
function createMutiplyTable(first,second){
    var output="";
    var valid=isValid(first,second);
    if(valid){
        return valid;
    } 
    var multiplyArr=generateMultiplyArr(first,second);
    output =printMultiplyTable(multiplyArr);
    return output;
}

function isValid(first,second){
    return first<second
}
function generateMultiplyArr(first,second){
  var result=[];
  for(var i=first;i<=second;i++){
        result[i-first]= []; 
        for(var j = first;j<=i;j++){
            result[i-first][j-first] = j+"*"+i+"="+i*j;
        }
    
    }
  return result;
}
function printMultiplyTable(multiplyArr){
    var output="";
    for(var i=0;i<multiplyArr.length;i++){
        for(var j=0;j<multiplyArr[i].length;j++){
            output=output+multiplyArr[i][j]+" ";
        }
        output+="\n";
    }
    return output;
}
module.exports = {
    isValid,
    generateMultiplyArr,
    printMultiplyTable
};
