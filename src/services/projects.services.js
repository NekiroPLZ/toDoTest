export class projectService  {
    constructor(project){
        this.project = project;
    }

    getAllProjects = async()=>{
        const find = this.project.findAll();
        return find;
    }
}

