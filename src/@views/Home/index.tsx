import {FC, Fragment} from 'react';
import {useRouter} from 'next/router';
import styled from '@emotion/styled';
import BaseButton from '@views/@common/BaseButton';
import useTranslate from '@hooks/useTranslate';
import {ROUTES} from '@constants/routes';
import {useModal} from '@hooks/useModal';
import useEffectOnce from '@hooks/useEffectOnce';
import {rem} from '@styles/theme';
import {getLocalStorageItems, setLocalStorageItems} from '@utils/storage';
import {STORAGE_KEY} from '@constants/key';
import OnboardingModal from './components/Onboarding';

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
        <Content>framer-motion을 이용한 예쁜 애니메이트 이미지</Content>
        <BaseButton value={translate('GO_TO_GAMBLE')} onClick={() => router.push(ROUTES.GAMBLE)} />
      </Container>
      <OnboardingModal modalProps={onboardingModalProps} />
    </Fragment>
  );
};

export default HomeScreen;

const Container = styled.div`
  padding: ${rem(16)};
`;

const Content = styled.main`
  margin: ${rem(40)} 0;
`;
