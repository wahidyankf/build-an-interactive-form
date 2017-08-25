const controller = {
  getJob() {
    return $('#title').val();
  },
  getTshirtDesign() {
    return $('#design').val();
  },
  getPaymentType() {
    return $('#payment').val();
  },
  getName() {
    return $('#name').val();
  },
  getEmail() {
    return $('#mail').val();
  },
  getCCData() {
    let ccNum = $('#cc-num').val();
    let zip = $('#zip').val();
    let cvv = $('#cvv').val();
    return {
      ccNum,
      zip,
      cvv
    };
  },
  setActivities() {
    $('.activities input').each((i, e) => {
      let checkedAttr = $('.activities input').eq(i).prop('checked');
      data.activities[e.name.replace('-', '')] = checkedAttr;
    });
  },
  getActivities(activity) {
    return data.activities[activity];
  },
  getBilling() {
    return data.billing;
  },
  calculateBilling() {
    let billing = 0;
    for (const key of Object.keys(data.activities)) {
      if (data.activities[key] == true) {
        billing += data.price[key];
      } else {
        billing += 0;
      }
    }
    data.billing = billing;
  },
  isValid() {
    if (!this.isNameValid()) {
      return [false, `name field can't be empty.`];
    }
    if (!this.isEmailValid()) {
      return [false, `e-mail address must be valid.`];
    }
    if (!this.isActivityValid()) {
      return [false, `at least 1 activity must be selected.`];
    }
    if (!this.isPaymentValid()) {
      return [false, `payment option must be selected`];
    }
    if (this.getPaymentType() == 'credit card') {
      if (!this.isCCValid()) {
        return [false, `please supplied the credit card's details.`];
      }
    }
    return [true, ''];
  },
  isNameValid() {
    let name = this.getName();
    let regex = /.+/;
    return regex.test(name);
  },
  isEmailValid() {
    let email = this.getEmail();
    let regex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    return regex.test(email);
  },
  isActivityValid() {
    for (const key of Object.keys(data.activities)) {
      if (data.activities[key] == true) {
        return true;
      }
    }
    return false;
  },
  isPaymentValid() {
    let paymentType = this.getPaymentType();
    if (paymentType == 'select_method') {
      return false;
    } else {
      return true;
    }
  },
  isCCValid() {
    let ccData = this.getCCData();
    let isCcNumValid = /^\d{12,19}$/.test(ccData.ccNum);
    let isZipValid = /^\d{5}$/.test(ccData.zip);
    let isCvvValid = /^\d{3}$/.test(ccData.cvv);
    return isCcNumValid && isZipValid && isCvvValid;
  }
};
