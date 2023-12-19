
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 500000, years: 30, rate:5})).toEqual("2684.11");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 500000, years: 30, rate:5}).split('.')[1].length).toEqual(2);
});

/// etc
