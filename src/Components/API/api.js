import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://instagram85.p.rapidapi.com/account/imnorotter/feed',
  params: {by: 'username'},
  headers: {
    'x-rapidapi-key': '61bb40b6ddmsh16041bcf88a6fb9p16099ajsn52c4c322f043',
    'x-rapidapi-host': 'instagram85.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});