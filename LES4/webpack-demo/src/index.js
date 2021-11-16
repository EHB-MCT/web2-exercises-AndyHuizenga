import _ from 'lodash';
import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be')


var cleave = new Cleave('.input-phone', {
    phone: true,
    blocks: [2, 2, 2, 3, 2],
    phoneRegionCode: 'BE'
});


var cleave = new Cleave('.input-age', {
    numeral: true,
    numeralPositiveOnly: true
});

var cleave = new Cleave('.input-age', {
    numeral: true,
    numeralPositiveOnly: true
});

var cleave = new Cleave('.input-birthday', {
    date: true,
    datePattern: ['d', 'm', 'Y']
});