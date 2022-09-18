import { ICliCommand } from './ts/interfaces/interface.js';

type CommandsType = {
  [key: string]: ICliCommand;
};

type ParsedCommand = {
  [key: string]: string[],
}

class CliController {
  protected commands: CommandsType = {};
  private defaultCommand = '--help';

  private parseConsoleCommand(cliArguments: string[]): ParsedCommand {
    const parsedConsoleCommands: ParsedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }
      return acc;
    }, parsedConsoleCommands);
  }

  processCommand(argv: string[]) {
    const parsedConsoleCommands = this.parseConsoleCommand(argv);
    const [commandName] = Object.keys(parsedConsoleCommands);
    const command = this.getCommand(commandName);
    const commandArguments = parsedConsoleCommands[commandName] ?? [];
    command.run(...commandArguments);
  }

  public setCommands(commandList: ICliCommand[]) {
    commandList.forEach((command) => {
      this.commands[command.name] = command;
    });
  }

  public getCommand(name: string) {
    return this.commands[name] || this.commands[this.defaultCommand];
  }
}

export default CliController;
