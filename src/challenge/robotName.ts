export default class RobotName {
    _name = 'RX002';
    _olderNames: string[] = [];

    private getRandomNumber(index: number) {
        return Math.floor(Math.random() * index);
    }
    private getRandomLetters() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const randomIndex = this.getRandomNumber(alphabet.length);

        return alphabet[randomIndex];
    }

    private setName(value: string) {
        this._name = value;
    }

    private setNewOldName(value: string) {
        this._olderNames.push(value);
    }

    private setRobotName() {
        const nameLength = [1, 2, 3, 4, 5];

        const name = nameLength.map((index) => {
            if (index < 3) {
                return this.getRandomLetters().toUpperCase();
            }
            return this.getRandomNumber(9);
        });
        return name.join('');
    }

    public factoringSetting() {
        let newName = this.setRobotName();
        this._olderNames.forEach((oldyNames) => {
            if (oldyNames === newName) {
                newName = this.setRobotName();
            }
        })
        this.setNewOldName(this._name);
        this.setName(newName);
        return this._name;
    }

    public getName() {
        return this._name;
    }

    public getOlderNames() {
        return this._olderNames;
    }
}