import {FC, Fragment, useCallback} from 'react';
import styled from '@emotion/styled';
import EffectButton from '@components/EffectButton';
import {rem} from '@styles/theme';
import useGamble, {AbilityType} from '@views/Gamble/hooks/useGamble';
import {useModal} from '@hooks/useModal';
import ConfirmModal from '@views/@common/Modals/ConfirmModal';
import {useToast} from '@hooks/useToast';
import useTranslate from '@hooks/useTranslate';
import GambleBoard from './components/Board';
import GambleResetModalContent from './components/GambleResetModalContent';

interface Props {
  abilities: AbilityType[];
}

const GambleScreen: FC<Props> = ({abilities}) => {
  const gamble = useGamble(abilities);
  const resetModalProps = useModal();
  const {showToast} = useToast();
  const {translate} = useTranslate();

  const handleResetClick = useCallback(() => {
    if (gamble.isOver) {
      gamble.reset();
    } else {
      resetModalProps.showModal();
    }
  }, [gamble, resetModalProps]);

  const handleReset = useCallback(() => {
    gamble.reset();
    resetModalProps.hideModal();
    showToast(`${translate('INITIALIZED')}`);
  }, [gamble, resetModalProps, showToast, translate]);

  return (
    <Fragment>
      <main>
        <GambleBoard isOver={gamble.isOver} gamble={gamble} />
        <ButtonsWrapper>
          <EffectButton value={translate('RETRY')} width={250} onClick={handleResetClick} type={`wave`} />
        </ButtonsWrapper>
      </main>
      <ConfirmModal modalProps={resetModalProps} onConfirmClick={handleReset} content={<GambleResetModalContent />} />
    </Fragment>
  );
};

export default GambleScreen;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(16)};
  margin-top: ${rem(40)};
`;
