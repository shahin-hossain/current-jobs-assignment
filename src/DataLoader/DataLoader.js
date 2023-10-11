
import { getJobFromLocalStorage } from "../utils/LocalStorage";



const loadJobData = async () => {
    const res = await fetch('/jobs.json'); // fetch করার সময় (/) স্লাস না দিলে page reload দিলে json data পায় না।
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
