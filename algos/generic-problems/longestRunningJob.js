/**
 *
 * Problem Title: Longest Running Jobs From Log
 * 
 * Problem Description:
 * 
 * A job has a name and one or more run instances. Each run instance has a globally unique ID number (runid).
 * 
 * You are given a list of input log lines and a positive integer K. The log lines represent events related to job runs. There are two types of log entries:
 * 
 * Started: Started name=<job_name> runid=<run_id> - Indicates that a job instance with run_id and associated with job_name has begun.
 * Ended: Ended runid=<run_id> time=<timestamp> - Indicates that the job instance with run_id has finished at the given timestamp. The timestamp is a positive integer.
 * Input:
 * 
 * A list of strings, log_lines, where each string is a log entry as described above.
 * An integer, K, representing the number of distinct jobs to output.
 * Output:
 * 
 * Print out the names of the K distinct jobs, along with the longest running individual run instance time for each of those jobs.
 * 
 * Important Notes:
 * 
 * You should de-duplicate by job name. If a job has multiple run instances, you are interested in the duration of its longest single run instance, not the total time across all its instances.
 * The output should list the K jobs with the longest individual run times, sorted in descending order of their longest run time. If two jobs have the same longest run time, their relative order does not matter.
 * The input log lines may not be in chronological order.
 * Assume all Started run IDs will eventually have a corresponding Ended entry.
 *
 *
 * */

const logs = [
  "Started name=dump_logs runid=f863",
  "Started name=dump_logs runid=g301gas",
  "Started name=read_logs runid=r0eas",
  "Ended runid=r0eas time=103",
  "Ended runid=f863 time=1021",
  "Started name=grep_logs runid=ac3de",
  "Ended runid=g301gas time=1343",
  "Started name=write_logs runid=dg2dz",
  "Ended runid=ac3de time=52",
  "Ended runid=dg2dz time=101",
];

const printLongestRunningJobs = (logs, k) => {
  const runIdToJobNameMap = new Map();
  const jobNameToMaxDurationMap = new Map();

  for (let l of logs) {
    if (l.startsWith("Started")) {
      const nameStart = l.indexOf("name=") + 5;
      const nameEnd = l.indexOf(" runid=");
      const jobName = l.substring(nameStart, nameEnd);

      const runIdStart = l.indexOf("runid=") + 6;
      const runId = l.substring(runIdStart, l.length);

      runIdToJobNameMap.set(runId, jobName);
    } else if (l.startsWith("Ended")) {
      const runIdStart = l.indexOf("runid=") + 6;
      const runIdEnd = l.indexOf(" time=");
      const runId = l.substring(runIdStart, runIdEnd);

      const timeStart = l.indexOf("time=") + 5;
      const duration = parseInt(l.substring(timeStart, l.length), 10);

      const jobName = runIdToJobNameMap.get(runId);

      if (jobName) {
        const currentMaxDuration = jobNameToMaxDurationMap.get(jobName) || 0;
        jobNameToMaxDurationMap.set(
          jobName,
          Math.max(currentMaxDuration, duration)
        );
      }
    }
  }
  const jobDurationsArray = Array.from(jobNameToMaxDurationMap.entries());
  jobDurationsArray.sort((a, b) => b[1] - a[1]);

  const topKJobs = jobDurationsArray.slice(0, k);

  const resultLines = topKJobs.map(
    ([jobName, duration]) => `${jobName} ${duration}`
  );

  return resultLines.join("\n");
};

console.log(printLongestRunningJobs(logs, 2));
