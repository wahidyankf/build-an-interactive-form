const view = {
  renderInit() {
    $('#title').after(`
      <input id="other-title" placeholder="Your Title"></input>
    `);

    $('.activities').append(`
      <span>Total: <span id="total-billing">0</span> </span> 
    `);

    $('#other-title').hide();

    $('#credit-card').hide();
    $('#paypal').hide();
    $('#bitcoin').hide();
  },
  renderJob() {
    let job = controller.getJob();
    if (job == 'other') {
      $('#other-title').show();
    } else {
      $('#other-title').hide();
    }
  },
  renderTshirt(model) {
    let tShirtDesign = controller.getTshirtDesign();
    if (tShirtDesign == 'js puns') {
      $('#color option').hide();
      $('#color option[value="cornflowerblue"]').show();
      $('#color option[value="darkslategrey"]').show();
      $('#color option[value="gold"]').show();
    } else if (tShirtDesign == 'heart js') {
      $('#color option').hide();
      $('#color option[value="tomato"]').show();
      $('#color option[value="steelblue"]').show();
      $('#color option[value="dimgrey"]').show();
    } else {
      $('#color option').show();
    }
  },
  renderActivities(target) {
    if (target == 'jsframeworks' && data.activities[target] == true) {
      $('input[name="express"]').prop('disabled', true);
    } else if (target == 'jsframeworks' && data.activities[target] == false) {
      $('input[name="express"]').prop('disabled', false);
    } else if (target == 'express' && data.activities[target] == true) {
      $('input[name="js-frameworks"]').prop('disabled', true);
    } else if (target == 'express' && data.activities[target] == false) {
      $('input[name="js-frameworks"]').prop('disabled', false);
    } else if (target == 'jslibs' && data.activities[target] == true) {
      $('input[name="node"]').prop('disabled', true);
    } else if (target == 'jslibs' && data.activities[target] == false) {
      $('input[name="node"]').prop('disabled', false);
    } else if (target == 'node' && data.activities[target] == true) {
      $('input[name="js-libs"]').prop('disabled', true);
    } else if (target == 'node' && data.activities[target] == false) {
      $('input[name="js-libs"]').prop('disabled', false);
    }
  },
  renderBilling() {
    controller.calculateBilling();
    $('#total-billing').text(controller.getBilling());
  },
  renderPayment() {
    $('#credit-card').hide();
    $('#paypal').hide();
    $('#bitcoin').hide();

    let paymentType = controller.getPaymentType();

    if (paymentType == 'credit card') {
      $('#credit-card').show();
    } else if (paymentType == 'paypal') {
      $('#paypal').show();
    } else if (paymentType == 'bitcoin') {
      $('#bitcoin').show();
    }
  },
  renderValidation(message) {
    alert(message);
  }
};
