


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
    //专注于代码的美观度
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //无分号
        printWidth: 80, //每行宽度至多80字符
        trailingComma: 'none', //不加对象数组最后逗号
        endOfLine: 'auto' //换行符号不限制（win mac不统一）
      }
    ],
    //Eslint更加专注规范,如果不符合，报错
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': ['off'], //关闭props结构的校验
    'no-undef': 'error' //未定义变量没有使用警告
  },
  globals:{
    ElMessage:'readonly',
    ElMessageBox:'readonly',
    ElLoading:'readonly'
    

  }
}
