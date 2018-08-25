const beyonceData = {
  hits: [
    { 
      title: 'bootylicious', 
      group: true, 
      groupName: 'destinysChild', 
      hair: ['straight', 'blonde', 'pink tips'], 
      signatureLook: 'fedora with yellow feather', 
      videoTheme: 'dressing room dance', 
      bestLine: 'Move your body up and down, make your booty touch the ground', 
      fierceness: 7, 
      formation: false, 
      dancers: 20
    },
    { 
      title: 'singleLadies', 
      group: false, 
      groupName: 'none', 
      hair: ['honey brown', 'half up, half down'], 
      signatureLook: 'black bodysuit and legs for days', 
      videoTheme: 'single ladies dance', 
      bestLine: 'if you like it then you should\'ve put a ring on it', 
      fierceness: 10, 
      formation: true, 
      dancers: 2 
    },
    { 
      title: 'letMeUpgradeYou', 
      group: false, 
      groupName: 'none', 
      hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'], 
      signatureLook: 'flapper dress and bodysuit', 
      videoTheme: 'decadence, water, gold beads and pearls', 
      bestLine: 'I could do for you what Martin did for the people', 
      fierceness: 10, 
      formation: true, 
      dancers: 5 
    },
    { 
      title: 'sorry', 
      group: false, 
      groupName: 'none', 
      hair: ['braids', 'bun', 'blonde', 'waves', 'bob'], 
      signatureLook: 'braided crown with gold bikini top', 
      videoTheme: 'party bus and Serena Williams in bodysuit', 
      bestLine: 'Boi bye', 
      fierceness: 10, 
      formation: false, 
      dancers: 1 
    },
    { 
      title: 'sayMyName', 
      group: true, 
      groupName: 'destinysChild', 
      hair: ['blonde', 'curly', 'braid', 'pony tail'], 
      signatureLook: 'none', 
      videoTheme: 'color blocked scenes with group', 
      bestLine: 'say my name, say my name', 
      fierceness: 7, 
      formation: true, 
      dancers: 6 
    },
    { 
      title: 'feelingMyself', 
      group: true, 
      groupName: 'Nicki Minaj featuring Beyonce', 
      hair: ['blonde', 'wavy'], 
      signatureLook: 'sporty bodysuit', 
      videoTheme: 'Coachella music festival', 
      bestLine: 'Im felling myself', 
      fierceness: 9, 
      formation: false, 
      dancers: 0 
    }
  ],
  movies: [
    { title: 'Austin Power\'s Goldmember', year: 2002, rating: 5},
    { title: 'Dreamgirls', year: 2006, rating: 7},
    { title: 'Obsessed', year: 2009, rating: 6},
    { title: 'Cadillac Records', year: 2008, rating: 8},
    { title: 'Life is But a Dream', year: 2013, rating: 6},
    { title: 'The Pink Panther', year: 2006, rating: 4},
    { title: 'Epic', year: 2013, rating: 7},
    { title: 'The Fighting Temptations', year: 2003, rating: 5}
  ]
};


const beyonceMethods = {
  getHitSongs() {
    return beyonceData.hits.map( song => song.title );
  },
  getFiercenessList() {
    return beyonceData.hits.map( song => song.fierceness );
  }
}


module.exports = beyonceMethods;