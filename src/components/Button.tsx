import React, { ReactNode } from "react"
import { StyleSheet } from "react-native"
import { RectButton, RectButtonProperties } from "react-native-gesture-handler"
import { Text, useTheme } from "./Theme"

interface ButtonProps {
	label?: string
	variant: "default" | "primary" | "transparent"
	onPress: () => void
	children?: ReactNode
	style?: RectButtonProperties["style"]
}

const Button = ({ label, variant, onPress, children, style }: ButtonProps) => {
	const theme = useTheme()
	const backgroundColor =
		variant === "primary"
			? theme.colors.primary
			: variant === "transparent"
			? "transparent"
			: theme.colors.background2
	const color =
		variant === "primary" ? theme.colors.background : theme.colors.secondary

	return (
		<RectButton
			style={[styles.container, style, { backgroundColor }]}
			{...{ onPress }}
		>
			{children ? (
				children
			) : (
				<Text variant="button" style={{ color }}>
					{label}
				</Text>
			)}
		</RectButton>
	)
}

Button.defaultProps = { variant: "default" }

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
		height: 50,
		width: 245,
		justifyContent: "center",
		alignItems: "center",
	},
})

export default Button
