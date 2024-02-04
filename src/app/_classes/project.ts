import Tools from './tools';

class Project {
    slug: string;
    name: string;
    link: string;
    logo: string;
    image: string;
    purpose: string;
    approach: string;
    objective: string;
    description: string;
    tools: Tools[];
    constructor(name: string, link: string, image: string, logo: string, purpose: string, approach: string, objective: string, description: string, tools: Tools[], slug: string) {
        this.name = name;
        this.link = link;
        this.image = image;
        this.purpose = purpose;
        this.approach = approach;
        this.objective = objective;
        this.description = description;
        this.logo = logo;
        this.tools = tools;
        this.slug = slug;
    }
}

export default Project