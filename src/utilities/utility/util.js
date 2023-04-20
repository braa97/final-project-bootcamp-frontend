import Moment from 'moment';
const Utility = function() {

    const dateFormatter = (date) => {
        return Moment(date).format('DD/MM/YYYY')
    }
    const timeFormatter = (timeFormat) => {
        return Moment(timeFormat).format('hh:mm');
    }

    const timeDateFormatter = (date) => {
        return Moment(date).format('ddd MMM D YYYY hh:mm:ss ZZ')
    }

    return {
        dateFormatter,
        timeFormatter,
        timeDateFormatter
    }
}

export default Utility