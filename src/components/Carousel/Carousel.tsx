// @ts-nocheck
import React, {useState} from 'react'
import CarouselButtons from './CarouselButtons'
import {CarouselData} from './CarouselData'
import {v4 as uuidv4} from 'uuid'

export default function Carousel() {
	const [slideIndex, setSlideIndex] = useState(0)
	const setSlide = (i) => {
		setSlideIndex(i)
	}
	return (
		<blockquote className="">
			<div className="mt-[3rem] relative">
				<div className="w-[34rem] h-[6rem] mx-auto">
					{CarouselData.map((obj, index) => {
						return (
							<p
								className={`w-[34rem] absolute text-center animate-[fadeIn_1.5s] text-gray font-inter text-lg leading-[2rem] font-normal ${
									slideIndex === index
										? 'visible z-10'
										: 'invisible z-0'
								}`}
								key={uuidv4()}
							>
								{obj.text}
							</p>
						)
					})}
				</div>
				<CarouselButtons slideIndex={slideIndex} setSlide={setSlide} />
			</div>
		</blockquote>
	)
}
