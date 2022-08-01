export class Habilidad {
    id?: number;
    skill: string;
    description: string;
    url_img: string;

    constructor(skill: string, description: string, url_img: string) {
        this.skill = skill;
        this.description = description;
        this.url_img = url_img;
    }
}