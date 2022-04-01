const _win = window
export const calculatePerformance = () => {
    const _perf = _win.performance
    const start = _perf.now()
    const timing = _perf.timing
    return {
        runtime: () => Math.floor(_perf.now() - start),
        perftime: () => Math.floor(timing.loadEventEnd - timing.navigationStart)
    }
}

