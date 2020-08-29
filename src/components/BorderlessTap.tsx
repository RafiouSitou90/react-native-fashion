import React, { ReactNode } from 'react';
import {State, TapGestureHandler} from "react-native-gesture-handler";
import Animated, {
    call,
    eq,
    useCode,
    cond,
    startClock,
    stopClock,
    set,
    greaterThan,
    add,
    and, clockRunning, not, neq
} from 'react-native-reanimated';
import {useClock, useTapGestureHandler, useValue} from "react-native-redash";

interface BorderlessTapProps {
    onPress: () => void;
    children: ReactNode;
}

const BorderlessTap = ({ children, onPress }: BorderlessTapProps) => {
    const clock = useClock();
    const start = useValue(0);
    const { gestureHandler, state } = useTapGestureHandler();
    const opacity = useValue(0);

    useCode(
        () => [
            cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [startClock(clock), set(start, clock)]),
            cond(neq(state, State.BEGAN), stopClock(clock)),
            cond(eq(state, State.END), [call([], onPress), stopClock(clock)]),
            set(opacity, cond(
                    and(greaterThan(clock, add(start,  100)), clockRunning(clock)),
                    0.5,
                    1
                )
            )
        ],
        []
    );

    return (
        <TapGestureHandler {...gestureHandler}>
            <Animated.View style={{ opacity }}>{children}</Animated.View>
        </TapGestureHandler>
    );
};

export default BorderlessTap;
