
const config = require('./config');
const fs = require('fs');

const loadTemplate = (filename) => {
    return fs.readFileSync(`./${filename}.mustache`).toString();
};

const templateCategoryMustache = loadTemplate('template-category');
const templateWorkoutEntryMustache = loadTemplate('template-workout-entry');

const renderTemplate = (templateString, variables) => {
    let templateCopy = templateString;

    Object.keys(variables).forEach(variableKey => {
        const variableValue = variables[variableKey];
        templateCopy = templateCopy.replaceAll(`{{ ${variableKey} }}`, variableValue)
    })

    return templateCopy;
};

const generateWorkoutDetailsList = (configuration) => {
    let string = '';
    
    configuration.forEach(config => {
        if (config.key === 'separator') {
            string += '<div class="workout-separator"></div>\n'
        } else {
            string += `<p class="workout-step"><span class="workout-step-key">${config.key}</span> ${config.text}\n`; 
        }
    })

    return string;
};

const generateWorkout = (workout) => {
    const workoutDetailsList = generateWorkoutDetailsList(workout.workout_configuration);
    const vars = Object.assign({ dyn_workout_details_list: workoutDetailsList }, workout);
    const renderedWorkoutEntry = renderTemplate(templateWorkoutEntryMustache, vars);
    return renderedWorkoutEntry
};

const generateCategory = (category) => {
    const workoutsList = category.workouts.map(workout => generateWorkout(workout)).join('\n');
    const vars = Object.assign({ dyn_workout_entries_list: workoutsList }, category);
    const renderedCategory = renderTemplate(templateCategoryMustache, vars);
    return renderedCategory;
};

const run = () => {
    config.categories.forEach(category => {
        const output = generateCategory(category);
        const filename = `../content/${category.category_slug}.html`
        fs.writeFileSync(filename, output);
        
        console.log(`<li class="workout-gallery-list-item"><a href="./content/${category.category_slug}.html">${category.category_page_title}</a></li>`)
    })
};

run();
