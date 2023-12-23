"use client"

import React, { ReactNode } from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

type Props = {
  children: ReactNode
}

const SplittingTextClientOnlyComponent = ({ children }: Props) => {

  return <>{children}</>;
};

export default SplittingTextClientOnlyComponent;