import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    message: 'Hello, Alien Signals!',
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    setMessage(newMessage) {
      this.message = newMessage;
    },
  },
});

export const useAuditStore = defineStore('audit', {
  state: () => ({
    passedCount: 0,
    count: 0 // 新增计数器
  }),
  actions: {
    increment() {
      this.passedCount++
    },
    addOne() {
      this.count++
    }
  }
})