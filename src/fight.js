import Fighter from './Fighter.js';
import ImprovedFighter from './ImprovedFighter.js';

export default function fight(fighter1,fighter2,...params)
{
    function attack(attacker,defender,point)
    {
        const log = (x) =>{console.log(x);}
        if(attacker instanceof ImprovedFighter && Math.random()>0.8){
            let damage = attacker.doubleHit(defender,point);
            log(`${attacker.name} ДАВЖДЫ ударил ${defender.name} и нанес ${Math.floor(damage)} урона`);
        }
        else{
            let damage = attacker.hit(defender,point);
            log(`${attacker.name} ударил ${defender.name} и нанес ${Math.floor(damage)} урона`);
        }
        log(`У ${defender.name} осталось ${Math.ceil(defender.health)} очков жизни!`);
    }
    function end_game(...[turns,winner])
    {
        console.log("Это был тяжелый бой!");
        if(winner != null){
            console.log(`Победил ${winner.name}! У него осталось ${Math.ceil(winner.health)} очков жизни!`);
        }
        else{
            console.log("По итогу битвы у нас НИЧЬЯ!");
            console.log(`У ${fighter1.name} осталось ${Math.ceil(fighter1.health)} очков жизни.`);
            console.log(`У ${fighter2.name} осталось ${Math.ceil(fighter2.health)} очков жизни.`);
        }

    }
    const doAttack = (val) =>{
        attack(current,next,val);
            if(next.health<=0){
                end_game(counter,current,next);
                return true;
            }
            current = [next,next = current][0];
            return false; 
    }
    let counter = 0,
        init = Math.random(),
        current = init>0.5 ? fighter1 : fighter2,
        next = init>0.5 ? fighter2 : fighter1;
        for(let i = 0;i<params.length;i++,++counter){
            if(doAttack(params[i])){
                end_game(counter,next);
                return;
            }
        }
        end_game(counter);
}