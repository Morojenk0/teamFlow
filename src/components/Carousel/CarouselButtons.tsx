// @ts-nocheck
import React from 'react'
import {CarouselData} from './CarouselData'

export default function CarouselButtons({setSlide, slideIndex}) {
	return (
		<div className="w-[59.5rem] mt-[3rem] mx-auto flex flex-row justify-between items-center">
			{CarouselData.map((obj, index) => {
				return (
					<article
						key={obj.id}
						onClick={() => {
							setSlide(index)
						}}
					>
						<div
							className={`w-[16.5rem] h-[4.75rem] pt-[1.5rem] flex items-center justify-center cursor-pointer select-none ${
								slideIndex === index
									? 'border-t-[.25rem] border-t-[#35414B] pt-[1.25rem]'
									: ''
							}`}
						>
							<img
								className="w-[3rem] h-[3rem]"
								src={require(`../../img/carousel-${
									index + 1
								}.png`)}
								alt={obj.alt}
							/>
							<footer className="pl-[1rem] flex flex-col text-left">
								<p className="text-left text-gray font-inter text-base leading-[1rem] font-semibold">
									{obj.author}
								</p>
								<cite className="mt-[0.5rem] text-gray font-inter text-base leading-[1rem] font-normal not-italic ">
									{obj.cite}
								</cite>
							</footer>
						</div>
					</article>
				)
			})}
		</div>
	)
}
