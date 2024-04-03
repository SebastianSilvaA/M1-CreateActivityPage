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
    
    deleteActivity (id) {
        this.activities = this.activities.filter(Activity => Activity.id !== id);
           
    }
    
}

console.log('aguante la torta')



