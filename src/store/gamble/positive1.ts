import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GamblePropertyType} from '@views/Gamble/hooks/useGamble';

export const positive1Atom = atom<GamblePropertyType>({
  key: ATOM_KEY.POSITIVE1,
  default: {
    ability: undefined,
    score: [],
  },
});
