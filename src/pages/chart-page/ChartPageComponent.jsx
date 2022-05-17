import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import "./chartPageComponent.css";

function ChartPageComponent() {
  const [data] = useState([200, 250, 60, 192, 150, 235, 167]);
  const svgRef = useRef();

  useEffect(() => {
    //1.settig up the svg container
    const width = 400;
    const height = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .style("margin-top", "75px");
    //2.setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, width])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    //3.setting the axes
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
    svg.append("g").call(yAxis);

    //4.setting the svg data
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (value) => height - yScale(value));
  }, [data]);

  return (
    <div className="chart-page">
      <h1>This Bar Chart is created using D3.js using some random data</h1>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default ChartPageComponent;
