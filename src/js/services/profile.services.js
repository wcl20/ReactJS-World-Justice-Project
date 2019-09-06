
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

const details = [
    {
        factorTitle: "Constraints on Government Powers",
        metaData : { color: "#327644" },
        items: [
            { score: 0.69, title: "Limits by Legislature", average: 0.59, high: 0.72 },
            { score: 0.71, title: "Limits by judiciary", average: 0.59, high: 0.72 },
            { score: 0.62, title: "Independent auditing", average: 0.59, high: 0.72 },
            { score: 0.69, title: "Sanctions for official misconduct", average: 0.59, high: 0.72 },
            { score: 0.61, title: "Non-government checks", average: 0.59, high: 0.72 },
        ],
    },
    {
        factorTitle: "Absence of Corruption",
        metaData : { color: "#709608" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.41, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
            { score: 0.36, title: "title", average: 0.59, high: 0.72 }
        ],
    },
    {
        factorTitle: "Open Government",
        metaData : { color: "#00997F" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.23, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
        ]
    },
    {
        factorTitle: "Fundamental Rights",
        metaData : { color: "#2D72B7" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
        ],
    },
    {
        factorTitle: "Order and Security",
        metaData : { color: "#3A2E72" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
        ],
    },
    {
        factorTitle: "Regulatory Enforcement",
        metaData : { color: "#90278F" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
        ],
    },
    {
        factorTitle: "Civil Justice",
        metaData : { color: "#7F2220" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
        ],
    },
    {
        factorTitle: "Criminal Justice",
        metaData : { color: "#E57839" },
        items: [
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.91, title: "title", average: 0.59, high: 0.72 },
            { score: 0.62, title: "title", average: 0.59, high: 0.72 },
            { score: 0.69, title: "title", average: 0.59, high: 0.72 },
            { score: 0.61, title: "title", average: 0.59, high: 0.72 },
        ],
    },
];
function getSummary() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve(summary) }, 3000);
    })
}

function getDetails() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve(details) }, 3000);
    })
}