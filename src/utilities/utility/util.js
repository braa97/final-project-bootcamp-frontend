import moment from 'moment';
const Utility = function() {

    const dateFormatter = (date) => {
        return moment(date).format('DD/MM/YYYY')
    }
    
    const timeFormatter = (timeFormat) => {
        return moment(timeFormat).format('HH:mm');
    }

    const timeDateFormatter = (date) => {
        return moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }

    const convertToIsoDateFormat = (date) => {
        return moment(date, 'DD/MM/YYYY HH:mm').toISOString(true);
    }

    const convertToISO = (date) => {
        return moment(date).toISOString(true);
    }

    return {
        dateFormatter,
        timeFormatter,
        timeDateFormatter,
        convertToIsoDateFormat,
        convertToISO
    }
}

export default Utility