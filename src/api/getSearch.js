

function getEndpoint (search) {
    const endpoint = 'https://api.spotify.com/v1/search?';
    endpoint =+ 'q='+encodeURIComponent('track:'+search)+'&type=track';
}
//'https://api.spotify.com/v1/search?q=track%3Alos+pits&type=track'