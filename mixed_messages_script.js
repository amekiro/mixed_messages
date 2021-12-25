const noun = [
    ["Tiger", "Tigers"], // 0: Singular, 1: Plural
    ["Lion", "Lions"],
    ["Pig", "Pigs"],
    ["Mouse", "Mice"],
    ["Coin", "Coins"],
    ["Game", "Games"]
]

const verb = [
    ["Jump", "Jumped", "Jumping"], // 0: Present tense, 1: Past tense, 2: -ing
    ["Rip", "Ripped", "Ripping"],
    ["See", "Saw", "Seeing"],
    ["Laugh", "Laughed", "Laughing"]
]

const adj = [
    ["Dark", "Darkest"], // 0: Default, 1: Comparison
    ["Bright", "Brightest"],
    ["Fun", "Funnest"],
    ["Meek", "Meekest"]
]

const adv =[
    "Quickly",
    "Silently"
]

const vowel = ["a", "e", "i", "o", "u"];

const findWord = (arr, count) => {
    if (arr.length < count) {
        return "ERR";
    }

    const words = [];

    while (count > 0) {
        let index = Math.floor(Math.random() * arr.length);
        let val = arr[index];
        if (Array.isArray(val)) {
            for (let i = 0; i < val.length; i++) {
                val[i] = val[i].toLowerCase();
            }
        } else {
            val = val.toLowerCase();
        }

        words.push(val);
        arr.splice(index, 1);

        count--;
    }
    return words;
}

const storyFac = (title, nc, vc, ac, av, storyFun) => {
    let nouns = findWord(noun.map(x => x), nc);
    let verbs = findWord(verb.map(x => x), vc);
    let adjs =  findWord(adj.map(x => x), ac);
    let advs = findWord(adv.map(x => x), av);

    let err = "";

    if (nouns === "ERR") {
        err += `
        There are not enough words in the noun bank. Please enter a number less than ${noun.length++}; `;
    }

    if (verbs === "ERR") {
        err += `
        There are not enough words in the verb bank. Please enter a number less than ${verb.length++}; `;
    }

    if (adjs === "ERR") {
        err += `
        There are not enough words in the adjective bank. Please enter a number less than ${adj.length++};`;
    }

    if (advs === "ERR") {
        err += `
        There are not enough words in the adverb bank. Please enter a number less than ${adv.length++};`;
    }

    if (err != "") {
        console.log(`Unable to create story for ${title}: ` + err);
        
        return;
    }

    return `Story:  ${title}
    
    ${storyFun(nouns, verbs, adjs, advs)}`;
}

const story = [
    storyFac("A Day At The Zoo!", 3, 3, 4, 2, function(nouns, verbs, adjs, advs) {
        let str = `Today I went to the zoo. I saw a${vowel.some(x => adjs[0][0][0] === x) ? "n" : ""} ${adjs[0][0]} ${nouns[0][0]}`;
        adjs.shift();
        nouns.shift();

        str += ` jumping up and down in its tree. He ${verbs[0][1]} ${advs[0]}`;
        verbs.shift();
        advs.shift();

        str += ` through the large tunnel that led to its ${adjs[0][0]} ${nouns[0][0]}.`;
        adjs.shift();
        nouns.shift();
        
        str += ` I got some peanuts and passed them through the cage to a gigantic gray ${nouns[0][0]}`;
        nouns.shift();

        str += ` towering above my head. Feeding that animal made me hungry. I went to get a ${adjs[0][0]}`;
        adjs.shift();

        str += ` scoop of ice cream. It filled my stomach. Afterwards I had to ${verbs[0][0]} ${advs[0]}`;
        verbs.shift();
        advs.shift();

        str += ` to catch our bus. When I got home I ${verbs[0][1]}`;
        verbs.shift();
        
        str += ` my mom for a ${adjs[0][0]} day at the zoo.`;

        return str;
    }),
    storyFac("The Fun Park!", 2, 2, 3, 2, function(nouns, verbs, adjs, advs) {
        let str = `Today, my fabulous camp group went to a${vowel.some(x => adjs[0][0][0] === x) ? "n" : ""} ${adjs[0][0]}`;
        adjs.shift();

        str += ` amusement park. It was a fun park with lots of cool ${nouns[0][1]}`;
        nouns.shift();

        str += ` and enjoyable play structures. When we got there, my kind counselor shouted loudly, "Everybody off the ${nouns[0][0]}."`;
        nouns.shift();
        
        str += ` We all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. I was so excited! I couldn't figure out what exciting thing to do first. I saw a scary roller coaster I really liked so, I ${advs[0]}`;
        advs.shift();
        
        str += ` ran over to get in the long line that had about ${Math.floor(Math.random() * 100)} people in it. When I finally got on the roller coaster I was ${verbs[0][1]}.`;
        verbs.shift();
        
        str += ` In fact I was so nervous my two knees were knocking together. This was the ${adjs[0][1]}`;
        adjs.shift();

        str += ` ride I had ever been on! In about two minutes I heard the crank and grinding of the gears. That\'s when the ride began! When I got to the bottom, I was a little ${verbs[0][1]}`;
        verbs.shift();
        
        str += ` but I was proud of myself. The rest of the day went ${advs[0]}.`;
        advs.shift();
        
        str += ` It was a${vowel.some(x => adjs[0][0][0] === x) ? "n" : ""} ${adjs[0][0]} day at the fun park. `;

        return str;
    }),
    storyFac("At The Arcade!", 6, 12, 1, 1, function(nouns, verbs, adjs, advs) {
        let str = `When I go to the arcade with my ${nouns[0][1]}`;
        nouns.shift();
        
        str += ` there are lots of games to play. I spend lots of time there with my friends. In the game X-Men you can be different ${nouns[0][1]}.`;
        nouns.shift();
        
        str += ` The point of the game is to ${verbs[0][0]}`;
        verbs.shift();
        
        str += ` every robot. You also need to save people. Then you can go to the next level. In the game Star Wars you are Luke Skywalker and you try to destroy every ${nouns[0][0]}.`;
        nouns.shift();
        
        str += ` In a car racing/motorcycle racing game you need to beat every computerized vehicle that you are ${verbs[0][2]}`;
        verbs.shift();
        
        str += ` against. There are a whole lot of other cool games. When you play some games you win ${nouns[0][1]}`;
        nouns.shift();
        
        str += ` for certain scores. Once you're done you can cash in your tickets to get a big ${nouns[0][0]}.`;
        nouns.shift();
        
        str += ` You can save your ${nouns[0][0]} for another time. When I went to this arcade I didn't believe how much fun it would be. So far I have had a lot of fun every time I've been to this great arcade! `;

        return str;
    })
].filter(x => x);

const randInd = Math.floor(Math.random() * story.length);
console.log(story[randInd]);