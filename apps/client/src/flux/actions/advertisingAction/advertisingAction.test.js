const advertisingAction = require("./advertisingAction")
// @ponicode
describe("advertisingAction.getUserAdsService", () => {
    test("0", () => {
        let result = advertisingAction.getUserAdsService("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = advertisingAction.getUserAdsService("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = advertisingAction.getUserAdsService(987650)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = advertisingAction.getUserAdsService(12345)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = advertisingAction.getUserAdsService(56784)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = advertisingAction.getUserAdsService(Infinity)
        expect(result).toMatchSnapshot()
    })
})
