import React from 'react';

import css from './styles.module.css';

interface Props {
  onClickScrollBottom: () => void;
  onClickScrollTop: () => void;
}

/**
 * Component that renders buttons to scroll to the top and bottom of the page.
 */
export const Scroller: React.FC<Props> = ({
  onClickScrollBottom,
  onClickScrollTop,
}) => {
  return (
    <div className="grid gap-3 grid-cols-2 mt-3 w-full">
      <button
        className={css.btn}
        data-testid="scroll-to-top"
        onClick={onClickScrollTop}
      >
        Scroll To Top
      </button>
      <button
        className={css.btn}
        data-testid="scroll-to-bottom"
        onClick={onClickScrollBottom}
      >
        Scroll To Bottom
      </button>
    </div>
  );
};
