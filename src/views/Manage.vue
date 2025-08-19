<template>
  <div class="container">
    <h1>部分加密输入框</h1>
    <div class="input-group">
      <label for="secure-input">请输入内容：</label>
      <input
        id="secure-input"
        v-model="displayValue"
        type="text"
        @input="handleInput"
        @focus="showOriginal"
        @blur="showEncrypted"
        placeholder="第4-8位会显示为*"
      />
    </div>
    <button @click="handleSubmit">提交数据</button>

    <div class="debug-info">
      <p>显示值: {{ displayValue }}</p>
      <p>原始值: {{ originalValue }}</p>
      <p>加密字符记录: {{ encryptedChars }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from "vue";

export default defineComponent({
  name: "SecureInput",
  setup() {
    const originalValue = ref<string>("");
    const displayValue = ref<string>("");
    const encryptedChars = ref<Record<number, string>>({});

    // 加密文本
    const encryptText = (text: string): string => {
      if (!text || text.length <= 3) {
        // 当文本不足4位时，清除所有加密记录
        encryptedChars.value = {};
        return text;
      }

      const chars = text.split("");

      // 先清除不在当前文本范围内的加密记录
      Object.keys(encryptedChars.value).forEach((key) => {
        const index = parseInt(key);
        if (index >= chars.length) {
          delete encryptedChars.value[index];
        }
      });

      for (let i = 3; i < 7 && i < chars.length; i++) {
        // 如果当前位置已经有记录但字符已改变，更新记录
        if (
          encryptedChars.value[i] &&
          chars[i] !== encryptedChars.value[i] &&
          chars[i] !== "*"
        ) {
          encryptedChars.value[i] = chars[i];
        }
        // 如果当前位置没有记录且不是星号，保存原始字符
        else if (!encryptedChars.value[i] && chars[i] !== "*") {
          encryptedChars.value[i] = chars[i];
        }
        // 替换为星号
        chars[i] = "*";
      }
      return chars.join("");
    };

    // 解密文本
    const decryptText = (encryptedText: string): string => {
      const chars = encryptedText.split("");
      for (let i = 3; i < 7 && i < chars.length; i++) {
        if (encryptedChars.value[i]) {
          chars[i] = encryptedChars.value[i];
        }
      }
      return chars.join("");
    };

    // 处理输入事件
    const handleInput = (event: Event) => {
      const inputEl = event.target as HTMLInputElement;
      const cursorPos = inputEl.selectionStart || 0;
      const newValue = inputEl.value;

      // 更新显示文本
      displayValue.value = newValue;

      // 更新原始文本
      originalValue.value = decryptText(newValue);

      // 重新加密显示文本
      displayValue.value = encryptText(originalValue.value);

      // 调整光标位置
      nextTick(() => {
        let newCursorPos = cursorPos;
        if (
          cursorPos >= 3 &&
          cursorPos <= 6 &&
          originalValue.value.length > 6
        ) {
          newCursorPos = 7;
        } else if (cursorPos > originalValue.value.length) {
          newCursorPos = originalValue.value.length;
        }
        inputEl.setSelectionRange(newCursorPos, newCursorPos);
      });
    };

    // 显示原始文本（获取焦点时）
    const showOriginal = () => {
      displayValue.value = originalValue.value;
    };

    // 显示加密文本（失去焦点时）
    const showEncrypted = () => {
      displayValue.value = encryptText(originalValue.value);
    };

    // 提交数据
    const handleSubmit = () => {
      console.log("提交的原始数据:", originalValue.value);
      alert(`提交的原始数据: ${originalValue.value}`);
    };

    return {
      originalValue,
      displayValue,
      encryptedChars,
      handleInput,
      showOriginal,
      showEncrypted,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #369f6b;
}

.debug-info {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-family: monospace;
}
</style>