import moment from 'moment';

export let dateFormatter = function (date: Date) {
    return (moment(date)).format('DD.MM.YYYY HH:MM')
};

export let dateFormatter2 = function (date: Date) {
    return (moment(date)).format();
};

export let apiURL = "http://localhost:8080/api/v1";

