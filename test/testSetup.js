const mongoose = require('mongoose');
let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');
let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Playfield = require('../MongoDB/playfield');
let Loot = require('../MongoDB/loot');
let Administrator = require('../MongoDB/administrator');
const { setgameTime } = require('../Controllers/GameController');
const jail = require('../MongoDB/jail');
const game = require('../MongoDB/game');

before(async () => {  
    //connect
    let LocalURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
    let URI = "mongodb+srv://userTest:Tpy7KYPhMdzz5fSQ@cluster0.lpisu.mongodb.net/test";
    await mongoose.connect(URI);
    //fill db
    await FillDB();
});

after(async () => {  
  //clear db
  await Loot.deleteMany();
  await Jail.deleteMany();
  await Game.deleteMany();
  await Accesscode.deleteMany();
  await Player.deleteMany();
  await Playfield.deleteMany();
  await Administrator.deleteMany();
  await mongoose.connection.close();
});

async function FillDB(){
  //jail
  let jailModel = new Jail();
  jailModel.location = {
    "latitude": 51.689396,
    "longitude": 5.283974,
  };
  await jailModel.save();
  //loot
  let lootModel = new Loot();
  lootModel.name = "ketting";
  await lootModel.save();
  //administrator
  let administratorModel = new Administrator();
  administratorModel.name = "bert";
  administratorModel.code = "CODE1";
  await administratorModel.save();
  //accesscode
  let AccesscodeModel = new Accesscode();
  AccesscodeModel.code = "CODE2";
  AccesscodeModel.role = "boef";
  await AccesscodeModel.save();
  //player
  let player = {};
  player.name = "jan";
  player.role = "agent";
  player.location = {
        "latitude": 0,
        "longitude": 0,      
  }
  let playerModel = new Player(player);
  await playerModel.save();
  player = {};
  player.name = "peter";
  player.role = "boef";
  player.location = {
        "latitude": 0,
        "longitude": 0,    
  }

  let playerModel2 = new Player(player);
  await playerModel2.save();
  //playfield
  let playfield = {
      "playfield": [
          [
              [
                  {
                      "latitude": 51.68777289645334,
                      "longitude": 5.282771587371826
                  },
                  {
                      "latitude": 51.68773115954039,
                      "longitude": 5.283055901527406
                  },
                  {
                      "latitude": 51.687884139421215,
                      "longitude": 5.283093452453613
                  },
                  {
                      "latitude": 51.68789744199511,
                      "longitude": 5.283002257347108
                  },
                  {
                      "latitude": 51.68805707257702,
                      "longitude": 5.283055901527406
                  },
                  {
                      "latitude": 51.68802049061839,
                      "longitude": 5.283131003379823
                  },
                  {
                      "latitude": 51.68827988932307,
                      "longitude": 5.283222198486328
                  },
                  {
                      "latitude": 51.68826326124557,
                      "longitude": 5.283334851264954
                  },
                  {
                      "latitude": 51.688090328877415,
                      "longitude": 5.283318758010865
                  },
                  {
                      "latitude": 51.68800718808065,
                      "longitude": 5.283994674682618
                  },
                  {
                      "latitude": 51.68795397789058,
                      "longitude": 5.284423828125
                  },
                  {
                      "latitude": 51.68825328439612,
                      "longitude": 5.284520387649537
                  },
                  {
                      "latitude": 51.68828321493783,
                      "longitude": 5.284278988838197
                  },
                  {
                      "latitude": 51.68867231017928,
                      "longitude": 5.284402370452881
                  },
                  {
                      "latitude": 51.68891175174246,
                      "longitude": 5.284498929977418
                  },
                  {
                      "latitude": 51.68894168184879,
                      "longitude": 5.284375548362733
                  },
                  {
                      "latitude": 51.68915784314038,
                      "longitude": 5.284461379051209
                  },
                  {
                      "latitude": 51.6891179365181,
                      "longitude": 5.284767150878907
                  },
                  {
                      "latitude": 51.68941390979633,
                      "longitude": 5.284836888313293
                  },
                  {
                      "latitude": 51.6894538161577,
                      "longitude": 5.284552574157716
                  },
                  {
                      "latitude": 51.68965667295072,
                      "longitude": 5.284643769264221
                  },
                  {
                      "latitude": 51.68944051404116,
                      "longitude": 5.286392569541931
                  },
                  {
                      "latitude": 51.68906805319075,
                      "longitude": 5.286301374435425
                  },
                  {
                      "latitude": 51.68922102855374,
                      "longitude": 5.286151170730591
                  },
                  {
                      "latitude": 51.68932412035461,
                      "longitude": 5.285813212394715
                  },
                  {
                      "latitude": 51.68928753941988,
                      "longitude": 5.285507440567017
                  },
                  {
                      "latitude": 51.68912791317697,
                      "longitude": 5.28520166873932
                  },
                  {
                      "latitude": 51.68886519375991,
                      "longitude": 5.284992456436157
                  },
                  {
                      "latitude": 51.68860247281809,
                      "longitude": 5.284906625747681
                  },
                  {
                      "latitude": 51.68852598415605,
                      "longitude": 5.285984873771668
                  },
                  {
                      "latitude": 51.68870224044393,
                      "longitude": 5.286054611206056
                  },
                  {
                      "latitude": 51.688645705482955,
                      "longitude": 5.286387205123901
                  },
                  {
                      "latitude": 51.689513675633805,
                      "longitude": 5.286725163459779
                  },
                  {
                      "latitude": 51.6899360152434,
                      "longitude": 5.283538699150086
                  },
                  {
                      "latitude": 51.68991456576644,
                      "longitude": 5.283415317535401
                  }
              ],
              [
                  {
                      "latitude": 51.68833459569557,
                      "longitude": 5.28418242931366
                  },
                  {
                      "latitude": 51.68840626251252,
                      "longitude": 5.283399224281311
                  },
                  {
                      "latitude": 51.68832977351894,
                      "longitude": 5.283350944519044
                  },
                  {
                      "latitude": 51.68836302961898,
                      "longitude": 5.283238291740418
                  },
                  {
                      "latitude": 51.68895498411194,
                      "longitude": 5.283415317535401
                  },
                  {
                      "latitude": 51.68893170514888,
                      "longitude": 5.283527970314026
                  },
                  {
                      "latitude": 51.68874214743269,
                      "longitude": 5.283474326133729
                  },
                  {
                      "latitude": 51.6886523566585,
                      "longitude": 5.284278988838197
                  }
              ],
              [
                  {
                      "latitude": 51.68904809984443,
                      "longitude": 5.28345823287964
                  },
                  {
                      "latitude": 51.68930749266067,
                      "longitude": 5.283533334732056
                  },
                  {
                      "latitude": 51.68929751604137,
                      "longitude": 5.283651351928712
                  },
                  {
                      "latitude": 51.68924430736802,
                      "longitude": 5.283640623092651
                  },
                  {
                      "latitude": 51.68911461096466,
                      "longitude": 5.284327268600465
                  },
                  {
                      "latitude": 51.68896163524204,
                      "longitude": 5.284268260002137
                  }
              ],
              [
                  {
                      "latitude": 51.68940060766806,
                      "longitude": 5.283538699150086
                  },
                  {
                      "latitude": 51.689776391287225,
                      "longitude": 5.283656716346742
                  },
                  {
                      "latitude": 51.68966332397772,
                      "longitude": 5.284493565559387
                  },
                  {
                      "latitude": 51.689485242433115,
                      "longitude": 5.284445285797119
                  },
                  {
                      "latitude": 51.689556907428425,
                      "longitude": 5.283764004707337
                  },
                  {
                      "latitude": 51.68937067786515,
                      "longitude": 5.28368890285492
                  }
              ]
          ]
      ]
}
  let PlayfieldModel = new Playfield(playfield);
  await PlayfieldModel.save();
  //game
  let gameModel = new Game();
  gameModel.jail = jailModel;
  gameModel.administrator = administratorModel;
  gameModel.loot = new Array();
  gameModel.loot.push(lootModel);
  gameModel.Accesscodes = new Array();
  gameModel.Accesscodes.push(AccesscodeModel);
  gameModel.players = new Array();
  gameModel.players.push(playerModel2);
  gameModel.playfield = PlayfieldModel;
  gameModel.start_time = new Date();
  gameModel.end_time = new Date();
  await gameModel.save();
}






