const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json([
    {
        id: '1',
        name: 'Avengers - Infinity War',
        description: 'a Blue ray movie'
    }
]));

app.listen(port, () =>
    console.log(`Products microservice listening on port ${port}.`));
