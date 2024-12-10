// In the same folder have to run the following commands:
//
// npm init -y
// npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const exec = require('@actions/exec');
// const github = require('@actions/github');

function run() {
	const bucket = core.getInput('bucket', { required: true });
	const region = core.getInput('region', { required: true });
	const dist_folder = core.getInput('dist-folder', { required: true });

	const s3_uri = `s3://${bucket}`
	exec.exec('aws s3 sync ${dist_folder} ${s3_uri} --region ${region}');

	core.notice('Hello from my custom javascript action.');
}

run();