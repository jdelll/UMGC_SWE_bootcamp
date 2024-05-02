describe('remove tests',function(){
    it('should remove duplicates from an array',function(){
        expect(removeDupes([0,1,2,3,4,4,4,4])).toEqual([0,1,2,3,4]);
        expect(removeDupes([0,1,2,3,4,4,4,4])).toBeInstanceOf(Array);
    })
    
    it('should remove duplicates from an array',function(){
        expect(removeDupes('HELLO')).toEqual('HELO');
        expect(removeDupes('HELLO')).toBeInstanceOf(String);
    })
    
    it('should remove values from an array',function(){
        expect(remove([1,2,3,4,5,6],6)).not.toContain(6);
    })
})

describe('calculateTaxes tests',function(){
    it('should calculate low-bracket', function(){
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(1+1).toEqual(2);
    })

    it('should reject invalid incomes', function(){
        expect(() => calculateTaxes('asldkjfasdf')).toThrowError();
    })    

})

describe('submitForm() tests', () => {
    it('saves input val to usernames array', () => {
        nameInput.value = 'something';
        submitForm();
        expect(names.length).toBe(1);
        expect(names).toContain('something');
    })
})

afterEach(function(){
    console.log("AFTER EACH!")
    nameInput.value = '';
    names = [];
})

beforeAll(() => {
    console.log("BEFORE!")
})