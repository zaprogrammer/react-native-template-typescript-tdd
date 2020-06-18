import {StyleSheet as styles} from "react-native";

export const appStyles = styles.create({
    scrollView: {
        backgroundColor: '#ffffff',
    },
    safeArea: {
        flex: 1
    },
    card: {
        padding: 12,
        marginHorizontal: 8,
        marginVertical: 12,
        alignContent: "center",
        backgroundColor: "white",
        shadowOffset: {width: 0, height: 1},
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 2
    },
});
