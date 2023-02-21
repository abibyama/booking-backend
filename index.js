const express = require('express')

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Booking system backend');
})

app.listen(PORT, () => {
  console.log('The application is listening '
    + 'on port http://localhost:' + PORT);
})

