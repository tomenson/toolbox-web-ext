import { runtime } from './browser';

interface Message {
  popupMounted: boolean;
}

runtime.onMessage.addListener((message: Message) => {
  if (message.popupMounted) {
    // eslint-disable-next-line no-console
    console.log('Popup has mounted');
  }
});
