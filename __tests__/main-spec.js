const {isvalid,generateMultilplyArray,printMultiplyTable} = require('../main');
it('should be valid numbers', () =>{
    //given
    const first=2;
    const second=3;
    //when
    const result=isvalid(first,second);
    //then
    expect(result).toBe(true);
});
it('should canculate multiply table',() =>{
    //given
    const first=2;
    const second=3;
    //when
    let result=generateMultilplyArray(first,second);
    //then
    expect(result[0][0]).toBe("2*2=4");
    // expect(result[1][0]).toBe("2*3=6");
    // expect(result[1][1]).toBe("3*3=9");

});


it ('should generate result string', () => {
    //given
    const array = [];
    array[0] = [];
    array[0][0] = "2*2=4";

    //when
    const result = printMultiplyTable(array);

    //then
    expect(result).toBe("2*2=4 \n");
});
