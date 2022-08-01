export class Educacion {
    id?: number;
    carrer: string;
    university: string;
    lapse: string;
    url_img: string;

    constructor(carrer: string, university: string, lapse: string, url_img: string) {
        this.carrer = carrer;
        this.university = university;
        this.lapse = lapse;
        this.url_img = url_img;
    }
}