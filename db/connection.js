const mongoose = require('mongoose');

const connectDB = URL => {
    const conn = mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`CONNECTED TO THE DB`.cyan.underline.bold)

    return conn;
}

module.exports = connectDB;



// .then(() => console.log('CONNECTED TO THE DB...'.cyan.underline.bold))
// .catch(err => console.log(err));