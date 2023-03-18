import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GamblePropertyType} from '@views/Gamble/hooks/useGamble';

export const positive2Atom = atom<GamblePropertyType>({
  key: ATOM_KEY.POSITIVE2,
  default: {
    ability: undefined,
    score: [],
  },
});
