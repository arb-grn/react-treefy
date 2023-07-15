export interface INode {
  label: string;
  color?: string;
  children?: INode[];
}

export interface IArrow {
  size?: number;
  color?: string;
}

export interface ITreeProps {
  data: INode;
  arrow?: IArrow;
  node: (label: string) => React.ReactNode;
}

export interface INodeParentProps extends INode {
  children?: Omit<INodeParentProps, "node">[];
  isRoot?: boolean;
  isFirstChild?: boolean;
  isLastChild?: boolean;
  isSingleChild?: boolean;
  colorBefore?: string;
  arrow?: IArrow;
  node: (label: string) => React.ReactNode;
}

export interface INodeProps {
  label: string;
  onClick: () => void;
  hasChildren: boolean;
  isRoot?: boolean;
  isFirstChild?: boolean;
  isLastChild?: boolean;
  isSingleChild?: boolean;
  colorBefore?: string;
  colorAfter?: string;
  arrow?: IArrow;
  node: (label: string) => React.ReactNode;
}
