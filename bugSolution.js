const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(data => {
    res.send('Hello, world! ' + JSON.stringify(data));
  }).catch(error => {
    console.error('Error in async operation:', error);
    res.status(500).send('Server error'); //Send proper error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
  return {data: 'some data'};
}