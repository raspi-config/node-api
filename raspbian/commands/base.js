const util = require('util');

const exec = util.promisify(require('child_process').exec);

const payload = {
  'error': false,
  'error_message': null,
  'message': null,
  'data': null
};

async function execute(command) {
  try {
    const {err, stderr, stdout} = await exec(command);

    console.log(`${command} : ${stdout}`);

    if (err === '') {
      throw new Error();
    }

    if (stderr) {
      throw new Error();
    }

    payload.data = stdout;

    return payload;
  }
  catch (err) {
    payload.error = true;
    payload.error_message = 'Algo deu errado!';

    return payload;
  }
}

module.exports = {
  exec,
  execute,
};
