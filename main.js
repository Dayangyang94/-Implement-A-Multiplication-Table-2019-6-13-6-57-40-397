
function createMutiplyTable(first,second){
    var valid=isvalid(first,second);
    if(valid){
        result=generateMultilplyArray(first,second);
    }
}
function isvalid(first,second){
    return first<second&&first>=1&&first<1000&&second>=1&&second<1000
}
    // function generateMultilplyArray(first,second){
    //    var result=[];
    //    for(var i=first;i<=second;i++){
    //         result[i-first]=[];
    //         for(var j=first;j<=i;j++){
    //             result[i-first][j-first]=j+"*"+i+j*i;
    //         }
    //    } 
    // }
    function generateMultilplyArray(first,second){
        let result=[];
        let times=second-first+1;
        for(let rowIndex=0;rowIndex<times;rowIndex++){
            var row=[];
            for(columnIndex=0;columnIndex<(rowIndex+1);columnIndex++){
                var res=(rowIndex+first)*(columnIndex+first);
                var output=(columnIndex+first)+"*"+(rowIndex+first)+"="+res;
                row.push(output);
            }
            result.push(row);
        }
        return result;
    }
    function printMultiplyTable(multiplyArray){ 
        var output = "";
        for(var i=0;i<multiplyArray.length;i++){
            for(j=0;j<multiplyArray[i].length;j++){
                output = output+multiplyArray[i][j]+" ";
            }
            output += "\n";
        }
        return output;
    }
module.exports = {
    isvalid,
    generateMultilplyArray,
    printMultiplyTable
};
