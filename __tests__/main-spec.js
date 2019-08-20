const {isValid, generateMultiplyArr,printMultiplyTable} = require('../main');


//判断有效输入
    it ('should  numbers be valid', () => {
        // given
        var firstNumber=2;
        var secondNumber=3;
        //when
        var result=isValid(firstNumber,secondNumber);
        //then
        expect(result).toBe(true);
        });
      
      
        it ('should  generated array with table items', () => {
            // given
            var firstNumber=2;
            var secondNumber=3;
            //when
            var generateArr=generateMultiplyArr(firstNumber,secondNumber);
            //then
            expect(generateArr[0][0]).toBe("2*2=4");
            expect(generateArr[1][0]).toBe("2*3=6");
            expect(generateArr[1][1]).toBe("3*3=9");
            });
            it ('should print multiply table', () => {
               //given
              const array = [];
              array[0] = [];
              array[0][0] = "2*2=4";

               //when
              const result = printMultiplyTable(array);

             //then
            expect(result).toBe("2*2=4 \n");
                });