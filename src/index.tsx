import * as React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './style.css'
import Slider from './components/Slider/Slider'

const RootElement = document.getElementById('slider')
const root = createRoot(RootElement!)
root.render(
	<React.StrictMode>
		<Slider />
	</React.StrictMode>
)
const features = document.querySelectorAll('#feauturesList :nth-child(+n + 4')
const feauturesButton = document.getElementById('feauturesButton')

feauturesButton?.addEventListener('click', () => {
	features.forEach((element) => {
		element.classList.toggle('hidden')
	})
	if (feauturesButton.innerText === 'View more benefits') {
		feauturesButton.innerText = 'View less benefits'
	} else feauturesButton.innerText = 'View more benefits'
})
