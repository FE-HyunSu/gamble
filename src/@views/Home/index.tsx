import {FC, Fragment} from 'react';
import {useRouter} from 'next/router';
import styled from '@emotion/styled';
import EffectButton from '@views/@common/EffectButton';
import useTranslate from '@hooks/useTranslate';
import {ROUTES} from '@constants/routes';
import {useModal} from '@hooks/useModal';
import useEffectOnce from '@hooks/useEffectOnce';
import {COLORS, rem} from '@styles/theme';
import {getLocalStorageItems, setLocalStorageItems} from '@utils/storage';
import {STORAGE_KEY} from '@constants/key';
import OnboardingModal from './components/OnboardingModal';

const HomeScreen: FC = () => {
  const router = useRouter();
  const {translate} = useTranslate();
  const onboardingModalProps = useModal();

  useEffectOnce(() => {
    const isOB = getLocalStorageItems(STORAGE_KEY.GUEST);
    // if (!isOB) {
    onboardingModalProps.showModal();
    // setLocalStorageItems(STORAGE_KEY.GUEST, true);
    // }
  });

  return (
    <Fragment>
      <Container>
        <EffectButton
          value={translate('GO_TO_GAMBLE')}
          onClick={() => router.push(ROUTES.GAMBLE)}
          width={200}
          height={150}
          borderColor={COLORS.AQUA}
          textColor={COLORS.RED}
          type={`wave`}
        />
      </Container>
      <OnboardingModal modalProps={onboardingModalProps} />
    </Fragment>
  );
};

export default HomeScreen;

const Container = styled.div`
  padding: ${rem(16)};
  padding-top: ${rem(200)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
