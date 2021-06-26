import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        padding: 8,
        height: 62,
        backgroundColor: "#f7f7f7",
        marginTop: 16,
    },
    info: {
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        padding: 8,
        width: "100%",
    },
    title: {
        color: "#C7C7C7",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 25
    },
    
})

export default styles;