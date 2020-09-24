import React from "react"
import { ScrollView } from "react-native"

import { Box, Text } from "../../components"
import TextInputField from "../../components/Form/TextInputField"
import CheckboxGroup from "./CheckboxGroup"

const genders = [
	{ value: "male", label: "Male" },
	{ value: "female", label: "Female" },
]

const PersonalInfo = () => {
	return (
		<ScrollView>
			<Box padding={"m"}>
				<Text variant={"body"} marginBottom={"m"}>
					Account Information
				</Text>

				<Box marginBottom="m">
					<TextInputField
						icon="user"
						placeholder="Full name"
						autoCompleteType="name"
						autoCapitalize="characters"
						returnKeyType="next"
						returnKeyLabel="Next"
					/>
				</Box>

				<Box marginBottom="m">
					<TextInputField
						icon="lock"
						placeholder="Enter your Password"
						secureTextEntry={true}
						autoCompleteType="password"
						autoCapitalize="none"
						returnKeyType="next"
						returnKeyLabel="Next"
					/>
				</Box>

				<Box marginBottom="m">
					<TextInputField
						icon="map-pin"
						placeholder="Full name"
						autoCompleteType="street-address"
						returnKeyType="go"
						returnKeyLabel="Go"
					/>
				</Box>

				<CheckboxGroup options={genders} radio />
			</Box>
		</ScrollView>
	)
}

export default PersonalInfo
