import React from 'react'

export default function BackgroundAnimation() {
  return (
    <div>
		<div className="area w-full h-full absolute -z-50">
			<ul className="circles w-full h-full absolute top-0 left-0 overflow-hidden">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
    </div>
  )
}
