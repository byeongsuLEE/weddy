import { atom } from 'recoil';

export const firebaseTokenState = atom<string | null>({
  key: 'firebaseTokenState',
  default: null,
});
