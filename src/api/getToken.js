
function getToken() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    //window.history.pushState({}, document.title, "/");
    return hashParams;
  
}
export default getToken;
  