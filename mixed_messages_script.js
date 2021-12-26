const vowel = ["a", "e", "i", "o", "u"];

const wordMaster = {
    nouns: [
        ["Tiger", "Tigers"], // 0: Singular, 1: Plural
        ["Lion", "Lions"],
        ["Pig", "Pigs"],
        ["Mouse", "Mice"],
        ["Coin", "Coins"],
        ["Game", "Games"]
    ],
    verbs: [
        ["Jump", "Jumped", "Jumping"], // 0: Present tense, 1: Past tense, 2: -ing
        ["Rip", "Ripped", "Ripping"],
        ["See", "Saw", "Seeing"],
        ["Laugh", "Laughed", "Laughing"]
    ],
    adjs: [
        ["Dark", "Darkest"], // 0: Default, 1: Comparison
        ["Bright", "Brightest"],
        ["Fun", "Funnest"],
        ["Meek", "Meekest"]
    ],
    advs: [
        ["Quickly"],
        ["Silently"]
    ]
}

const findWord = (arr, count) => {
    if (arr.length < count) {
        return "ERR";
    }

    const words = [];

    while (count > 0) {
        let index = Math.floor(Math.random() * arr.length);
        let val = arr[index];
        for (let i = 0; i < val.length; i++) {
            val[i] = val[i].toLowerCase();
        }

        words.push(val);
        arr.splice(index, 1);

        count--;
    }
    return words;
}

const storyFac = (title, wordReq, storyFun) => {
    //console.log(`Set story of ${title}`);

    let wordBank = {};
    
    for (type in wordMaster) {
        wordBank[type] = findWord(wordMaster[type].map(x => x), wordReq[type]);
    }

    let err = "";

    for (type in wordBank) {
        if (wordBank[type] === "ERR") {
            err += `
            - There are not enough words in the ${type} bank. Please enter a number less than ${wordMaster[type].length + 1}; `;
        }
    }

    if (err != "") {
        console.log(`Unable to create story for ${title}: ` + err);
        
        return;
    }

    return `Story:  ${title}
    
    ${storyFun(wordBank)}`;
}

const story = [
    storyFac("A Day At The Zoo!", {nouns: 3, verbs: 3, adjs: 4, advs: 2}, function(wordBank) {
        return `Today I went to the zoo. I saw a${vowel.some(x => wordBank.adjs[0][0][0] === x) ? "n" : ""} ${wordBank.adjs.shift()[0]} ${wordBank.nouns.shift()[0]} jumping up and down in its tree. He ${wordBank.verbs.shift()[1]} ${wordBank.advs.shift()[0]} through the large tunnel that led to its ${wordBank.adjs.shift()[0]} ${wordBank.nouns.shift()[0]}. I got some peanuts and passed them through the cage to a gigantic gray ${wordBank.nouns.shift()[0]} towering above my head. Feeding that animal made me hungry. I went to get a ${wordBank.adjs.shift()[0]} scoop of ice cream. It filled my stomach. Afterwards I had to ${wordBank.verbs.shift()[0]} ${wordBank.advs.shift()[0]} to catch our bus. When I got home I ${wordBank.verbs.shift()[1]} my mom for a ${wordBank.adjs.shift()[0]} day at the zoo.`;
    }),
    storyFac("The Fun Park!", {nouns: 2, verbs: 2, adjs: 3, advs: 2}, function(wordBank) {
        return `Today, my fabulous camp group went to a${vowel.some(x => wordBank.adjs[0][0][0] === x) ? "n" : ""} ${wordBank.adjs.shift()[0]} amusement park. It was a fun park with lots of cool ${wordBank.nouns.shift()[1]} and enjoyable play structures. When we got there, my kind counselor shouted loudly, "Everybody off the ${wordBank.nouns.shift()[0]}." We all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. I was so excited! I couldn't figure out what exciting thing to do first. I saw a scary roller coaster I really liked so, I ${wordBank.advs.shift()[0]} ran over to get in the long line that had about ${Math.floor(Math.random() * 100)} people in it. When I finally got on the roller coaster I was ${wordBank.verbs.shift()[1]}. In fact I was so nervous my two knees were knocking together. This was the ${wordBank.adjs.shift()[1]} ride I had ever been on! In about two minutes I heard the crank and grinding of the gears. That\'s when the ride began! When I got to the bottom, I was a little ${wordBank.verbs.shift()[1]} but I was proud of myself. The rest of the day went ${wordBank.advs.shift()[0]}. It was a${vowel.some(x => wordBank.adjs[0][0][0] === x) ? "n" : ""} ${wordBank.adjs.shift()[0]} day at the fun park. `;
    }),
    storyFac("At The Arcade!", {nouns: 6, verbs: 12, adjs: 1, advs: 1}, function(wordBank) {
        return `When I go to the arcade with my ${wordBank.nouns.shift()[1]} there are lots of games to play. I spend lots of time there with my friends. In the game X-Men you can be different ${wordBank.nouns.shift()[1]}. The point of the game is to ${wordBank.verbs.shift()[0]} every robot. You also need to save people. Then you can go to the next level. In the game Star Wars you are Luke Skywalker and you try to destroy every ${wordBank.nouns.shift()[0]}. In a car racing/motorcycle racing game you need to beat every computerized vehicle that you are ${wordBank.verbs.shift()[2]} against. There are a whole lot of other cool games. When you play some games you win ${wordBank.nouns.shift()[1]} for certain scores. Once you're done you can cash in your tickets to get a big ${wordBank.nouns.shift()[0]}. You can save your ${wordBank.nouns.shift()[0]} for another time. When I went to this arcade I didn't believe how much fun it would be. So far I have had a lot of fun every time I've been to this great arcade! `;
    })
].filter(x => x);

const randInd = Math.floor(Math.random() * story.length);
console.log(story[randInd]);