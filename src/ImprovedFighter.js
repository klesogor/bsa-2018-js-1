import Fighter from './Fighter.js';

export default class ImprovedFighter extends Fighter
{
    constructor(name = 'Чемпион',power = '20',health = '150')
    {
        super(name,power,health);
    }

    doubleHit(enemy,point)
    {
        return super.hit(enemy,point*2);
    }
}