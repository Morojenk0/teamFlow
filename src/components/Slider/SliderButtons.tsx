// @ts-nocheck
import React from 'react'
import {buttonData} from './SliderData.js'

export default function SliderButtons({slideIndex, setSlide}) {
	return (
		<div className="mt-[2rem] rounded-t-lg overflow-hidden desktop:mt-[1rem] desktop:rounded-t-none">
			{buttonData.map((obj, index) => {
				return (
					<article
						className={`max-w-[24rem] px-[2.4rem] py-[1.1rem] text-center cursor-pointer select-none desktop:w-[23.25rem] desktop:h-[8rem] desktop:px-[2rem] desktop:py-[1.6rem] desktop:text-left desktop:last:border-b-0  ${
							slideIndex === index
								? 'pb-[0.65rem] bg-white-400 border-b-[0.5rem] border-b-purple desktop:pl-[1.5rem] desktop:border-b-0 desktop:border-l-[0.5rem] desktop:border-l-purple desktop:rounded-e-lg'
								: 'bg-white-200 border-b border-b-[#F0EBFA] desktop:rounded-e-none'
						} ${
							slideIndex === index + 1 ? 'desktop:border-b-0' : ''
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
