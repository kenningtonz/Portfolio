"use client";
import React from "react";

const Card: React.FC<{
	customContent?: React.ReactNode;
	title?: string;
	content?: string;
	image?: string;
	className?: string;
}> = ({ customContent, title, content, image, className }) => {
	return (
		<section
			className={`p-2 px-3 drop-shadow-lg rounded flex flex-col content-stretch ${className}`}
		>
			{image && (
				<img className='rounded-inner object-cover' src={image} alt='Logo' />
			)}
			{title && <h2 className='text-center text-xl font-semibold'>{title}</h2>}
			{content && <p className='p-2'>{content}</p>}
			{customContent && customContent}
		</section>
	);
};

export default Card;
