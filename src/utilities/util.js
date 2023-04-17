import Moment from 'moment';
const Utility = () => {

    const dateFormatter = (date) => {
        return Moment(date).format('DD/MM/YYYY')
    }
    return {
        dateFormatter,
    }
}

export default Utility