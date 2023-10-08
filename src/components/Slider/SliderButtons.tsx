// @ts-nocheck
import React from 'react'
import {buttonData} from './SliderData.js'

export default function SliderButtons({slideIndex, setSlide}) {
	return (
		<div className="mt-[2rem]">
			{buttonData.map((obj, index) => {
				return (
					<article
						className={` w-[24rem] px-[2.4rem] py-[1.1rem] text-center cursor-pointer select-none ${
							slideIndex === index
								? 'bg-white-400 border-b-[0.5rem] border-b-purple'
								: 'bg-white-200 border-b border-b-[#F0EBFA]'
						}`}
						onClick={() => {
							setSlide(index)
						}}
						key={obj.id}
					>
						<h3 className=" text-gray font-inter text-[1.125rem] leading-[1.125rem] font-semibold">
							{obj.title}
						</h3>
						<p className="mt-[.6rem] text-gray-400 font-inter text-base font-normal">
							{obj.text}
						</p>
					</article>
				)
			})}
		</div>
	)
}
