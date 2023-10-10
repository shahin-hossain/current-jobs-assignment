
const getJobFromLocalStorage = () => {
    let storedJob;
    const exist = localStorage.getItem('appliedJobs');
    if (exist) {
        storedJob = JSON.parse(exist)
    }
    else {
        storedJob = {}
    }
    return storedJob
}

const setJobToLocalStorage = (id) => {
    let storedJob = getJobFromLocalStorage();
    let exist = storedJob[id];
    if (!exist) {
        storedJob[id] = id;
    }

    localStorage.setItem('appliedJobs', JSON.stringify(storedJob))
}

export { getJobFromLocalStorage, setJobToLocalStorage }