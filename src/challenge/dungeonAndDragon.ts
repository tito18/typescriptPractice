export default class DungeonAndDragon {

    _strength = 0;
    _dexterity = 0;
    _constitution = 0;
    _intelligence = 0;
    _wisdom = 0;
    _charisma = 0;
    _constitutionModifier = 0;
    _hitpoints = 0;

    private static HITPOINTS_INITIAL_PLUS = 10;
    private static CONSTITUTION_MODIFIER_DIVIDE = 2;
    private static DICE_ITERATIONS = 4;
    private static DICE_SIDES = 6

    // Setters
    private setStrength(value: number) {
        this._strength = value;
    }
    private setDexterity(value: number) {
        this._dexterity = value;
    }
    private setConstitution(value: number) {
        this._constitution = value;
    }
    private setIntelligence(value: number) {
        this._intelligence = value;
    }
    private setWisdom(value: number) {
        this._wisdom = value;
    }
    private setCharisma(value: number) {
        this._charisma = value;
    }
    private setConstitutionModifier() {
        const constitution = this.getConstitution();
        this._constitutionModifier = Math.round((constitution - DungeonAndDragon.HITPOINTS_INITIAL_PLUS) / DungeonAndDragon.CONSTITUTION_MODIFIER_DIVIDE);
    }
    private setHitPoints() {
        const constitutionModifier = this.getConstitutionModifier();
        this._hitpoints = DungeonAndDragon.HITPOINTS_INITIAL_PLUS + constitutionModifier;
    }

    // Getters 
    public getStrength() {
        return this._strength;
    }
    public getDexterity() {
        return this._dexterity;
    }
    public getConstitution() {
        return this._constitution;
    }
    public getIntelligence() {
        return this._intelligence;
    }
    public getWisdom() {
        return this._wisdom;
    }
    public getCharisma() {
        return this._charisma;
    }
    public getConstitutionModifier() {
        return this._constitutionModifier;
    }
    public getHitpoints() {
        return this._hitpoints;
    }

    private getRandomNumber(index: number) {
        return Math.floor(Math.random() * index);
    }
    private rollingDice() {
        // let [cosa1, cosa2]: number[] = [];
        return this.getRandomNumber(DungeonAndDragon.DICE_SIDES) + 1;
    }
    private getAbilityScore() {
        // const iteration = [1, 2, 3, 4]
        const diceThrows = [];
        for (let index = 0; index < DungeonAndDragon.DICE_ITERATIONS; index++) {
            diceThrows.push(this.rollingDice());
        }

        diceThrows.sort((a, b) => b - a);
        // console.log('Hej =>', diceThrows);
        diceThrows.pop();
        // console.log('Hej =>', diceThrows);
        return diceThrows.reduce((add, a) => add + a, 0);
    }

    public setAbilites() {
        this.setStrength(this.getAbilityScore());
        this.setDexterity(this.getAbilityScore());
        this.setConstitution(this.getAbilityScore());
        this.setIntelligence(this.getAbilityScore());
        this.setWisdom(this.getAbilityScore());
        this.setCharisma(this.getAbilityScore());
        this.setConstitutionModifier();
        this.setHitPoints();

        return this.getAbilitiesStats();
    }

    public getAbilitiesStats() {
        const abilitiesStats = `
            Strength = ${this.getStrength()}, 
            Dexterity = ${this.getDexterity()}, 
            Constitution = ${this.getConstitution()}, 
            Intelligence = ${this.getIntelligence()}, 
            Wisdom = ${this.getWisdom()}, 
            Charisma = ${this.getCharisma()},
            ConstitutionModifier = ${this.getConstitutionModifier()}, 
            Hitpoints = ${this.getHitpoints()},
        `;
        return abilitiesStats;
    }
}