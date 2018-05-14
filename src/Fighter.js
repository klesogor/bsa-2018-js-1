export default class Fighter
{
    constructor(name = 'боец',power = 20,health = '100')
    {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage){
        this.health -= Number(damage);
    }

    hit(enemy,point)
    {
        enemy.setDamage(point*this.power);
        return point*this.power;
    }
}