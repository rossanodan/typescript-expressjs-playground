import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const pino = require('pino-http')();

const app = express();
const port = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

app.get('/', (_, response: Response) => {
  response.json({
    status: 200,
    data: {
      name: 'Rossano',
      lastname: "D'Angelo",
      age: 27,
    },
  });
});

app.post('/submit', ({ body }: Request, response: Response) => {
  const magicNumber: number = body?.magicNumber || null;
  if (!magicNumber) {
    response.json({
      status: 400,
      data: {},
      error: 'Bad Request, provide a magic number!',
    });
  } else {
    response.json({
      status: 200,
      data: {
        result: magicNumber * 3.14,
      },
    });
  }
});

app.get('/weather', ({ query }: Request, response: Response) => {
  const city = query?.city || null;
  if (!city) {
    response.json({
      status: 400,
      data: {},
      error: 'Bad Request, provide a city!',
    });
  } else {
    response.json({
      status: 200,
      data: {
        result: `Temperature in ${city} is 30 degrees!`,
      },
    });
  }
});

app.listen(port, () => {
  console.log(`ExpressJS server running on http://localhost:${port}/`);
});