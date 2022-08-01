export class Curso {
    id?: number;
    course: string;
    institution: string;
    lapse: string;
    url_img: string;

    constructor(course: string, institution: string, lapse: string, url_img: string) {
        this.course = course;
        this.institution = institution;
        this.lapse = lapse;
        this.url_img = url_img;
    }
}