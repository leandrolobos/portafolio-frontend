export class Proyecto {
    id?: number;
    title: string;
    description: string;
    lapse: string;
    url_img: string;
    link_proyecto: string;

    constructor(title: string, description: string, lapse: string, url_img: string, link_proyecto: string) {
        this.title = title;
        this.description = description;
        this.lapse = lapse;
        this.url_img = url_img;
        this.link_proyecto = link_proyecto;
    }
}