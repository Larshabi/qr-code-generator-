const QRCode = require('qrcode');


const data = {
    name: 'Olalekan Lasabi',
    age: 23,
    department: 'Computer Science and Engineering',
    id: 1
}

let stringdata = JSON.stringify(data);
QRCode.toString(stringdata, { type: 'terminal' }, (err, url) => {
    if (err) {
        return console.log("An error occurred");
    }
    console.log(url)
})
QRCode.toDataURL(stringdata, (err, code) => {
    if (err) {
        return console.log("An error occurred");
    }
    console.log(code);
})