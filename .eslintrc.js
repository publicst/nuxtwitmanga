module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    // note : have prettier toward the end of extends - https://qiita.com/soarflat/items/06377f3b96964964a65d
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins:[
    'vue',
    'prettier',
    'nuxt'
  ],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing":["error", "PascalCase"],
    "no-console":process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
}
