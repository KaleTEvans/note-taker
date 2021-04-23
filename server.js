const apiRoutes = require('./routes/apiRoutes');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/db', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`);
});