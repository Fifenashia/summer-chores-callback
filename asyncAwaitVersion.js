const CHORE_TIMES = {
    mow: 2000,
    weed: 1500,
    trim: 1000,
    wood: 2500,
    water: 500
};
const SLEEP_CHANCE = 0.3;

function staysAwake() {
return Math.random() > SLEEP_CHANCE;
}

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve();
        },  CHORE_TIMES.mow);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (staysAwake()) {
                console.log(`${name} finished using the weed eater.`);
                resolve();
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, CHORE_TIMES.weed);
        });
    }

    function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (staysAwake()) {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, CHORE_TIMES.trim);
        });
    }
    function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (staysAwake()) {
                console.log(`${name} finished collecting wood.`);
                resolve();
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, CHORE_TIMES.wood);
        });
    }
function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (staysAwake()) {
                console.log(`${name} finished watering the garden.`);
                resolve();
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, CHORE_TIMES.water);
        });
    }
   
   async function doSummerChores(name) {
  try {
    await mowYard(name);
    await weedEat(name);
    await trimHedges(name);
    await collectWood(name);
    await waterGarden(name);

    console.log(`${name} finished all their chores!`);
  } catch (errorMessage) {
    console.log(errorMessage);
    console.log(`${name} did NOT finish all their chores.`);
  }
}
