const raspbian = require('../base');

const commands = {
  'update': "sudo apt-get update",
  'upgrade': "sudo apt-get upgrade -y",
};

async function update() {
  const result = await raspbian.execute(commands.update);

  result.message = 'Repositórios atualizados.';

  return result
}

async function upgrade() {
  const result = await raspbian.execute(commands.upgrade);

  result.message = 'Distro atualizada com sucesso.';

  return result
}

module.exports = {
  update,
  upgrade
};
