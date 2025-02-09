import { atom } from 'recoil';

export const capturedImageState = atom<Blob | null>({
  key: 'capturedImageState',
  default: null,
});
