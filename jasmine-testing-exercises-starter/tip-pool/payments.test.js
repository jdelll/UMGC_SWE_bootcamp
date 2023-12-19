describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      paymentId = 0;
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
    it('should submit payment info', function () {
      submitPaymentInfo();
      expect(allPayments['payment1']).toEqual({billAmt: '100', tipAmt: '20', tipPercent: 20});
      expect(billAmtInput.value).toEqual('');
      expect(tipAmtInput.value).toEqual('');
    });
  
    it('should return object with payment info from createCurPayment()', function () {
      let curPayment = createCurPayment();
      expect(curPayment).toEqual({billAmt: '100', tipAmt: '20', tipPercent: 20});
    });

    it('should create a new table row with payment info', function () {
      let curPayment = createCurPayment();
      appendPaymentTable(curPayment);
      let curTr = document.querySelector('#payment0');
      expect(curTr.querySelectorAll('td')[0].innerText).toEqual('$100');
      expect(curTr.querySelectorAll('td')[1].innerText).toEqual('$20');
      expect(curTr.querySelectorAll('td')[2].innerText).toEqual('20%');
    
    });
  
    it('should update summary table', function () {
      allPayments['payment' + paymentId] = createCurPayment();
      updateSummary();
      let summaryTable = document.querySelectorAll('#summaryTable tbody tr td');
      expect(summaryTable[0].innerText).toEqual("$100");
      expect(summaryTable[1].innerText).toEqual("$20");
      expect(summaryTable[2].innerText).toEqual("20%");

    });

    afterEach(function() {
      allPayments = {};
      document.querySelector('#paymentTable tbody').innerHTML = '';
      document.querySelectorAll('#summaryTable').innerHTML = '';
      paymentId = 0;
      updateSummary();
      curPayment = {};
    });
  });
  