import Moment from 'moment';
const Utility = function() {

    const dateFormatter = (date) => {
        return Moment(date).format('DD-MM-YYYY')
    }
    const timeFormatter = (timeFormat) => {
        return Moment(timeFormat).format('hh:mm');
    }
    return {
        dateFormatter,
        timeFormatter
    }
}

export default Utility