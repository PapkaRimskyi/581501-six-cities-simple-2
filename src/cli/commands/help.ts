import chalk from 'chalk';

import { CliCommand } from '../ts/interfaces/cli-command.js';

class Help implements CliCommand {
  name = '--help';

  run() {
    console.log(`
      ${chalk.bgGreen.black('--version')}: Выводит информацию о версии приложения.
      ${chalk.bgGreen.black('--help')}: Выводит список и описание всех поддерживаемых аргументов.
      ${chalk.bgGreen.black('--generate')} ${chalk.green('<n>')} ${chalk.green('<filepath>')} ${chalk.green('<url>')}: Создаёт файл в формате tsv с тестовыми данными. Параметр ${chalk.green('<n>')} задаёт количество генерируемых предложений.
                                       Параметр ${chalk.green('<filepath>')} указывает путь для сохранения файла с предложениями. Параметр ${chalk.green('<url>')} задаёт адрес сервера, с которого необходимо взять данные.
      --import ${chalk.green('<filepath>')}: Импортирует в базу данных информацию из tsv-файла. Путь к файлу передаётся в параметре filepath.
    `);
  }
}

export default Help;
