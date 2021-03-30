const eComerce = require('./eComerce')
eComerce.methods(['post', 'get', 'put', 'delete'])
eComerce.updateOptions({new: true, runValidators: true})

module.exports = eComerce