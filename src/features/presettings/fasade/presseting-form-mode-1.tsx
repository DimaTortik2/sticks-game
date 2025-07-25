import { useEffect, useState } from 'react'
import { PresettingSlider } from '../ui/presetting-slider'
import { PresettingItem } from '../ui/presseting-item'
import type { ISliderState } from '../model/interfaces/sliders.interface'
import { makeHandleSliderChange } from '../model/helpers/make-handle-slider-change'
import { PlayButton } from '../ui/play-button'
import { Clue } from '../../../shared/ui/alerts/clue'

export function PressetingFormMode1() {
	const [allCount, setAllCount] = useState<ISliderState>(5)
	const [maxPerStep, setMaxPerStep] = useState<ISliderState>(1)

	useEffect(() => {
		if (maxPerStep > allCount) setMaxPerStep(allCount)
	}, [allCount])
	// to fix a bug between two sliders

	return (
		<div className='flex flex-col gap-10'>
			<PresettingItem
				title='Общее количество палочек в игре'
				min={5}
				max={50}
				slider={
					<PresettingSlider
						onChange={makeHandleSliderChange({
							setSliderState: setAllCount,
						})}
						value={allCount}
						min={5}
						max={50}
						step={1}
					/>
				}
				rightCount={allCount}
			/>
			<PresettingItem
				title='Максимум палочек за ход'
				min={1}
				max={allCount}
				slider={
					<PresettingSlider
						onChange={makeHandleSliderChange({
							setSliderState: setMaxPerStep,
						})}
						value={maxPerStep}
						min={1}
						max={allCount}
						step={1}
					/>
				}
				rightCount={maxPerStep}
			/>
			<Clue />

			<PlayButton onClick={() => {}} />
		</div>
	)
}
