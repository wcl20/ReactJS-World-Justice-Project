import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faSortUp, faSortDown, faChild } from '@fortawesome/free-solid-svg-icons';

import Spinner from "../components/presentational/Spinner";

function SummaryTable(props) {
    const { isLoading, overviewData, changeData, detailsData } = props;

    return (
        <div className="summary-table">
            <Table borderless className="overview-table">
                <thead>
                    <tr>
                        <th>Overall Score</th>
                        <th>Regional Rank</th>
                        <th>Income Rank</th>
                        <th>Global Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <tr><td colSpan={4}>Loading ...</td></tr> :
                        <tr>
                            <td className={getRankClass(overviewData.score)}>{overviewData.score}</td>
                            <td className={getRankClass(overviewData.regionalRank)}>{overviewData.regionalRank}</td>
                            <td className={getRankClass(overviewData.incomeRank)}>{overviewData.incomeRank}</td>
                            <td className={getRankClass(overviewData.globalRank)}>{overviewData.globalRank}</td>
                        </tr>
                    }
                </tbody>
            </Table>
            <Table borderless className="change-table">
                <thead>
                    <tr>
                        <th>Score Change</th>
                        <th>Rank Change</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <tr><td colSpan={2}>Loading ...</td></tr> :
                        <tr>
                            <td>{changeData.score.toFixed(2)}</td>
                            <td>{getTrendSymbol(changeData.rank)}</td>
                        </tr>
                    } 
                </tbody>
            </Table>
            <Table borderless className="details-table">
                <thead>
                    <tr>
                        <th className="factor-icon-cell" ></th>
                        <th className="factor-title-cell" ></th>
                        <th>Factor Trend</th>
                        <th>Factor Score</th>
                        <th>Regional Rank</th>
                        <th>Income Rank</th>
                        <th>Global Rank</th>
                    </tr>
                </thead>
                    <tbody>
                        {   
                            !isLoading &&
                            detailsData.map((item, index) => 
                                <tr key={index}>
                                    <td className="factor-icon-cell" style={{color: item.titleColor}}><FontAwesomeIcon icon={faChild} /></td>
                                    <td className="factor-title-cell" style={{color: item.titleColor}}>{item.title}</td>
                                    <td>{getTrendSymbol(item.trend)}</td>
                                    <td>{item.score}</td>
                                    <td className={getRankClass(item.regionalRank)}>{item.regionalRank}</td>
                                    <td className={getRankClass(item.incomeRank)}>{item.incomeRank}</td>
                                    <td className={getRankClass(item.globalRank)}>{item.globalRank}</td>
                                </tr>
                            )
                        }
                    </tbody>
            </Table>
            {isLoading && <Spinner />}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isLoading: state.profileSummary.isLoading,
        error: state.profileSummary.error,
        overviewData: state.profileSummary.data.overview,
        changeData: state.profileSummary.data.change,
        detailsData: state.profileSummary.data.details
    }
}

export default connect(mapStateToProps)(SummaryTable);

/*
 * Gets CSS class for a ranking.
 *
 * Returns CSS classname "rank-high", "rank-medium" or "rank-low" 
 * depending on the given ranking:
 *      0%  to 33%:     Rank High
 *      33% to 66%:     Rank Medium
 *      66% to 100%:    Rank Low
 * 
 * @param   {String}    ranking as a fraction string or a float i.e. 4/126 or 0.42
 * @return  {String}    CSS className
 */
function getRankClass(rank) {
    let score;
    // If rank is a number between 0 to 1 ...
    if(Number(rank) && rank <= 1 && rank > 0) {
        score = rank;
    } else if(/^[0-9]+\/[0-9]+$/.test(rank)) {
        // If rank is a fraction string ...
        let fraction = rank.split("/");
        score = parseInt(fraction[0]) / parseInt(fraction[1]);
    } else {
        // Otherwise, rank is unknown
        console.log("Summarytable-GetRankClass(): Unknown input", rank);
        return "";
    }

    return score < 0.33 ? "rank-high" : score < 0.66 ? "rank-medium" : "rank-low";
}

/*
 * Gets symbol for a trend.
 *
 * Returns FontAwesome Icon depending on trend.
 * 
 * @param   {String}    The trend either up, down or same
 * @return  {Object}    FontAwesome icon
 */
function getTrendSymbol(trend) {
    switch(trend) {
        case "up":
            return <FontAwesomeIcon icon={faSortUp} size="2x"/>
        case "down":
            return <FontAwesomeIcon icon={faSortDown} size="2x"/>
        default:
            return <FontAwesomeIcon icon={faMinus} />
    }
}