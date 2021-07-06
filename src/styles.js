import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F5F1"
    },

    title: {
        fontSize: 40
    },

    buttons: {
        flexDirection: "row"
    },

    sumButton: {
        backgroundColor:  "#EDFFA9",
        paddingHorizontal: 10,
        marginLeft: 40,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10
    },

    sumTitle: {
        fontSize: 30
    },

    subtractionButton: {
        backgroundColor:"#FDBAF8" ,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10
    },

    subtractionTitle: {
        fontSize: 30,
        lineHeight: 40
    },

    resetButton: {
        backgroundColor: "#B0EFEB",
        paddingHorizontal: 10,
        marginRight: 40,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10
    },

    resetTitle: {
        fontSize: 30
    },

    result: {
        fontSize: 30
    }

})

export default styles;