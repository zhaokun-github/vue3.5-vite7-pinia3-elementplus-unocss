/** 判断是否为手机号 */
export function isPhone(str: string): boolean {
  return /^1[3-9]\d{9}$/.test(str);
}

/** 格式化时间为 yyyy-mm-dd hh:mm:ss */
export function formatDate(date: Date | string | number): string {
  const d = new Date(date);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

/** 深拷贝对象 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/** 防抖函数 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay = 300) {
  let timer: number | undefined;
  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}

/** 节流函数 */
// 导出一个函数throttle，该函数接收一个函数fn和一个可选的延迟时间delay（默认为300ms），返回一个新的函数
export function throttle<T extends (...args: any[]) => any>(fn: T, delay = 300) {
  // 定义一个变量last，用于记录上一次执行函数的时间
  let last = 0;
  // 返回一个新的函数，该函数接收任意数量的参数
  return function (...args: Parameters<T>) {
    // 获取当前时间
    const now = Date.now();
    // 如果当前时间与上一次执行函数的时间差大于延迟时间，则执行函数，并更新last的值
    if (now - last > delay) {
      last = now;
      fn(...args);
    }
  };
}

/** 随机生成一个字符串 */
export function randomString(len = 8): string {
  return Math.random().toString(36).substr(2, len);
}