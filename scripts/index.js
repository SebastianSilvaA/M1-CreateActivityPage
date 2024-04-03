class Activity{
    constructor(id,tittle,description,imgUrl){
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.imgUrl = imgUrl;
    }
};

class Repository{
    constructor(){
        this.activities = [];

    }
    getAllActivities() {
        return this.activities

    }
    createActivity() {
        return this.activities.push(Activity)
    }
    
    
}
const repo = new Repository()

const pedro = new Activity (1,'yoga','esta re chetuki','mamaegg')

Repository.createActivity(pedro)

Repository.getAllActivities()

