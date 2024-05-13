class Activityy{
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
        this.id = 0

    }
    getAllActivities() {
        return this.activities

    }
    createActivity(tittle, description, imgUrl) {
        this.id++;
        const activity = new Activityy(this.id, tittle, description, imgUrl)
        return this.activities.push(activity)
    }
    
    deleteActivity (id) {
        this.activities = this.activities.filter((Activity) => Activity.id !== id);
           return this.activities
    }

    
}

module.exports = { 
    Activityy, 
    Repository,
 }