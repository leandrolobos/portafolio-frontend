export class Experiencia {
    id?: number;
    position: string;
    company: string;
    lapse: string;
    url_img: string;

    constructor(position: string, company: string, lapse: string, url_img: string) {
        this.position = position;
        this.company = company;
        this.lapse = lapse;
        this.url_img = url_img;
    }
}