export class Persona {
    id?: number;
    name: string;
    position: string;
    ubication: string;
    age: string;
    about: string;
    url_cover: string;
    url_perfil: string;

    constructor(name: string, position: string, ubication: string, age: string, about: string, url_cover: string, url_perfil: string) {
        this.name = name;
        this.position =position;
        this.ubication = ubication;
        this.age = age;
        this.about = about;
        this.url_cover = url_cover;
        this.url_perfil = url_perfil;
    }
}