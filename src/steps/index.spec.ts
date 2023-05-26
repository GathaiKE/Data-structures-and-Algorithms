import { staircase } from "./index";


describe("staircase", () => {
    it("Should log a staircase of height 0", () => {
        const spy = jest.spyOn(console, "log")
        staircase(0)
        expect(spy).not.toHaveBeenCalled()
        spy.mockRestore()
    })
    it("Should log a staircase of height 3", () => {
        const spy = jest.spyOn(console, "log")
        staircase(3);
        expect(spy).toHaveBeenNthCalledWith(1, "#  ")
        expect(spy).toHaveBeenNthCalledWith(2, "## ")
        expect(spy).toHaveBeenNthCalledWith(3, "###")
        expect(spy).toHaveBeenCalledTimes(3)
        spy.mockRestore()
    });

    it("Should log a staircase of height 5", () => {
        const spy = jest.spyOn(console, "log")
        staircase(5);
        expect(spy).toHaveBeenNthCalledWith(1, "#    ")
        expect(spy).toHaveBeenNthCalledWith(2, "##   ")
        expect(spy).toHaveBeenNthCalledWith(3, "###  ")
        expect(spy).toHaveBeenNthCalledWith(4, "#### ")
        expect(spy).toHaveBeenNthCalledWith(5, "#####")
        expect(spy).toHaveBeenCalledTimes(5)
        spy.mockRestore()
    })
})
