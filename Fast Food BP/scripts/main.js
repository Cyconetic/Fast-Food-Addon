import { world } from "@minecraft/server";

world.afterEvents.itemCompleteUse.subscribe(function(data){
    if (data.itemStack.type.id == "foods:green_cow") {
        data.source.addEffect("minecraft:levitation", 20, {amplifier: 255})
    }
    else if (data.itemStack.type.id == "foods:secret_ingredient") {
        data.source.addEffect("minecraft:fatal_poison", 400, {amplifier: 1})
        data.source.addEffect("minecraft:nausea", 600, {amplifier: 1})
        data.source.addEffect("minecraft:wither", 200, {amplifier: 1})
        data.source.addEffect("minecraft:poison", 600, {amplifier: 2})
    }
    else {}
})