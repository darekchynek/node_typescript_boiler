import app from './routes.class'
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/db', { useNewUrlParser: true })
  .then(() => console.log('Connect to MongoDB...'))
  .catch((err) => console.log('Error: ', err.message));

const port = process.env.PORT || 3000;



app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`server is listening on ${port}...`);
});