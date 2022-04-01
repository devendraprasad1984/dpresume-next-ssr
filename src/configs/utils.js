const _win = window

export const calculatePerformance = () => {
    let start = _win.performance.now()
    return () => _win.performance.now() - start
}

