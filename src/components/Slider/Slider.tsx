// @ts-nocheck
import React, {useState} from 'react'
import SliderButtons from './SliderButtons'
import SliderImages from './SliderImages'

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(0)

	const setSlide = (i) => {
		setSlideIndex(i)
	}

	return (
		<div className="flex flex-col justify-center items-center ">
			<SliderImages slideIndex={slideIndex} />
			<SliderButtons slideIndex={slideIndex} setSlide={setSlide} />
		</div>
	)
}
