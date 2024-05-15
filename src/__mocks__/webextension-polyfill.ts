/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Browser } from 'webextension-polyfill';

// @ts-ignore
export default {
  tabs: {
    executeScript(tabId, details) {
      return Promise.resolve({ done: true });
    },
    query(params) {
      return Promise.resolve([]);
    },
  },
  runtime: {
    sendMessage(extId, message, options) {
      return;
    },
  },
} as Partial<Browser>;

export interface Tab {
  id: number;
}

export interface Tabs {
  Tab: Tab;
}
