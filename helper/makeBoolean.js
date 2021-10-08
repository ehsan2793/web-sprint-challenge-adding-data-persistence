const makeBolean = (something) => {
    if (something.project_completed === 1) {
        something.project_completed = true;
    } else {
        something.project_completed = false;
    }
    return something;
};

const makeBoleanTask = (something) => {
    if (something.task_completed === 1) {
        something.task_completed = true;
    } else {
        something.task_completed = false;
    }
    return something;
};

module.exports = {
    makeBolean,
    makeBoleanTask,
};
