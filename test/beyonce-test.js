const { expect } = require('chai');

const beyonceMethods = require('../lib/beyonce')

describe('Answers to Beyonce Problem set', () => {
  it('should return an array of all of Beyonce\'s hit songs', () => {
    const hitSongs = beyonceMethods.getHitSongs();

    expect(hitSongs).to.deep.equal([ 
      'bootylicious',
      'singleLadies',
      'letMeUpgradeYou',
      'sorry',
      'sayMyName',
      'feelingMyself' 
    ]);
  })

  it.skip('should create an array with all of Beyonce\'s fierceness ratings', () => {
    const fiercenessList = beyonceMethods.getFiercenessList();

    expect(fiercenessList).to.deep.equal([ 7, 10, 10, 10, 7, 9 ]);
  })

  it.skip('should give me a song where Beyonce is not wearing a bodysuit', () => {
    const song = beyonceMethods.getSongNoBodysuit();

    expect(song.signatureLook).to.not.have.string('bodysuit');
  })

  it.skip('should give me all the songs where Beyonce is wearing a bodysuit', () => {
    const bodysuitSongs = beyonceMethods.getBodysuitSongs();

    expect(bodysuitSongs).to.deep.equal([ 
      { 
        title: 'singleLadies',
        group: false,
        groupName: 'none',
        hair: [ 'honey brown', 'half up, half down' ],
        signatureLook: 'black bodysuit and legs for days',
        videoTheme: 'single ladies dance',
        bestLine: 'if you like it then you should\'ve put a ring on it',
        fierceness: 10,
        formation: true,
        dancers: 2 },
      { 
        title: 'letMeUpgradeYou',
        group: false,
        groupName: 'none',
        hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
        signatureLook: 'flapper dress and bodysuit',
        videoTheme: 'decadence, water, gold beads and pearls',
        bestLine: 'I could do for you what Martin did for the people',
        fierceness: 10,
        formation: true,
        dancers: 5 },
      { 
        title: 'feelingMyself',
        group: true,
        groupName: 'Nicki Minaj featuring Beyonce',
        hair: [ 'blonde', 'wavy' ],
        signatureLook: 'sporty bodysuit',
        videoTheme: 'Coachella music festival',
        bestLine: 'Im felling myself',
        fierceness: 9,
        formation: false,
        dancers: 0 
      } 
    ])
  })

  it.skip('should create an array of all songs where the fierceness is greater than 7', () => {
    const fierceSongs = beyonceMethods.getFierceSongs();

    expect(fierceSongs).to.deep.equal([ 
      { 
        title: 'singleLadies',
        group: false,
        groupName: 'none',
        hair: [ 'honey brown', 'half up, half down' ],
        signatureLook: 'black bodysuit and legs for days',
        videoTheme: 'single ladies dance',
        bestLine: 'if you like it then you should\'ve put a ring on it',
        fierceness: 10,
        formation: true,
        dancers: 2 
      }, { 
        title: 'letMeUpgradeYou',
        group: false,
        groupName: 'none',
        hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
        signatureLook: 'flapper dress and bodysuit',
        videoTheme: 'decadence, water, gold beads and pearls',
        bestLine: 'I could do for you what Martin did for the people',
        fierceness: 10,
        formation: true,
        dancers: 5 
      }, { 
        title: 'sorry',
        group: false,
        groupName: 'none',
        hair: [ 'braids', 'bun', 'blonde', 'waves', 'bob' ],
        signatureLook: 'braided crown with gold bikini top',
        videoTheme: 'party bus and Serena Williams in bodysuit',
        bestLine: 'Boi bye',
        fierceness: 10,
        formation: false,
        dancers: 1 
      }, { 
        title: 'feelingMyself',
        group: true,
        groupName: 'Nicki Minaj featuring Beyonce',
        hair: [ 'blonde', 'wavy' ],
        signatureLook: 'sporty bodysuit',
        videoTheme: 'Coachella music festival',
        bestLine: 'Im felling myself',
        fierceness: 9,
        formation: false,
        dancers: 0 
      }
    ])
  })

  it.skip('should find a song where Nicki Minaj is part of the group', () => {
    const nickiMinajSong = beyonceMethods.getNickiMinajSong();

    expect(nickiMinajSong.groupName).to.have.string('Nicki Minaj');
  })

  it.skip('should create an array with all songs that were not with a group', () => {
    const soloSongs = beyonceMethods.getSoloSongs();

    expect(soloSongs).to.deep.equal([ 
      { 
        title: 'singleLadies',
        group: false,
        groupName: 'none',
        hair: [ 'honey brown', 'half up, half down' ],
        signatureLook: 'black bodysuit and legs for days',
        videoTheme: 'single ladies dance',
        bestLine: 'if you like it then you should\'ve put a ring on it',
        fierceness: 10,
        formation: true,
        dancers: 2 
      }, { 
        title: 'letMeUpgradeYou',
        group: false,
        groupName: 'none',
        hair: [ 'beaded bun', 'wet hair', 'honey brown', 'waves' ],
        signatureLook: 'flapper dress and bodysuit',
        videoTheme: 'decadence, water, gold beads and pearls',
        bestLine: 'I could do for you what Martin did for the people',
        fierceness: 10,
        formation: true,
        dancers: 5 
      }, { 
        title: 'sorry',
        group: false,
        groupName: 'none',
        hair: [ 'braids', 'bun', 'blonde', 'waves', 'bob' ],
        signatureLook: 'braided crown with gold bikini top',
        videoTheme: 'party bus and Serena Williams in bodysuit',
        bestLine: 'Boi bye',
        fierceness: 10,
        formation: false,
        dancers: 1 
      } 
    ])
  })

  it.skip('should sum up Beyonces fierceness value for all of her hit songs', () => {
    const totalFierceness = beyonceMethods.sumFierceness();

    expect(totalFierceness).to.equal(53)
  })

  it.skip('should get the average fierceness value for all of her hit songs to two decimal places', () => {
    const avgFierceness = beyonceMethods.getAvgFierceness();

    expect(avgFierceness).to.equal(8.83)
  })

  it.skip('should create a hairstyles object, the value is a hairstyle and the value is a count of how many songs in which that hairstyle appeared', () => { 
    const hairstyles = beyonceMethods.createHairstyleObj();

    expect(hairstyles).to.equal({ 
      'straight': 1,
      'blonde': 4,
      'pink tips': 1,
      'honey brown': 2,
      'half up, half down': 1,
      'beaded bun': 1,
      'wet hair': 1,
      'waves': 2,
      'braids': 1,
      'bun': 1,
      'bob': 1,
      'curly': 1,
      'braid': 1,
      'pony tail': 1,
      'wavy': 1 
    })
  })

})