 //look up objects

 function phoneticLookup(val) {
    var results ="";

    var Lookup = {
        "Alpha" : "Adam",
        "bravo" : "Boston",
        "charlie": "chicago",
        "delta":"Denver",
        "echo": "easy",
        "foxtrot": "frank"
    };
    results = Lookup[val];

    return results;
 }

 console.log(phoneticLookup("delta"));

 //check for property

var myobj = {
    gift: "pony",
    pet:"kitten",
    bed:"sleigh,"
};

function checkObj(checkProp) {
    if (myobj.hasOwnProperty(checkProp)){
        return myobj[checkProp];
    } else{
        return "not found";
    }

}

 console.log(checkObj("gift"))

 //manuplationg objects

 var myMusic = [
    {
        "artist":"bill john",
        "title": "piano",
        "release_year": 1939,
        "formart":[
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist":"gazza",
        "title": "bad",
        "release_year":2003,
        "formats":[
            "youtube video"
        ]
    }
];

//nested objects

var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//nested arrays
var myPlants = [

    {
        type:"flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

