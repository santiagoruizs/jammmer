//
var client_id = 'e2328372c77948f1b4ed7d3f11b1042d';
var redirect_uri = 'http://localhost:3000/';

//var state = generateRandomString(16);
//BQBXOxbru5lhROsblzVZFyVCIpuySxFTS2HhsxOK1YcZigltxQKKrZcr3vsTxw6bp_dEs1LWvEXQnOdrZtUSJ2vRIDV4-2qexHHiBnS0V7sUhhuCQuvcd4Fzb7gXnxUHcyhhZFDF7Ydf3WWRkRGw8E4PH-agI9v-hJKKjHoAzS8v5EUoU6EsBljSgDMZYfzkpCMcd ..
var scope = 'user-read-private user-read-email';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
//url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
//url += '&state=' + encodeURIComponent(state);
console.log(url)
// async function getAccesToken() {
//     const response = await fetch(url); 
//     const data = await response.json();
//     return data
//   }

// console.log(getAccesToken())
