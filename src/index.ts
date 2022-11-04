import ResitorColors from "./challenge/resitorColors";
import RobotName from "./challenge/robotName";
import DungeonAndDragon from "./challenge/dungeonAndDragon";

const testResitorColors = new ResitorColors;
const testRobotName = new RobotName;
const testDungeonAndDragon = new DungeonAndDragon;

console.log(
    'Hej Resistor Challenge ==> ',
    testResitorColors.resitorNumber('white-red-red'),
);

console.log(
    'Hej Robot Name Challenge ==> ',
    testRobotName.factoringSetting(),
    testRobotName.getName(),
    testRobotName.getOlderNames(),
);

console.log(
    'Hej dungeon and dragon Challenge ==> ',
    testDungeonAndDragon.setAbilites(),
);