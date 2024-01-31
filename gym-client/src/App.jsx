import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/styles/index.scss'
import Layout from './components/layout/Layout'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<div className="App">
				<div>
					<a href="" target="_blank">
						<img className="logo" alt="Vite logo" />
					</a>
					<a href="" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className="card">
					<button onClick={() => setCount(count => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</Layout>
	)
}

export default App
