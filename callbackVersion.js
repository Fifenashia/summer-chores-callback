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

function mowYard(name, callback) {
    setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback(); 
},  CHORE_TIMES.mow);
}

function weedEat(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished using the weed eater.`);
      callback(); 
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, CHORE_TIMES.weed);
}
mowYard("Willow", () => {
  weedEat("Willow", () => {
    console.log("Weed eating complete — callback ran ✅");
  });
});
function trimHedges(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
    }
  }, CHORE_TIMES.trim);
}
function collectWood(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished collecting wood.`);
      callback();
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
    }
  }, CHORE_TIMES.wood);
}
function waterGarden(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished watering the garden.`);
      callback();
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
    }
  }, CHORE_TIMES.water);
}

function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

doSummerChores("Willow");
