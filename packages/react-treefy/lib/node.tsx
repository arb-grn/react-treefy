import React from 'react';
import { NODE_MARGIN, PATH_SIZE } from './constant';

import { INodeProps } from './types';
import Arrow from './arrow';
import styled from '@emotion/styled';

const NodeContainer = styled.div<INodeProps>(
  ({
    isRoot,
    arrow,
    isFirstChild,
    isLastChild,
    isSingleChild,
    colorBefore,
    hasChildren,
    colorAfter,
  }) => ({
    'position': 'relative',
    'margin': `${NODE_MARGIN}px`,
    ':before': !isRoot
      ? {
          content: '""',
          height: `${NODE_MARGIN - (arrow?.size ?? 0) + 1}px`,
          borderLeft: !isFirstChild ? `solid ${PATH_SIZE}px` : undefined,
          borderRight: isFirstChild ? `solid ${PATH_SIZE}px` : undefined,
          display: 'inline-block',
          position: 'absolute',
          left: `calc(50% - ${(PATH_SIZE - 1) / 2}px)`,
          top: `-${NODE_MARGIN}px`,
          borderTopRightRadius:
            !isSingleChild && isLastChild ? `${PATH_SIZE / 2}px` : undefined,
          borderTopLeftRadius:
            !isSingleChild && isFirstChild ? `${PATH_SIZE / 2}px` : undefined,
          color: colorBefore,
        }
      : {},
    ':after': hasChildren
      ? {
          content: '""',
          height: `${NODE_MARGIN}px`,
          borderLeft: `solid ${PATH_SIZE}px`,
          display: 'inline-block',
          position: 'absolute',
          left: `calc(50% - ${PATH_SIZE / 2}px)`,
          color: colorAfter,
        }
      : {},
  })
);

const Node = React.forwardRef<HTMLDivElement, INodeProps>((props, ref) => (
  <NodeContainer {...props} ref={ref}>
    <div>
      {!props.isRoot && Boolean(props.arrow) && <Arrow {...props.arrow} />}
      {props.node(props.label)}
    </div>
  </NodeContainer>
));

export default Node;
