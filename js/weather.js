function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position);
}
function onGeoError() {
    alert("Can't find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);