import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'OPTIONS'],
  origin: '*', // Replace '*' with a specific origin if needed
});

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
}

export default cors;
