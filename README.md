# eslint-plugin-agree
agree自定义eslint规则

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-agree`:

```
$ npm install eslint-plugin-agree --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-agree` globally.

## Usage

Add `agree` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "agree"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "agree/rule-name": 2
    }
}
```

## Rules
### agree/async-must-await
Invalid code: (since getResultAsync is called without await)
```js
async function getResultAsync() {};
async function submit() {
  getResultAsync();
}
```
Valid code:
```js
async function getResultAsync() {};
async function submit() {
  await getResultAsync();
}
```






