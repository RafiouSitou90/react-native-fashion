import React from 'react';
import {Box, Text} from "../../components";
import SocialLogin from "./SocialLogin";
import {TouchableWithoutFeedback} from "react-native";

interface FooterProps {
    onPress: () => void;
    title: string;
    action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {

    return (
        <>
            <SocialLogin />
            <Box alignItems="center" marginTop="m" marginBottom="m">
                <TouchableWithoutFeedback { ...{ onPress } }>
                    <Text variant="button" color="white">
                        <Text fontSize={13}>{`${title} `}</Text>
                        <Text
                            fontSize={14}
                            marginLeft="s"
                            variant="button"
                            color="primary"
                        >
                            {action}
                        </Text>
                    </Text>
                </TouchableWithoutFeedback>
            </Box>
        </>
    );
};

export default Footer;
