class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is commiting changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploy app...`);
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = new createFrontEndDeveloper("Zharsuke");
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer ? `, frontEndDeveloper instanceof Developer);

const backEndDeveloper = new createBackEndDeveloper("Zharsuke");
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} is developer ? `, backEndDeveloper instanceof Developer);

const devOpsDeveloper = new createDevOps("Zharsuke");
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} is developer ? `, devOpsDeveloper instanceof Developer);

const fullStackDeveloper = new createFullStackDeveloper("Zharsuke");
fullStackDeveloper.buildAPI();
fullStackDeveloper.buildUI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} is developer ? `, fullStackDeveloper instanceof Developer);