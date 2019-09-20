import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

class WorldGraph extends Component {

    componentDidMount() {
        let chart = am4core.create("worldChartDiv", am4maps.MapChart);
        chart.geodata = am4geodata_worldLow;
        chart.padding(0, 50, 0, 50);
        chart.projection = new am4maps.projections.Miller();

        // polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.exclude = ["AQ"]; // Exclude Antartica

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#400099").lighten(0.5);

        let hoverState = polygonTemplate.states.create("hover");
        hoverState.properties.fill = am4core.color("#400099");

        polygonTemplate.events.on("hit", event => {
            let target = event.target.dataItem.dataContext;
            this.props.history.push({
                pathname: `/profile/${target.name}`,
                state: { countryId: target.id }
            });
        });

        // disable pan
        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;

        // disable zoom
        chart.maxZoomLevel = 1;
        this.chart = chart;
    }
    
    componentWillUnmount() { 
        if (this.chart) { this.chart.dispose(); }
    }
    
    render() {
        return  <div id="worldChartDiv" style={{ width: "100vw", height: "100vh" }}></div>;
    }
}



export default withRouter(WorldGraph);





