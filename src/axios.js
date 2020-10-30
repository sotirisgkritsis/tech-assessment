import axios from 'axios';

// creates copy
const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://voda-react-assessment.herokuapp.com'
});


instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default instance;