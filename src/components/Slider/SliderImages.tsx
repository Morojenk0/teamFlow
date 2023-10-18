// @ts-nocheck
import React from 'react'
import {imgData} from './SliderData'
export default function SliderImages({slideIndex}) {
	return (
		<div className="w-[19rem] h-[17rem] relative mobile:w-[24rem] mobile:h-[19rem] tablet:w-[41rem] tablet:h-[32.4rem]">
			{imgData.map((obj, index) => {
				return (
					<img
						className={`w-[24rem] h-[19rem] transition-opacity duration-1000 absolute tablet:w-[41rem] tablet:h-[32.4rem] ${
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
