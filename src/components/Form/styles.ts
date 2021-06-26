import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 90,
    },
    input: {
        color: '#C7C7C7',
        backgroundColor: '#F7F7F7',
        fontSize: 18,
        borderRadius: 8,
        padding: 8,
        height: 51,
        width: 280,
        borderColor: '#E32929',
        borderWidth: 1
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E32929',
        padding: 8,
        borderRadius: 8,
        height: 51,
        width: 97,
        marginLeft: 8,
    },
    textButton: {
        color: '#f7f7f7f7',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;