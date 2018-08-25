const fourteeners = require('./fourteeners');

const fourteenerMethods = {
  getAllPeaks() {
    const allPeaksKeys = Object.keys(fourteeners);

    return allPeaksKeys;
  },

  getFrontRange14erNames() {
    const { peaks } = fourteeners.frontRange;
    const peakKeys = Object.keys(peaks);

    return peakKeys;
  },

  getAllRangePeaks() {
    const rangeKeys = Object.keys(fourteeners)

    const allPeaks = rangeKeys.reduce( (allPeaks, range) => {
      const rangePeaks = fourteeners[ range ].peaks;
      const peakKeys = Object.keys(rangePeaks);

      // ... js spread operator 
      allPeaks.push( ...peakKeys )
      
      return allPeaks;
    }, [])

    return allPeaks;
  }
}

module.exports = fourteenerMethods;