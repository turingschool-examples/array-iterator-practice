const { expect } = require('chai');

const fourteenerMethods = require('../lib/fourteenerMethods')


describe('Answers to Fourteeners Problem set', () => {

  it('should return an array of all the mountain range\'s names', () => {
    const allPeaks = fourteenerMethods.getAllPeaks();

    expect(allPeaks).to.deep.equal([ 
      'frontRange',
      'tenMileRange',
      'mosquitoRange',
      'sawatchRange',
      'sangreDeCristoRange',
      'elkRange',
      'sanJuanRange' 
    ]);
  })

  it('should return an array of front range peak names', () => {
    const frontRange14ers = fourteenerMethods.getFrontRange14erNames();

    expect(frontRange14ers).to.deep.equal([ 
      'graysPeak',
      'torreysPeak',
      'longsPeak',
      'mountEvans',
      'mountBierstadt',
      'pikesPeak' 
    ]);
  })

  it.skip('should return the forests from the front range peaks', () => {
    const forests = fourteenerMethods.getFrontRangeForests();

    expect(forests).to.deep.equal([ 
      'Arapaho',
      'Arapaho',
      'Rocky Mountain National Park',
      'Arapaho',
      'Arapaho',
      'Pike' 
    ])
  })

  it.skip('should return the front range peaks which have marmots', () => {
    const frontRangeMarmots = fourteenerMethods.getFrontRangeMarmots();

    expect(frontRangeMarmots).to.deep.equal([ 
      'graysPeak',
      'torreysPeak',
      'longsPeak',
      'mountEvans',
      'mountBierstadt',
      'pikesPeak' 
    ])
  })

  it.skip('should return front range peaks over a specified height', () => {
    const peaksOver14100 = fourteenerMethods.getFRPeaksTallerThan(14100);

    expect(peaksOver14100).to.deep.equal([ 
      'graysPeak', 
      'torreysPeak', 
      'longsPeak', 
      'mountEvans' 
    ])

    const peaksOver14260 = fourteenerMethods.getFRPeaksTallerThan(14260);

    expect(peaksOver14260).to.deep.equal([ 
      'graysPeak', 
      'torreysPeak', 
      'mountEvans' 
    ]);
  })

  it.skip('should return the total number of routes in the front range', () => {
    const routeCount = fourteenerMethods.getFrontRangeRouteCount();

    expect(routeCount).to.equal(20)
  })

  it.skip('should return an array of all of the peaks', () => {
    const allPeaks = fourteenerMethods.getAllRangePeaks();

    expect(allPeaks).to.deep.equal([ 
      'graysPeak',
      'torreysPeak',
      'longsPeak',
      'mountEvans',
      'mountBierstadt',
      'pikesPeak',
      'quandaryPeak',
      'mountLincoln',
      'mountCameron',
      'mountBross',
      'mountDemocrat',
      'mountSherman',
      'mountElbert',
      'mountMassive',
      'mountHarvard',
      'mountColumbia',
      'laPlataPeak',
      'mountOfTheHolyCross',
      'mountHuron',
      'missouriMountain',
      'mountBelford',
      'mountOxford',
      'mountPrinceton',
      'mountYale',
      'mountAntero',
      'mountShavano',
      'tabeguachePeak',
      'blancaPeak',
      'ellingwoodPoint',
      'littleBearPeak',
      'mountLindsey',
      'crestonePeak',
      'crestoneNeedle',
      'humboldtPeak',
      'kitCarsonPeak',
      'challengerPoint',
      'culebraPeak',
      'castlePeak',
      'conundrumPeak',
      'maroonPeak',
      'northMaroonPeak',
      'pyramidPeak',
      'capitolPeak',
      'snowmassMountain',
      'uncompahgrePeak',
      'mountWilson',
      'wilsonPeak',
      'elDientePeak',
      'mountSneffels',
      'mountEolus',
      'northEolus',
      'windomPeak',
      'sunlightPeak',
      'handiesPeak',
      'redcloudPeak',
      'sunshinePeak',
      'wetterhornPeak',
      'sanLuisPeak' 
    ])
  })

  it.skip('should create an array of all of the class 2 routes within the front range', () => {
  })

  it.skip('should return the number of routes in the front range', () => {
  })
  
  it.skip('should return total mileage for the routes on Long\'s Peak', () => {
  })

  it.skip('should return the total mileage for the mosquito range', () => {
  })

  it.skip('should return the total gain for the Sawatch range', () => {
  })

  it.skip('should create an array containing the tallest peak in each range', () => {
  })

  it.skip('should return an object where the key is the peak and the value is an object containing the total mileage and total gain of each peak', () => {
  })

  it.skip('find the peak that has grizzly bears', () => {
  })

  it.skip('should create an array containing all of the peaks with a \'critical\' jerry level', () => {
  })
  
})

