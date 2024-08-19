import { sha256 } from 'js-sha256';
import rand from 'csprng';

export const hashPassword = (password: string): { salt: string; hash: string } => {
  const salt = rand(330, 36);
  const hash = sha256('' + salt + password);
  return {
    salt: salt,
    hash: hash,
  };
};

export const verifyPassword = (password: string, salt: string, hash: string): boolean => {
  return sha256('' + salt + password) === hash;
};
