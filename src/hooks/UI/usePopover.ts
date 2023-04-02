import type { Placement } from '@popperjs/core';
import { useMemo, useState } from 'react';
import { usePopper } from 'react-popper';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

export const usePopover = ({
  offset = [0, 20],
  placement = 'bottom',
}: {
  offset?: [number, number];
  placement?: Placement;
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      { name: 'arrow', options: { element: arrowElement } },
      preventOverflow,
      flip,
    ],
  });

  const parentPopperAttributes = {
    ref: setReferenceElement,
  };

  const childPopperAttributes = useMemo(() => {
    const attr = attributes?.popper || {};

    return {
      ref: setPopperElement,
      style: styles.popper,
      ...attr,
    };
  }, [styles, attributes]);

  const arrowAttributes = {
    ref: setArrowElement,
    style: styles.arrow,
  };

  return [parentPopperAttributes, childPopperAttributes, arrowAttributes];
};
