export default class resitorColors {

    private getNumber(color: string) {
        interface Colors {
            black: number
            brown: number
            red: number
            orange: number
            yellow: number
            green: number
            blue: number
            violet: number
            grey: number
            white: number
        }
        const colors: Colors = {
            black: 0,
            brown: 1,
            red: 2,
            orange: 3,
            yellow: 4,
            green: 5,
            blue: 6,
            violet: 7,
            grey: 8,
            white: 9,
        }
        return colors[color as keyof Colors];
    }

    private formatColor = (color: string) => {
        return color.toLowerCase();
    }

    public resitorNumber = (resitorColors: string) => {
        const colors = resitorColors.split('-');
        const numberColors = colors.map((color, index) => {
            if (index === 2) {
                const addCeros = ''.padEnd(this.getNumber(this.formatColor(color)), '0');
                return addCeros;
            }
            return this.getNumber(this.formatColor(color));
        });

        const number = parseInt(numberColors.join(''));
        const resitorValue = number < 1000 ? `${number} ohms` : `${(number / 1000)} kiloohms`;

        return resitorValue;
    }
}