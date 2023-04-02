https://github.com/facebook/create-react-app/issues/240#issuecomment-236608402

```text
 SMP  ⏱
General output time took 26.2 secs

 SMP  ⏱  Plugins
CaseSensitivePathsPlugin took 12.88 secs
ESLintWebpackPlugin took 2.32 secs
IgnorePlugin took 0.325 secs
HotModuleReplacementPlugin took 0.15 secs
ReactRefreshPlugin took 0.131 secs
ManifestPlugin took 0.1 secs
ForkTsCheckerWebpackPlugin took 0.046 secs
HtmlWebpackPlugin took 0.009 secs
ModuleNotFoundPlugin took 0 secs
InterpolateHtmlPlugin took 0 secs
DefinePlugin took 0 secs
WatchMissingNodeModulesPlugin took 0 secs

 SMP  ⏱  Loaders
css-loader, and
postcss-loader, and
resolve-url-loader, and
Files successfully emitted, waiting for typecheck results...
```

## Version 2:

after done this: https://github.com/facebook/create-react-app/issues/10154#issuecomment-886418936

```text
 SMP  ⏱
General output time took 25,795 ms

 SMP  ⏱  Plugins
ESLintWebpackPlugin took 2,154 ms
HotModuleReplacementPlugin took 171 ms
ReactRefreshPlugin took 101 ms
ManifestPlugin took 54 ms
ForkTsCheckerWebpackPlugin took 30 ms
HtmlWebpackPlugin took 6 ms
DefinePlugin took 1 ms
ModuleNotFoundPlugin took 0 ms
InterpolateHtmlPlugin took 0 ms
WatchMissingNodeModulesPlugin took 0 ms

 SMP  ⏱  Loaders
css-loader, and
postcss-loader, and
resolve-url-loader, and
sass-loader took 20,356 ms
  module count = 97
  Usws\AgentsPageReviews.module.scss   = 5,858 ms
  Usmodule.scss                        = 5,735 ms
  UsReferralLink.module.scss           = 4,826 ms
  Usnds\AdvantagesDiamonds.module.scss = 4,706 ms
  UsowAgentsEarn.module.scss           = 4,698 ms
babel-loader took 18,873 ms
   node_modules\axios\lib\axios.js
   node_modules\timers-browserify\mai
   node_modules\prop-types\factoryWit
   node_modules\events\events.js
   node_modules\url\util.js
@pmmmwh/react-refresh-webpack-plugin, and
ts-loader took 17,541 ms
   src\components\UserCabinet\UsersCa
   src\components\UserCabinet\Notific
   src\components\UserCabinet\Propose
   src\components\MainPage\BedRoom\Gb
   src\components\MainPage\BedRoom\Fo
url-loader took 12,282 ms
   src\components\primeCabinetCompone
   src\components\primeCabinetCompone
   src\assets\images\terms\city(1).pn
   src\assets\images\popup\popup-bg.p
   src\pages\Hoteliers\Assert\Image\b
file-loader took 11,047 ms
   src\assets\images\pages\cabinetAge
   src\assets\images\pages\cabinetAge
   src\icons\off.svg
   src\icons\on.svg
   src\components\UserCabinet\ModalW\
modules with no loaders took 5,595 ms
   src\components\primeCabinetCompone
   node_modules\style-loader\dist\run
   src\components\UserCabinet\InfoCom
   src\json\transactionsAgent.json
   src\json\transactionsForPayout.jso
css-loader, and
postcss-loader took 457 ms
style-loader, and
css-loader, and
postcss-loader, and
resolve-url-loader, and
sass-loader took 165 ms
Files successfully emitted, waiting for typecheck results...
```

```bash
sass-loader
babel-loader
ts-loader
url-loader
file-loader
css-loader
postcss-loader
```

## `version 3`

```test
 SMP  ⏱
General output time took 29.32 secs

 SMP  ⏱  Plugins
ESLintWebpackPlugin took 5.24 secs
HotModuleReplacementPlugin took 0.181 secs
ReactRefreshPlugin took 0.112 secs
ManifestPlugin took 0.051 secs
ForkTsCheckerWebpackPlugin took 0.027 secs
HtmlWebpackPlugin took 0.009 secs
WatchMissingNodeModulesPlugin took 0.001 secs
ModuleNotFoundPlugin took 0 secs
InterpolateHtmlPlugin took 0 secs
DefinePlugin took 0 secs

 SMP  ⏱  Loaders
babel-loader took 21.048 secs
  module count = 233
css-loader, and
postcss-loader, and
Files successfully emitted, waiting for typecheck results...
```
