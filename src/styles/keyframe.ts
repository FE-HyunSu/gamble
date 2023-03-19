import {keyframes} from '@emotion/react';

export const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  } 
`;

export const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const borderWave = keyframes`
  0% {
    transform:scale(1,1);
  }
  100% {
    transform:scale(1.2,2);
    opacity:0;
  }
`;

export const bounce = keyframes`
  0% {
    transform:scale(1,1) translateY(0);
  }
  33% {
    transform:scale(1.1,.9);
  }
  66% {
    transform:scale(.9,1.1);
  }
  100% {
    transform:scale(1,1);
  }
`;
