$(() => {
  view.renderInit();

  $('#title').change(() => {
    view.renderJob();
  });

  $('#design').change(() => {
    view.renderTshirt();
  });

  $('#payment').change(() => {
    view.renderPayment();
  });

  $('.activities input').change(e => {
    let checkedTarget = e.target.name.replace('-', '');
    controller.setActivities();
    view.renderActivities(checkedTarget);
    view.renderBilling();
  });

  $('form').submit(e => {
    e.preventDefault();
    let isValid = controller.isValid();

    if (isValid[0]) {
      view.renderValidation(`Form is valid, registration successful.`);
    } else {
      view.renderValidation(`Form is invalid, ${isValid[1]}`);
    }
  });
});
