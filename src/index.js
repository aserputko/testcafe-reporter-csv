module.exports = () => ({
    noColors:           true,
    report:             '',
    startTime:          null,
    uaList:             null,
    currentFixtureName: null,
    testCount:          0,
    skipped:            0,

    reportTaskStart (startTime, userAgents, testCount) {
        this.startTime = startTime;
        this.uaList    = userAgents.join(' & ');
        this.testCount = testCount;
        this.write('Started:' + startTime);
    },

    reportFixtureStart (name) {
        this.currentFixtureName = name;
    },

    reportTestDone (name, testRunInfo) {
        const errors      = testRunInfo.errs;
        const hasErrors   = !!errors.length;
        const result      = hasErrors ? 'failed!' : 'passed!';
        const resultLine = `${this.currentFixtureName}, ${name}, ${result}`;

        this.newline()
            .write(resultLine);
    },

    reportTaskDone (endTime, passed, ) {
        const footerLine1 = `Tests: ${this.testCount}`;
        const footerLine2 = `Failed: ${this.testCount - passed}`;
        const footerLine3 = `Passed: ${passed}`;
        const footerLine4 = `Browsers: ${this.uaList}`;

        this.newline()
            .write(footerLine1)
            .newline()
            .write(footerLine2)
            .newline()
            .write(footerLine3)
            .newline()
            .write(footerLine4);
    }
});
