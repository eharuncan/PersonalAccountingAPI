import moment from 'moment';

export let dateFormatter = function (date: Date) {
    return (moment(date)).format('dd.MM.yyyy')
};

export let apiURL = "http://localhost:3001/api/v1";

