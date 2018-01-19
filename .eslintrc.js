module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "eqeqeq": [
      2
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1,
        "maxBOF": 1,
        "maxEOF": 1
      }
    ],
    "eol-last": [
      2,
      "always"
    ]
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "globals": {
    "chrome": false,
    "_browser": false
  }
}