`2022-08-15 02:27-04:46` Kostiantyn Ochenash:

```bash
npm un tailwindcss postcss autoprefixer
npm i -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm un tailwindcss postcss autoprefixer
npm i -D tailwindcss postcss autoprefixer

npm i -E react-scripts@5.0.0

git pull # restored initial commit
```

`2022-08-15 14-21` Kostiantyn Ochenash:

Checked for linting errors, found that imports is not resolving by some reason.

So, I just tested this myself locally, and removed this changed completely.

```bash
npm i -D speed-measure-webpack-plugin
npm i -D @types/node @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier typescript eslint-config-react-app
```

`2022-09-10 01-14` Kostiantyn Ochenash:

```bash
npm i -D @types/babel__core
npm un redux-thunk redux-devtools-extension tailwindcss
npm i @reduxjs/toolkit

yarn # now uses yarn
yarn remove @types/babel__core
yarn add -D @babel/core
```

`2022-10-26` Kostiantyn Ochenash:

```bash
yarn add i18next i18next-browser-languagedetector react-i18next
yarn add -D csstype
```

`2022-10-27` 12:16 Kostiantyn Ochenash:

```bash
yarn add redux-persist
```

`2022-12-03` 13:55 Kostiantyn Ochenash:

```bash
yarn remove react-router-dom
yarn add react-router-dom
```

`2022-12-24` 05:36 Kostiantyn Ochenash:

```bash
yarn remove i18next-browser-languagedetector
```

`2022-12-28` 20:54 Kostiantyn Ochenash:

```bash
yarn add react-helmet-async
```

in `package.json` for react-helmet-async

```json
{
  "@types/react": "^17.0.19",
  "@types/react-dom": "^17.0.9"
}
```
