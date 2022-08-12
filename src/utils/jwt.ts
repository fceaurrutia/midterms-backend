import fs from 'fs';
import jwt from 'jsonwebtoken';

const readKeys = () => {
  const privateKey = Buffer.from(
    fs.readFileSync('utils/encrypt/private.pem', {
      encoding: 'utf-8',
    })
  );
  const publicKey = Buffer.from(
    fs.readFileSync('utils/encrypt/public.pub', {
      encoding: 'utf-8',
    })
  );
  return { privateKey, publicKey };
};

export const makeToken = (payload: unknown) => {
  const { privateKey } = readKeys();
  const token = jwt.sign(payload as object, privateKey, {
    algorithm: 'RS256',
    expiresIn: '24h',
  });

  return token;
};

// export const verifyToken = () => {};
