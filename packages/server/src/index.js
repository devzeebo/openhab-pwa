import express from 'express';
import path from 'path';

const app = express();

const clientPath = path.join(__dirname, '..', '..', 'client', 'dist');

app.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.use('/js', express.static(path.join(clientPath, 'js')));

app.listen(4000, () => {
  console.log('Server running at localhost:4000');
});
