import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const rawData = [
    {
        factorTitle: "Constraints on Government Powers",
        metaData : { color: "#327644" },
        items: [
            { index: 1.1, score: 0.69 },
            { index: 1.2, score: 0.71 },
            { index: 1.3, score: 0.62 },
            { index: 1.4, score: 0.69 },
            { index: 1.5, score: 0.61 },
        ],
    },
    {
        factorTitle: "Absence of Corruption",
        metaData : { color: "#709608" },
        items: [
            { index: 2.1, score: 0.69 },
            { index: 2.2, score: 0.41 },
            { index: 2.3, score: 0.62 },
            { index: 2.4, score: 0.69 },
            { index: 2.5, score: 0.61 },
            { index: 2.6, score: 0.91 },
            { index: 2.7, score: 0.36 }
        ],
    },
    {
        factorTitle: "Open Government",
        metaData : { color: "#00997F" },
        items: [
            { index: 3.1, score: 0.69 },
            { index: 3.2, score: 0.23 },
            { index: 3.3, score: 0.62 },
            { index: 3.4, score: 0.69 },
            { index: 3.5, score: 0.61 },
            { index: 3.6, score: 0.91 },
        ]
    },
    {
        factorTitle: "Fundamental Rights",
        metaData : { color: "#2D72B7" },
        items: [
            { index: 4.1, score: 0.69 },
            { index: 4.2, score: 0.91 },
            { index: 4.3, score: 0.62 },
            { index: 4.4, score: 0.69 },
            { index: 4.5, score: 0.61 },
        ],
    },
    {
        factorTitle: "Order and Security",
        metaData : { color: "#3A2E72" },
        items: [
            { index: 5.1, score: 0.69 },
            { index: 5.2, score: 0.91 },
            { index: 5.3, score: 0.62 },
            { index: 5.4, score: 0.69 },
            { index: 5.5, score: 0.61 },
        ],
    },
    {
        factorTitle: "Regulatory Enforcement",
        metaData : { color: "#90278F" },
        items: [
            { index: 6.1, score: 0.69 },
            { index: 6.2, score: 0.91 },
            { index: 6.3, score: 0.62 },
            { index: 6.4, score: 0.69 },
            { index: 6.5, score: 0.61 },
        ],
    },
    {
        factorTitle: "Civil Justice",
        metaData : { color: "#7F2220" },
        items: [
            { index: 7.1, score: 0.69 },
            { index: 7.2, score: 0.91 },
            { index: 7.3, score: 0.62 },
            { index: 7.4, score: 0.69 },
            { index: 7.5, score: 0.61 },
        ],
    },
    {
        factorTitle: "Criminal Justice",
        metaData : { color: "#E57839" },
        items: [
            { index: 8.1, score: 0.69 },
            { index: 8.2, score: 0.91 },
            { index: 8.3, score: 0.62 },
            { index: 8.4, score: 0.69 },
            { index: 8.5, score: 0.61 },
        ],
    },
];
class RadialGraph extends Component {

    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.RadarChart);
        chart.radius = am4core.percent(60);

        // category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "item";
        categoryAxis.tooltip.defaultState.properties.opacity = 0; // Hide category tooltip
        
        let categoryAxisRenderer = categoryAxis.renderer;
        categoryAxisRenderer.fontSize = 11;
        categoryAxisRenderer.minGridDistance = 10;
        categoryAxisRenderer.grid.template.strokeOpacity = 0.1;

        let categoryAxisLabel = categoryAxisRenderer.labels.template;
        categoryAxisLabel.radius = 28;

        // value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.extraMax = 0.2;
        valueAxis.disabled = true; // Hide value axis

        // series
        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = "score";
        series.dataFields.categoryX = "item";
        series.tooltipText = "{valueY.value}";
        series.stroke = am4core.color("#400099");
        series.strokeWidth = 3;
        series.fill = am4core.color("#400099");
        series.fillOpacity = 0.2;

        // cursor
        let cursor = new am4charts.RadarCursor();
        cursor.lineY.disabled = true;
        cursor.lineX.disabled = true;
        chart.cursor = cursor;

        chart.data = generateRadarData(rawData);
        this.chart = chart;


        function generateRadarData(data) {
            let radarData = [];

            // Iterate all factors ...
            data.forEach(factor => {

                // Add all items in all factors to radar data
                let factorItems = factor.items;
                factorItems.forEach(item => {
                    radarData.push({ item: item.index, score: item.score });
                });

                // Create axisRange for each factor
                createRange(factor.factorTitle, factorItems, factor.metaData)
            });

            return radarData;
        }

        function createRange(factorTitle, factorItems, metaData) {

            // axis range
            let axisRange = categoryAxis.axisRanges.create();
            axisRange.text = factorTitle;
            axisRange.category = factorItems[0].index;
            axisRange.endCategory = factorItems[factorItems.length - 1].index;
            
            // axis fill
            let axisFill = axisRange.axisFill;
            axisFill.interactionsEnabled = true;
            axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;
            axisFill.togglable = true;
            axisFill.radius = -20; 
            axisFill.innerRadius = -0.001;
            axisFill.fill = am4core.color(metaData.color);
            axisFill.fillOpacity = 1;
            axisFill.events.on("hit", function (event) {
                let dataItem = event.target.dataItem;
                if (!event.target.isActive) {
                    categoryAxis.zoom({ start: 0, end: 1 });
                }
                else {
                    categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
                }
            })
        
            // axis fill - on hover
            let hoverState = axisFill.states.create("hover");
            hoverState.properties.innerRadius = -10;
            hoverState.properties.radius = -25;

            // axis label
            let axisLabel = axisRange.label;
            axisLabel.fill = am4core.color(metaData.color);
            axisLabel.location = 0.5;
            axisLabel.radius = 50;
            axisLabel.maxWidth = 90;
            axisLabel.wrap = true;
            axisLabel.textAlign = "middle";
        }
    }
    
    componentWillUnmount() { 
        if (this.chart) { this.chart.dispose(); }
    }
    
    render() {
        return <div id="chartdiv" style={{ width: "100%", height: "550px" }}></div>;
    }
}

export default RadialGraph;





