(function(){
  'use strict';
  describe('Mean-Mode', function() {
    it('should return false for []', function() {
      var meanMode = new MeanMode([]);
      expect(meanMode.isEqual()).toBe(false);
    });
    it('should return the mode in [3,4,5,6,7,6]', function() {
      var meanMode = new MeanMode([3,4,5,6,7,6]);
      expect(meanMode.mode()).toBe(6);
    });
    it('should return the mean in [3,4,5,6,2,4,6]', function() {
      var meanMode = new MeanMode([3,4,5,6,2,4,6,2]);
      expect(meanMode.mean()).toBe(4);
    });
    it('should return true in [4,4,4,6,2]', function() {
      var meanMode = new MeanMode([4,4,4,6,2]);
      expect(meanMode.isEqual()).toBe(true);
      expect(meanMode.mean()).toBe(4);
      expect(meanMode.mode()).toBe(4);
    });
    it('should return false in [1,3,4,6]', function() {
      var meanMode = new MeanMode([1,3,4,6]);
      expect(meanMode.isEqual()).toBe(false);
    });
  });
})();