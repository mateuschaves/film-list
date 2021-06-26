import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    greeting: {
        color: '#E32929',
        fontSize: 35,
        fontWeight: 'bold',
    },
    firstName: {
        fontWeight: '300',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 90,
    }
});

export default styles;