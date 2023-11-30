import React, { ElementType, ReactNode } from 'react'

type Props = {
  as?: ElementType,
  className?: string,
  children: ReactNode,
}

function Bounded({ as: Comp = "section", className, children, ...restProps }: Props) {
  return (
    <Comp>
      Bounded
    </Comp>
  )
}

export default Bounded