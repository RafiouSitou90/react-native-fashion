import React, { useState } from 'react';
import {Box, RoundedIcon} from "../../components";
import BorderlessTap from "../../components/BorderlessTap";

interface OutfitProps {
    outfit: {
        id: number;
        color: string;
        aspectRation: number;
        selected: boolean;
    };
    width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
    const [selected, setSelected] = useState(false);

    const { color: backgroundColor, aspectRation } = outfit;

    return (
        <BorderlessTap
            onPress={() => {
                setSelected(((prevState) => !prevState));
                outfit.selected = !outfit.selected
            }}
        >
            <Box
                borderRadius="m"
                marginBottom="m"
                alignItems="flex-end"
                paddingTop="m"
                paddingRight="s"
                style={{
                    backgroundColor,
                    width,
                    height: width * aspectRation
                }}
            >
                {selected &&
                    <RoundedIcon name="check" size={24} color="white" backgroundColor="primary" iconRatio={0.7} />
                }
            </Box>
        </BorderlessTap>
    );
};

export default Outfit;
