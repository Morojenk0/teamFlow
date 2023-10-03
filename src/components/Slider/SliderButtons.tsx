// @ts-nocheck
import React from 'react'
import SliderButtonData from './SliderButtonData'

export default function SliderButton() {
	const SliderButtons = SliderButtonData.map((button) => (
		<article className=" text-center bg-white-200" key={button.id}>
			<h3 className=" text-gray font-inter text-[1.125rem] leading-[1.125rem] font-semibold">
				{button.title}
			</h3>
			<p className="mt-[.6rem] text-gray-400 font-inter text-base font-normal">
				{button.text}
			</p>
		</article>
	))
	return SliderButtons
}
