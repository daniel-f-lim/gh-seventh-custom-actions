// In the same folder have to run the following commands:
//
// npm init -y
// npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
	core.notice('Hello from my custom javascript action.');
}

run();