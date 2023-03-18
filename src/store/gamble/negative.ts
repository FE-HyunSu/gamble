import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GamblePropertyType} from '@views/Gamble/hooks/useGamble';

export const negativeAtom = atom<GamblePropertyType>({
  key: ATOM_KEY.NEAGTIVE,
  default: {
    ability: undefined,
    score: [],
  },
});
