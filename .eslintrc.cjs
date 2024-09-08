/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // prettier 专注于代码的美观度 (格式化工具)
    // 前置：
    // 1. 禁用格式化插件 Prettier - Code formatter
    // 2. 在 VS Code 设置中关闭 Format On Save
    // 3. 安装 ESLint 插件, 并配置保存时自动修复 "source.fixAll": "explicit"
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        semi: false, // 无分号
        printWidth: 100, // 每行宽度至多 100 字符
        trailingComma: 'none', // 不加对象|数组最后逗号
        endOfLine: 'auto' // 换行符号不限制（Win Mac 不一致）
      }
    ],
    // ESLint 关注于规范, 如果不符合规范，报错
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // Vue 组件名称多单词组成（忽略 index.vue）
      }
    ],
    'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验 (props 解构丢失响应式)
    'no-undef': 'error' // 添加未定义变量错误提示
  },
  // 声明全局变量名，解决直接使用 ElMessage 等组件的报错问题
  globals: {
    ElMessage: 'readonly',
    ElMessageBox: 'readonly',
    ElLoading: 'readonly'
  }
}