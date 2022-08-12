import crypto from 'crypto';
import fs from 'fs';

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

export const EncryptRSA = (payload: string): string => {
  const { publicKey } = readKeys();
  const encryptedData = crypto.publicEncrypt(
    { key: publicKey },
    Buffer.from(payload)
  );
  return encryptedData.toString('base64');
};

export const DecryptRSA = (encrypted: string): string => {
  const { privateKey } = readKeys();

  const decrypted = crypto.privateDecrypt(
    { key: privateKey },
    Buffer.from(encrypted, 'base64')
  );

  return decrypted.toString('utf-8');
};

export const ValidateRSA = (encrypted: string, expected: string): boolean => {
  const { privateKey } = readKeys();

  const validate = crypto.privateDecrypt(
    { key: privateKey },
    Buffer.from(encrypted, 'base64')
  );

  return expected === validate.toString('utf-8');
};
