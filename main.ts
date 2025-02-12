player.onChat("lluvia", function (num1) {
    for (let index = 0; index < num1; index++) {
        if (num1 <= 10) {
            mobs.spawn(XP_BOTTLE, randpos(
            pos(-10, 10, -10),
            pos(10, 10, 10)
            ))
        } else {
            mobs.spawn(SNOWBALL_PROJECTILE_MOB, randpos(
            pos(-10, 10, -10),
            pos(10, 10, 10)
            ))
        }
    }
})
player.say("Para ver botellas mágicas escribe el comando 'lluvia' con menos o igual al número 10.")
player.say("Para ver la nieve escribe el comando 'lluvia' con un número mayor que 10.")
