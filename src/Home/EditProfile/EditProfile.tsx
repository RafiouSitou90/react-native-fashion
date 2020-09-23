import { DrawerActions } from "@react-navigation/native"
import React from "react"
import { Dimensions, StatusBar } from "react-native"

import { Box, Header, Text, useTheme } from "../../components"
import { HomeNavigationProps } from "../../components/Navigation"

import Tabs from "./Tabs"

const { width } = Dimensions.get("window")
const tabs = [
	{
		id: "configuration",
		label: "Configuration",
	},
	{
		id: "info",
		label: "Personal Info",
	},
]

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
	const theme = useTheme()

	return (
		<Box flex={1} backgroundColor={"background"}>
			<StatusBar barStyle={"light-content"} />
			<Box flex={0.2} backgroundColor="background">
				<Box
					position="absolute"
					top={0}
					left={0}
					right={0}
					bottom={0}
					borderBottomRightRadius="xl"
					backgroundColor="secondary"
				>
					<Header
						left={{
							icon: "menu",
							onPress: () =>
								navigation.dispatch(DrawerActions.openDrawer()),
						}}
						title="Edit Profile"
						dark
					/>
				</Box>
			</Box>
			<Box>
				<Box
					position="absolute"
					left={width / 2 - 50}
					top={-50}
					alignSelf="center"
					backgroundColor="primary"
					width={100}
					height={100}
					style={{ borderRadius: 50 }}
				/>
				<Box
					marginVertical="m"
					style={{ marginTop: 50 + theme.spacing.m }}
				>
					<Text variant="title1" textAlign="center">
						Rafiou Sitou
					</Text>
					<Text variant="body" textAlign="center">
						rafiousitou90@yahoo.com
					</Text>
				</Box>
			</Box>
			<Tabs tabs={tabs} />
		</Box>
	)
}

export default EditProfile
