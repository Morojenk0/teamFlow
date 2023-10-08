// @ts-nocheck
import React from 'react'
import {imgData} from './SliderData'
export default function SliderImages({slideIndex}) {
	return (
		<div className="w-[24rem] h-[19rem] relative ">
			{imgData.map((obj, index) => {
				return (
					<img
						className={`w-[24rem] h-[19rem] transition-opacity duration-1000 absolute ${
							slideIndex === index
								? 'opacity-100 visible z-10'
								: 'opacity-0 invisible z-0'
						}`}
						src={require(`../../img/svg/chat-${index + 1}.svg`)}
						alt={obj.alt}
						key={obj.id}
					/>
				)
			})}
		</div>
	)
}
