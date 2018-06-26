var moment = require('moment');

var someTimeStamp = moment().valueOf()
var createdAt = 1234
var date = moment(createdAt)
date.add(1,'y')
console.log(date.format('h:mm a'))
