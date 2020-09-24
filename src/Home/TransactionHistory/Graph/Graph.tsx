import { useIsFocused } from "@react-navigation/native"
import moment from "moment"
import React from "react"
import { Dimensions, View } from "react-native"
import { useTransition } from "react-native-redash"

import { Box, useTheme } from "../../../components"
import { Theme } from "../../../components/Theme"
import Underlay, { MARGIN } from "../Graph/Underlay"
import { lerp } from "./Scale"
import Animated, { divide, multiply, sub } from "react-native-reanimated"

const { width: wWidth } = Dimensions.get("window")
const aspectRatio = 195 / 305
const AnimatedBox = Animated.createAnimatedComponent(Box)

export interface DataPoint {
	id: number
	date: number
	value: number
	color: keyof Theme["colors"]
}

interface GraphProps {
	data: DataPoint[]
	startDate: number
	numberOfMonths: number
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
	const theme = useTheme()
	const isFocused = useIsFocused()

	const transition = useTransition(isFocused, { duration: 650 })

	const canvasWidth = wWidth - theme.spacing.m * 2
	const canvasHeight = canvasWidth * aspectRatio
	const width = canvasWidth - theme.spacing[MARGIN]
	const height = canvasHeight - theme.spacing[MARGIN]

	const step = width / numberOfMonths
	const values = data.map((p) => p.value)
	const minY = Math.min(...values)
	const maxY = Math.max(...values)

	return (
		<Box marginTop="xl" paddingLeft={MARGIN} paddingBottom={MARGIN}>
			<Underlay
				minY={minY}
				maxY={maxY}
				startDate={startDate}
				numberOfMonths={numberOfMonths}
				step={step}
			/>
			<View style={{ width, height, overflow: "hidden" }}>
				{data.map((point) => {
					const i = Math.round(
						moment
							.duration(moment(point.date).diff(startDate))
							.asMonths()
					)
					const totalHeight = lerp(0, height, point.value / maxY)
					const currentHeight = multiply(totalHeight, transition)
					const translateY = divide(
						sub(totalHeight, currentHeight),
						2
					)

					return (
						<AnimatedBox
							key={point.id}
							position="absolute"
							left={i * step}
							width={step}
							height={totalHeight}
							bottom={0}
							style={{
								transform: [
									{ translateY },
									{ scaleY: transition },
								],
							}}
						>
							<Box
								backgroundColor={point.color}
								position="absolute"
								opacity={0.1}
								top={0}
								bottom={0}
								borderTopLeftRadius="m"
								borderTopRightRadius="m"
								left={theme.spacing.m}
								right={theme.spacing.m}
							/>
							<Box
								backgroundColor={point.color}
								position="absolute"
								top={0}
								height={32}
								left={theme.spacing.m}
								right={theme.spacing.m}
								borderRadius="m"
							/>
						</AnimatedBox>
					)
				})}
			</View>
		</Box>
	)
}

export default Graph
