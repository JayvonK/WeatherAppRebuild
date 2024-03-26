navigator.geolocation.getCurrentPosition(success, error);

export async function success(pos: {
  coords: { latitude: any; longitude: any };
}) {
  let lat = pos.coords.latitude;
  let long = pos.coords.longitude;
}

function error(error: { message: string }) {
  console.log(error.message);
}
