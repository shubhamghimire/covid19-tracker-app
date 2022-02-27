export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        // If a is greater than b then place a before b otherwise do opposite
        if (a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;

    // One liner code using ternary
    // return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1));
}