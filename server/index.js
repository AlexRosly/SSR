// const path = require('path');

// import 'ignore-styles';
// import './server.js';

// import {ignore-styles} from ('ignore-styles')
require('ignore-styles');

require('@babel/register')({
	ignore: [/(node_modules)/],
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		[
			'transform-assets',
			{
				extensions: ['css', 'svg'],
				name: 'static/media/[name].[hash:8].[ext]',
			},
		],
	],
});

// require('@babel/register')({
// 	configFile: path.resolve(__dirname, '../babel.config.js'),
// });

require('./server.js');

// "strictNullChecks": true,
// "target": "ES6",
// "lib": [
//   "dom",
//   "dom.iterable",
//   "esnext"
// ],
// "allowJs": true,
// "skipLibCheck": true,
// "esModuleInterop": true,
// "allowSyntheticDefaultImports": true,
// "strict": true,
// "forceConsistentCasingInFileNames": true,
// "noFallthroughCasesInSwitch": true,
// "module": "esnext",
// "moduleResolution": "node",
// "resolveJsonModule": true,
// "isolatedModules": true,
// "noEmit": true,
