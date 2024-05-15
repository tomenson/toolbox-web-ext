import React, { useCallback, useEffect } from 'react';

import { runtime, scripting, tabs } from './browser';
import { Hello } from '@src/components/hello';
import { Scroller } from '@src/components/scroller';

import css from './styles.module.css';

async function executeScript(position: number) {
  const [activeTab] = await tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!activeTab) return;

  const tabId = activeTab.id ?? 0;

  await scripting.executeScript({
    target: { tabId },
    func: scrollWindow,
    args: [position],
  });
}

function scrollWindow(position: number) {
  window.scroll(0, position);
}

export const Popup: React.FC = () => {
  useEffect(() => {
    runtime.sendMessage({ popupMounted: true });
  }, []);

  const handleScrollTop = useCallback(() => {
    executeScript(0);
  }, []);

  const handleScrollBottom = useCallback(() => {
    executeScript(9999999);
  }, []);

  return (
    <div className={css.popupContainer}>
      <div className="mx-4 my-4">
        <Hello />
        <hr />
        <Scroller
          onClickScrollBottom={handleScrollBottom}
          onClickScrollTop={handleScrollTop}
        />
      </div>
    </div>
  );
};
