import ReactDOM from 'react-dom/client';

import App from './App';

async function main() {
	// Fetch
	const url = 'http://localhost:3000/products';
	const response = await fetch(url);
	const {products} = await response.json();

	const container = document.getElementById('root');
	if (!container) {
		return;
	}

	const root = ReactDOM.createRoot(container);
	root.render(<App products={products} />);
}

main();
