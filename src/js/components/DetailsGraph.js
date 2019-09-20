import React, { Component } from "react";
import { connect } from "react-redux";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

class DetailsGraph extends Component {

    constructor(props) {
        super(props);

        // amCharts Functions
        this.generateRadarData = this.generateRadarData.bind(this);
        this.createRange = this.createRange.bind(this);
    }

    componentDidMount() {
        let chart = am4core.create("detailsChartDiv", am4charts.RadarChart);
        chart.radius = am4core.percent(60);

        // category axis
        this.categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        this.categoryAxis.dataFields.category = "index";
        this.categoryAxis.tooltip.defaultState.properties.opacity = 0; // Hide category tooltip
        
        let categoryAxisRenderer = this.categoryAxis.renderer;
        categoryAxisRenderer.fontSize = 11;
        categoryAxisRenderer.minGridDistance = 10;
        categoryAxisRenderer.grid.template.strokeOpacity = 0.1;

        let categoryAxisLabel = categoryAxisRenderer.labels.template;
        categoryAxisLabel.radius = 28;
        categoryAxisLabel.location = 0.5;

        // value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.extraMax = 0.05;
        valueAxis.disabled = true; // Hide value axis

        // series
        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.categoryX = "index";
        series.dataFields.valueY = "score";
        series.dataFields.title = "title";
        series.tooltipText = "{title}: {valueY.value}";
        series.dataItems.template.locations.categoryX = 0.5;
        series.stroke = am4core.color("#400099");
        series.strokeWidth = 3;
        series.fill = am4core.color("#400099");
        series.fillOpacity = 0.2;

        // cursor
        let cursor = new am4charts.RadarCursor();
        cursor.lineY.disabled = true;
        cursor.lineX.disabled = true;
        chart.cursor = cursor;

        // Loading indicator
        chart.preloader.disabled = true; // Remove default indicator
        let indicator = chart.tooltipContainer.createChild(am4core.Container);
        indicator.background.fill = am4core.color("#FFF");
        indicator.background.fillOpacity = 0.8;
        indicator.width = am4core.percent(100);
        indicator.height = am4core.percent(100);

        let indicatorLabel = indicator.createChild(am4core.Label);
        indicatorLabel.text = "Loading ...";
        indicatorLabel.align = "center";
        indicatorLabel.valign = "middle";
        indicatorLabel.fontSize = 20;

        this.indicator = indicator;

        chart.data = this.generateRadarData(this.props.data);
        this.chart = chart;
    }

    componentDidUpdate(oldProps) {
        if(oldProps.data !== this.props.data) {
            this.chart.data = this.generateRadarData(this.props.data);
        }
        if(oldProps.isLoading !== this.props.isLoading) {
            this.props.isLoading ? this.indicator.show() : this.indicator.hide();
        }
    }
    
    componentWillUnmount() { 
        if (this.chart) { this.chart.dispose(); }
    }

    /**********************
     * amCharts Functions
     **********************/
    generateRadarData(data) {
        let radarData = [];
        // Iterate all factors ...
        data.forEach((factor, factorIndex) => {
            // Add all items in all factors to radar data
            let factorItems = factor.items;
            factorItems.forEach((item, itemIndex) => {
                item.index = `${factorIndex + 1}.${itemIndex + 1}`;
                radarData.push(item);
            });
            // Create axisRange for each factor
            this.createRange(factor.factorTitle, factorItems, factor.metaData)
        });
        return radarData;
    }

    createRange(factorTitle, factorItems, metaData) {
        // axis range
        let axisRange = this.categoryAxis.axisRanges.create();
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
        axisFill.events.on("hit", event => {
            let dataItem = event.target.dataItem;
            if (!event.target.isActive) {
                this.categoryAxis.zoom({ start: 0, end: 1 });
            }
            else {
                this.categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
            }
        })
    
        // axis fill - on hover
        let hoverState = axisFill.states.create("hover");
        hoverState.properties.innerRadius = -5;
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
    
    render() {
        return (
            <div id="detailsChartDiv" style={{ width: "100%", height: "550px" }}></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.profileDetails.isLoading,
        error: state.profileDetails.error,
        data: state.profileDetails.data
    }
}

export default connect(mapStateToProps)(DetailsGraph);





