
export const profileServices = {
    getSummary,
    getDetails
}

const summary = {
    overview: {
        score: 0.64,
        regionalRank: "21/30",
        incomeRank: "19/30",
        globalRank: "106/126"
    },
    change: {
        score: 0,
        rank: "same"      
    },
    details: [
        {
            title: "Constraints on Government Powers",
            titleColor: "#327644",
            trend: "same",
            score: 0.54,
            regionalRank: "11/30",
            incomeRank: "8/30",
            globalRank: "64/126"
        },
        {
            title: "Absence of Corruption",
            titleColor: "#709608",
            trend: "same",
            score: 0.34,
            regionalRank: "20/30",
            incomeRank: "20/30",
            globalRank: "105/126"
        },
        {
            title: "Open Government",
            titleColor: "#00997F",
            trend: "down",
            score: 0.46,
            regionalRank: "19/30",
            incomeRank: "15/30",
            globalRank: "99/126"
        },
        {
            title: "Fundamental Rights",
            titleColor: "#2D72B7",
            trend: "up",
            score: 0.43,
            regionalRank: "14/30",
            incomeRank: "18/30",
            globalRank: "91/126"
        },
        {
            title: "Order and Security",
            titleColor: "#3A2E72",
            trend: "same",
            score: 0.35,
            regionalRank: "30/30",
            incomeRank: "30/30",
            globalRank: "125/126"
        },
        {
            title: "Regulatory Enforcement",
            titleColor: "#90278F",
            trend: "same",
            score: 0.43,
            regionalRank: "18/30",
            incomeRank: "18/30",
            globalRank: "100/126"
        },
        {
            title: "Civil Justice",
            titleColor: "#7F2220",
            trend: "same",
            score: 0.48,
            regionalRank: "10/30",
            incomeRank: "11/30",
            globalRank: "72/126"
        },
        {
            title: "Criminal Justice",
            titleColor: "#E57839",
            trend: "down",
            score: 0.43,
            regionalRank: "12/30",
            incomeRank: "8/30",
            globalRank: "72/126"
        },
    ]
}

function generateRandomDetails() {
    const factors = [
        "Constraints on Government Powers",
        "Absence of Corruption",
        "Open Government",
        "Fundamental Rights",
        "Order and Security",
        "Regulatory Enforcement",
        "Civil Justice",
        "Criminal Justice",
    ];
    const colors = [ "#327644", "#709608", "#00997F", "#2D72B7", "#3A2E72", "#90278F", "#7F2220", "#E57839"];
    const data = [];
    factors.forEach((factor, i) => {
        const items = [];
        for(let i = 0; i < Math.round(Math.random() * 2) + 5; i++) {
            items.push({ 
                title: "title", 
                score: Math.random(), 
                average: Math.random(), 
                high: Math.random() 
            });
        }
        data.push({
            factorTitle: factor,
            metaData: { color: colors[i] },
            items: items
        });
    })
    return data;
}

function getSummary() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve(summary) }, 3000);
    })
}

function getDetails() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve(generateRandomDetails()) }, 3000);
    })
}