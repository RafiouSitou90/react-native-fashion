import React from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from "react-native";

import {HomeNavigationProps} from "../../components/Navigation";
import {Box, Header, makeStyles, Text} from "../../components";
import Graph, {DataPoint} from "./Graph";
import Transaction from "./Transaction";
import {Theme} from "../../components/Theme";
import TopCurve from './TopCurve';

const footerHeight = Dimensions.get("window").width / 3.5;

const startDate = new Date("2019-09-01").getTime()
const numberOfMonths = 6

const data: DataPoint[] = [
    {
        id: 245672,
        date: new Date("2019-10-01").getTime(),
        value: 139.42,
        color: "primary"
    },
    {
        id: 245673,
        date: new Date("2019-11-01").getTime(),
        value: 281.23,
        color: "graph1"
    },
    {
        id: 245674,
        date: new Date("2020-01-01").getTime(),
        value: 198.54,
        color: "graph2"
    }
];

const TransactionHistory = ({ navigation }: HomeNavigationProps<"TransactionHistory">) => {
    const styles = useStyles();

    return (
        <Box flex={1} backgroundColor="background">
            <Header
                title="Transaction History"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "share", onPress: () => true }}
            />

            <Box padding="m" flex={1}>
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Box>
                        <Text variant="header" color="secondary" opacity={0.4}>TOTAL SPENT</Text>
                        <Text variant="title1">$900,90</Text>
                    </Box>
                    <Box backgroundColor="primaryLight" borderRadius="l" padding="m">
                        <Text color="primary">{"  "}All Time{"  "}</Text>
                    </Box>
                </Box>
                <Graph data={data} startDate={startDate} numberOfMonths={numberOfMonths} />

                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {
                        data.map((transaction) => (
                            transaction.value > 0 && <Transaction key={transaction.id} transaction={transaction} />
                        ))
                    }
                </ScrollView>
            </Box>
            <TopCurve {...{ footerHeight }} />
            <Box position="absolute" left={0} right={0} bottom={0} height={footerHeight}>
                <Image
                    style={styles.footer}
                    source={require("../../components/assets/patterns/11.jpg")}
                />
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: theme.borderRadii.xl
    },

    scrollView: {
        paddingBottom: footerHeight
    }
}));

export default TransactionHistory;
