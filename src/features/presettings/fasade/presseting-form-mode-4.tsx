import { useEffect, useState } from 'react'
import { PresettingSlider } from '../ui/presetting-slider'
import { PresettingItem } from '../ui/presseting-item'
import type {
	ISliderRangeState,
	ISliderState,
} from '../model/interfaces/sliders.interface'
import { makeHandleSliderChange } from '../model/helpers/make-handle-slider-change'
import { Clue } from '../../../shared/ui/alerts/clue'
import { PlayButton } from '../ui/play-button'

export function PressetingFormMode4() {
	const [allCount, setAllCount] = useState<ISliderState>(5)
	const [RangeStreak, setRangeStreak] = useState<ISliderRangeState>([1, 50])

	useEffect(() => {
		if (RangeStreak[1] > allCount) setRangeStreak(prev => [prev[0], allCount])
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
				title='Диапазон выбора палочек за ход'
				isStreak={true}
				min={1}
				max={allCount}
				slider={
					<PresettingSlider
						onChange={makeHandleSliderChange({
							setSliderRangeState: setRangeStreak,
						})}
						value={RangeStreak}
						min={1}
						max={allCount}
						step={1}
					/>
				}
				leftCount={RangeStreak[0]}
				rightCount={RangeStreak[1]}
			/>
			<Clue />

			<PlayButton onClick={() => {}} />
		</div>
	)
}
