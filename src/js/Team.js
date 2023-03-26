import Bowman from './Characters/bowman';
import Daemon from './Characters/daemon';
import Magician from './Characters/magician';
import Swordsman from './Characters/swordsman';
import Undead from './Characters/undead';
import Vampire from './Characters/vampire';

export default class Team {
  static getStartPlayerTeam() {
    return [new Bowman(1), new Swordsman(1)];
  }

  static getPlayerTeam() {
    return [Bowman, Swordsman, Magician];
  }

  static getComputerTeam() {
    return [Daemon, Undead, Vampire];
  }
}
