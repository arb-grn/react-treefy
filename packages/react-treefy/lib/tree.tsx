import React from 'react';
import NodeParent from './parent-node';
import { ITreeProps } from './types';

export const Tree: React.FC<ITreeProps> = ({ data, ...rest }) => (
  <NodeParent {...data} {...rest} isRoot />
);
