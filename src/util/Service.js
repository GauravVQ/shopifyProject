
class Service {

    getData = async (selecteddate) => {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Kwar4pyoL5HRCibAfWDlUYaa5aAvCOIJrtRhYpvA'+`&date=${selecteddate}`, {
            method: 'GET',
            body: this.myBody,
        });
        const obj = await response.json();
        return obj;
    }
}
export default new Service();

