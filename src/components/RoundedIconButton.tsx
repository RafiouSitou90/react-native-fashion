import React from 'react';
import {RectButton} from "react-native-gesture-handler";

import RoundedIcon, {RoundedIconProps} from "./RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {

    return (
        <RectButton {...{ onPress }}>
            <RoundedIcon {...props} />
        </RectButton>
    );
};

export default RoundedIconButton;
