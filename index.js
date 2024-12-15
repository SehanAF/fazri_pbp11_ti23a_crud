const express = require('express');
const bodyParser = require('body-parser');

const mahasiswaRouter = require('./routes/mahasiswaRoutes');
const dosenRouter = require('./routes/dosenRoutes');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRouter); 
app.use('/dosen', dosenRouter);

app.listen(PORT, () => {
 console.log(`Server berjalan di http://localhost:${PORT}`);
}); 