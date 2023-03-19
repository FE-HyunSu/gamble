import React, {useState} from 'react';
import styled from '@emotion/styled';
import {FC, HTMLProps} from 'react';
import {COLORS, rem} from '@styles/theme';
import {borderWave, bounce} from '@styles/keyframe';
import {BaseButtonProps} from './BaseButton';

export interface EffectButtonProps extends BaseButtonProps {
  type: string;
}

// Effect가 추가된 Button 입니다.
// Basebutton의 BasebuttonProps에서 extends 적용.
// Effect type : wave / bounce.
const EffectButton: FC<EffectButtonProps> = ({
  value,
  className,
  width,
  type,
  height,
  textColor = COLORS.BLACK,
  bgColor = COLORS.WHITE,
  borderColor = COLORS.GREY,
  onClick,
}) => {
  const [isAddClickClass, setAddClickClass] = useState<Boolean>(false);
  const clickEffect = () => {
    if (!!type) {
      setAddClickClass(true);
      const EffectTimeout = setTimeout(() => {
        setAddClickClass(false);
      }, 1000);
    }
  };
  return (
    <StyledButton
      className={`${isAddClickClass ? type : ``}${!!className ? ' ' + className : ``}`}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      onClick={() => {
        onClick();
        clickEffect();
      }}>
      {value}
    </StyledButton>
  );
};

export default EffectButton;

const StyledButton = styled.button<{
  textColor: string;
  bgColor: string;
  borderColor: string;
  width?: number;
  height?: number;
}>`
  color: ${({textColor}) => textColor};
  background-color: ${({bgColor}) => bgColor};
  width: ${({width}) => (width ? rem(width) : '100%')};
  height: ${({height}) => (height ? rem(height) : '100%')};
  padding: ${rem(6)};
  border: ${({borderColor}) => `${rem(1)} solid ${borderColor}`};
  border-radius: ${rem(8)};

  cursor: pointer;
  :active {
    background-color: ${COLORS.GREY};
    color: ${COLORS.WHITE};
  }
  &.wave {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: ${({borderColor}) => `${rem(1)} solid ${borderColor}`};
      border-radius: ${rem(8)};
      animation: ${borderWave} 1s forwards;
    }
  }
  &.bounce {
    animation: ${bounce} 0.5s forwards;
  }
`;
