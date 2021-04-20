const core = require('@actions/core')

async function run() {
  try { 
    const INCOMING_WEBHOOK_URL = process.env['INCOMING_WEBHOOK_URL'];
    const GITHUB_EVENT_PATH = process.env['GITHUB_EVENT_PATH'];

    if (!INCOMING_WEBHOOK_URL) {
      throw new Error('Missing INCOMING_WEBHOOK_URL environment var')
    }

    const config = require(GITHUB_EVENT_PATH);
    console.log(`config: ${config}`);
    core.setOutput('response', `sucess`)
  } 
  catch (error) {
    core.setFailed(error.message)
  }
}

module.exports = run