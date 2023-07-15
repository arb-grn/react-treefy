import React, { useLayoutEffect, useRef, useState } from 'react';
import Node from './node';
import { NODE_MARGIN, PATH_SIZE } from './constant';
import { INodeParentProps } from './types';
import styled from '@emotion/styled';

const ParentNodeContainer = styled.div(() => ({
  width: 'fit-content',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

const ParentNodeChildrenContainer = styled.div(() => ({
  display: 'flex',
  marginRight: 'auto',
  marginLeft: 'auto',
  position: 'relative',
}));

type ParentNodeChildContainerProps = {
  isFirstChild: boolean;
  isLastChild: boolean;
};
const ParentNodeChildContainer = styled.div<ParentNodeChildContainerProps>(
  ({ color, isFirstChild, isLastChild }) => ({
    'position': 'relative',
    ':before': {
      content: '""',
      borderTop: `solid ${PATH_SIZE}px`,
      display: 'inline-block',
      position: 'absolute',
      color,
      top: 0,
      width: '100%',
      boxSizing: 'border-box',
      ...(isFirstChild && { width: 'calc(50%)', right: 0 }),
      ...(isLastChild && { width: `calc(50% - ${(PATH_SIZE - 1) / 2}px)` }),
    },
  })
);

const NodeParent = React.forwardRef<HTMLDivElement, INodeParentProps>(
  (
    {
      label,
      children = [],
      isRoot,
      isFirstChild,
      isLastChild,
      isSingleChild,
      color = 'black',
      colorBefore = 'black',
      arrow,
      node,
    },
    ref
  ) => {
    const [showChildren, setShowChildren] = useState(true);
    const hasChildren = children.length > 0;
    const parentNodeRef = useRef<HTMLDivElement>();
    const [nodeWidth, setNodeWidth] = useState<number>();

    useLayoutEffect(() => {
      if (parentNodeRef.current) {
        setNodeWidth(parentNodeRef.current.offsetWidth + NODE_MARGIN * 2);
      }
    }, []);

    return (
      <ParentNodeContainer>
        <Node
          label={label}
          onClick={() => {
            setShowChildren((old) => !old);
          }}
          hasChildren={hasChildren && showChildren}
          isRoot={isRoot}
          ref={parentNodeRef as React.MutableRefObject<HTMLDivElement>}
          isFirstChild={isFirstChild}
          isLastChild={isLastChild}
          isSingleChild={isSingleChild}
          colorBefore={colorBefore}
          colorAfter={color}
          arrow={arrow}
          node={node}
        />
        {hasChildren && showChildren && nodeWidth && (
          <ParentNodeChildrenContainer>
            {children.map((child, index) => {
              const isFirstChild = index === 0;
              const isLastChild = index === children.length - 1;

              return (
                <ParentNodeChildContainer
                  key={index}
                  color={color}
                  isFirstChild={isFirstChild}
                  isLastChild={isLastChild}
                >
                  <NodeParent
                    ref={ref}
                    {...child}
                    isFirstChild={isFirstChild}
                    isLastChild={isLastChild}
                    isSingleChild={children.length === 1}
                    color={child.color ?? color}
                    colorBefore={color}
                    arrow={arrow}
                    node={node}
                  />
                </ParentNodeChildContainer>
              );
            })}
          </ParentNodeChildrenContainer>
        )}
      </ParentNodeContainer>
    );
  }
);

export default NodeParent;
