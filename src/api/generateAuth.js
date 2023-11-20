//
var client_id = 'e2328372c77948f1b4ed7d3f11b1042d';
var redirect_uri = 'http://localhost:3000/';
var scope = 'user-read-private user-read-email';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

export default url;
