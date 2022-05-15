import { useD3 } from '../hooks/useD3';
import * as d3 from 'd3';
import styles from "../styles/BarChart.module.scss";
import { useState } from 'react';

function BarChart({ data }) {


    const [barData, setBarData] = useState(data);

    const changeData = () => {

        setBarData(data => data.map(({sales, ...rest}) => {
            return {...rest, sales: Math.floor(10000000 * Math.random() + 1000 * Math.random())}
        }));

    }


    const ref = useD3((svg) => {

        const height = 420;
        const width = 1000;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.year))
            .rangeRound([margin.left, width - margin.right])
            .padding(0.1);

        const y1 = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.sales)])
            .rangeRound([height - margin.bottom, margin.top]);


        const xAxis = (g) =>
            g.attr("transform", `translate(0, ${height - margin.bottom})`).call(
                d3
                    .axisBottom(x)
                    .tickValues(
                        d3
                            .ticks(...d3.extent(x.domain()), width / 40)
                            .filter((v) => x(v) !== undefined)
                    )
                    .tickSizeOuter(0)
            );

        const y1Axis = (g) =>
            g
                .attr("transform", `translate(${margin.left} ,0)`)
                .style("color", "black")
                .call(d3.axisLeft(y1).ticks(null, "s"))
                .call((g) => g.select(".domain").remove())
                .call((g) =>
                    g
                        .append("text")
                        .attr("x", -margin.left)
                        .attr("y", 10)
                        .attr("fill", "currentColor")
                        .attr("text-anchor", "start")
                        .text(data.y1)
                );

        svg.select(".x-axis").call(xAxis);
        svg.select(".y-axis").call(y1Axis);

        svg
            .select(".plot-area")
            .attr("fill", "rgb(233, 144, 71)")
            .selectAll(".bar")
            .data(barData)
            .join("rect")
            .attr("class", "bar")
            .attr("x", (d) => x(d.year))
            .attr("width", x.bandwidth())
            .attr("y", (d) => y1(d.sales))
            .attr("height", (d) => y1(0) - y1(d.sales));



    }, [barData]);

    return (

        <div className={styles.chart}>

            <svg
                ref={ref}
                style={{
                    height: 450,
                    width: "100%",
                    marginRight: "0px",
                    marginLeft: "0px",
                }}
                >
                <g className="plot-area" />
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>

            <button onClick={changeData} id={styles.change__data}>Change Data</button>
        </div>
    )
}

export default BarChart