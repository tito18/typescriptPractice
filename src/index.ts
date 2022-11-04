import resitorColors from "./challenge/resitorColors";
import robotName from "./challenge/robotName";

const helloMessage = () => {
    return 'Hej World!';
}

const testResitorColors = new resitorColors;
const testRobotName = new robotName;

console.log(
    // 'Hej Resistor Challenge ==> ',
    // testResitorColors.resitorNumber('white-red-red'),
    'Hej Robot Name Challenge ==> ',
    testRobotName.factoringSetting(),
    testRobotName.getName(),
    testRobotName.getOlderNames(),
    testRobotName.factoringSetting(),
    testRobotName.getName(),
    testRobotName.getOlderNames(),
);

// testRobotName.setRobotName();