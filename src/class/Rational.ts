/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    // 分子/分母 = up/down
    private up: number;
    private down: number;

    constructor(up: number, down: number){
        this.up = up;
        this.down = down;
    }

    //約簡分數
    normalize(): Rational{
        const gcd = this.gcd(this.up, this.down);
        return new Rational(this.up / gcd, this.down / gcd);
    }
    
    //求最大公因數
    private gcd(a: number, b: number): number{
        if(!b) return a;
        return this.gcd(b, a % b); 
    }

    //解析分子和分母數組
    static _parseRational(upArr: string[], downArr: string[]){
        const up = parseInt(upArr.join(''),10);
        const down = parseInt(downArr.join(''),10);
        return new Rational(up, down);
    }

    //解析分數字符串
    static parseRational(rationalStr: string): Rational {
        const parts = rationalStr.split('/');
        
        if (parts.length !== 2) {
            throw new Error(`Invalid rational string format: ${rationalStr}`);
        }        
        
        const up = Number(parts[0]);
        const down = Number(parts[1]);
    
        if (isNaN(up) || isNaN(down)) {
            throw new Error(`Invalid number format in: ${rationalStr}`);
        }
    
        return new Rational(up, down);
    }

    //檢查兩個分數是否相等
    equals(other: Rational): boolean{
        const r1 = this.normalize();
        const r2 = other.normalize();
        return r1.up === r2.up && r1.down === r2.down;
    }

    //檢查分數是否為整數
    isWhole(): boolean{
        return this.up % this.down === 0;
    }

    //檢查分數是否為小數
    isDecimal(): boolean{
        return this.up % this.down !== 0;
    }

    //返回分數
    toString(): string{
        return `${this.up}/${this.down}`;
    }
}