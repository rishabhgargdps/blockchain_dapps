const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://rishabh1234:rishabh@blockchain-ecommerce.up78i.mongodb.net/blockchain-ecommerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
}