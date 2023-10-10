
import { getJobFromLocalStorage } from "../utils/LocalStorage";



const loadJobData = async () => {
    const res = await fetch('jobData.json');
    const jobs = await res.json();

    //data from local Storage
    const storedJobs = getJobFromLocalStorage();
    let savedJobs = [];
    for (let id in storedJobs) {
        const job = jobs.find(job => job.id == id);
        if (job) {
            savedJobs.push(job)
        }
    }

    return savedJobs;
}


export { loadJobData }
