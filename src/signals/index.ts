import { signal } from 'alien-signals';

export const count = signal(0);

export const increment = () => {
  count.value++;
};

export const decrement = () => {
  count.value--;
};