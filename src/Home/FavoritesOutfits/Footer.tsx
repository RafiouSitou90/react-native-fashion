import React from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {Box, Button} from "../../components";

interface FooterProps {
    label: string;
    onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Box backgroundColor="secondary" padding="l" borderTopLeftRadius="xl">
            <Box
                backgroundColor="secondary"
                alignItems="center"
                style={{
                    paddingBottom: insets.bottom
                }}
            >
                <Button variant="primary" {...{ label, onPress }} />
            </Box>
        </Box>

    );
};

export default Footer;
