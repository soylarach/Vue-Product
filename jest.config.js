module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "vue"],
  transformIgnorePatterns: ["/node_modules/(?!vuetify)"]
};