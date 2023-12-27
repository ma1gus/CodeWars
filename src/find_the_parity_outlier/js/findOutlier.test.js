const Test = require('@codewars/test-compat');
const findOutlier = require("./findOutlier");

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(findOutlier([0, 1, 2]), 1)
        Test.assertEquals(findOutlier([1, 2, 3]), 2)
        Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
        Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
        Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
    });
});