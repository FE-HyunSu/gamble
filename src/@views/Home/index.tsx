import {FC, Fragment} from 'react';
import {useRouter} from 'next/router';
import styled from '@emotion/styled';
import BaseButton from '@views/@common/BaseButton';
import useTranslate from '@hooks/useTranslate';
import {ROUTES} from '@constants/routes';
import {useModal} from '@hooks/useModal';
import useEffectOnce from '@hooks/useEffectOnce';
import {rem} from '@styles/theme';
import OnboardingModal from './components/Onboarding';

const HomeScreen: FC = () => {
  const router = useRouter();
  const {translate} = useTranslate();
  const onboardingModalProps = useModal();

  // TODO: 온보딩 모달 뜨는 조건 추가
  // 로컬 스토리지를 기반으로 하면될듯 || auth 기능을 붙혀버리자
  useEffectOnce(() => onboardingModalProps.showModal());

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
