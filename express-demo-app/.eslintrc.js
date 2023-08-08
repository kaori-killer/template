module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true, // 추가
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		'plugin:react/jsx-runtime', // 추가
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname, // 추가 (파일 경로를 제대로 잡기 위해서)
	},
	plugins: [
		'react',
	],
	rules: {
		'import/no-unresolved': 'off', // 추가
	},
};
