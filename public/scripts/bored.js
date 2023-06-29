// make an asycn api call to bored api for testing purposes

const axios = require('axios');

// async function boredAPIRequest() {
//     try {
//       const response = await axios.get({
//         url: 'https://www.boredapi.com/api/activity'
//       })
//       console.log(`You should ${JSON.parse(response.data)}`);
//     } catch (err) {
//       console.log(`${err}`);
//     }
// }

async function boredAPIRequest() {
    axios.get('https://www.boredapi.com/api/activity')
    .then((response) => (result) => {
        console.log(response.status);
        console.log(response.data);
        console.log(`You should ${JSON.parse(response.data.activity)}`);
    }).catch((err) => {
        console.log(`${err}`);
    });
}

module.exports = {
    boredAPIRequest
}