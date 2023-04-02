0. - docs https://www.i18next.com/
   - video https://youtu.be/SA_9i4TtxLQ
1. Check that each text in the `translations google sheet table` is separated:
   - [ ] one sentence per one row
   - [ ] each text has 4 translations (EN, PL, UA, RU)
2. Check `MOCKUP`, to see, how your text is structured on the page
   - [ ] check, is my text on one line or separated visually - if separated to different rows on the `mockup` - this
         will be separate rows in the translations table as well, because many texts are separated on mockup to separate
         lines
3. Create `keys` in `translation.ts` - they will represent placeholders for 4 translations.
   - [ ] This may be done automatically, but it will slow down build time, so we go manually here.
   - [ ] There are payed solutions for automatic translation. We use free `i18next` + `react-i18next`.
   - [ ] So, firstly, we create a simple `translationJSON` type in `typescript.ts`, which represents our JSON structure
         (schema).
   - [ ] Then, we populate our JSON files with keys and translations, exactly as planned by this schema.
   - [ ] After that, typescript checks, that every JSON has same keys as in `translationJSON` type.
   - [ ] So, by doing this, we plan ahead, which keys will be in our translation files.
4. Add same `keys` to `en.json`, `pl.json`, `ua.json` and `ru.json`.
5. Copy-paste the translated `value` from `google sheet table` into each `.json` file for one specific `key`.
6. In your component call:

```tsx
type translationJSON = { nameSpace: { myKey: string } };

const MyComponent = () => {
  const { t } = useTranslation('nameSpace');
  return <div>{t('myKey')}</div>;
};
```

real example:

```tsx
type translationJSON = { mainHotelier: { ceoFullName: string } };

const MyComponent = () => {
  const { t } = useTranslation('mainHotelier');
  return <div>{t('ceoFullName')}</div>;
};
```
