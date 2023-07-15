import styled from '@emotion/styled';
import { IArrow } from './types';

const Arrow = styled.div<IArrow>(({ size = 0, color = 'black' }) => ({
  position: 'absolute',
  display: 'inline-block',
  width: 0,
  height: 0,
  borderLeft: `${size}px solid ${color}`,
  borderTop: `${size}px solid transparent`,
  borderBottom: `${size}px solid transparent`,
  top: `-${size * 1.5}px`,
  left: `calc(50% - ${(size - 1) / 2}px)`,
  transform: 'rotate(90deg)',
}));

export default Arrow;
