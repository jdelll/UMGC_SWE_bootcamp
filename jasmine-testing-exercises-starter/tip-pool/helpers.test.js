describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      billAmtInput.value = 200;
      tipAmtInput.value = 10;
      submitPaymentInfo();

    });
  
    it('should sum total payments', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(25);
      expect(sumPaymentTotal('billAmt')).toEqual(300);
      expect(sumPaymentTotal('tipAmt')).toEqual(30);
    });
  
    it('should calculate tip percent', function () {
        expect(calculateTipPercent(100,10)).toEqual(10);
    });

    it('should append td to a tr', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr,'test');
        expect(newTr.childNodes[0].nodeName).toEqual('TD');
        expect(newTr.childNodes[0].innerText).toEqual('test');
    });

    it('should add a delete button', function () {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.childNodes[0].id).toEqual('remove');
      expect(newTr.childNodes[0].innerText).toEqual('X');
  });


  
    afterEach(function() {
      allPayments = {};
      document.querySelector('#paymentTable tbody').innerHTML = '';
      document.querySelectorAll('#summaryTable').innerHTML = '';
      updateSummary();
      paymentId = 0;
    });
  });
  