import { useEffect, useState } from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement,BarController } from 'chart.js';

import OverallDough from '../../overallDough';
import ChikkChart from './chikkChart';

ChartJs.register(
    ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement,BarController)

function ChikkAll() {

    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30],
            label: 'Monthly wise Turnover',
            borderWidth: 2
        }],
        labels: ["Red", "Green", "Blue"],


    });


    useEffect(() => {
        const fetchdata = () => {
            fetch('https://zomat0-datas.onrender.com/bengaluru').then(data => {
                console.log("data:", data)
                const res = data.json();
                return res

            }).then((res) => {
                console.log("res", res)
                const label = [];
                const data = [];


                for (var i of res.overall) {
                    label.push(i.cName);
                    data.push(i.cOverall);
                }


                setData(
                    {
                        datasets: [{
                            data: data,
                            label: 'Gross order value (in $ Crore)',
                            borderWidth: 5,
                            boxSizing: "none",
                            borderRadius: 10,
                            hoverBorderWidth: 0,
                            backgroundColor: [
                                "red", "blue", "green", "violet", "brown"
                            ],
                            // borderColor: [
                            //     "rgba(255,99,132)"
                            // ]
                        },

                        ],

                        labels: label


                    }
                )
            })

                .catch(err => console.log(err))
        }
        fetchdata();

    }, [])

    var options = {

        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                tricks: {
                    beginAtZero: true

                }
            }]
        },
        plugins: {
            legend: { position: "bottom" },
            title: { display: true, text: "City wise Turnover FY 21-23" }

        }
    }
    return (
        <div style={{ display: "flex" }}>
            <div >
                <div >
                    <ChikkChart />
                </div>
            </div>
            <div>
                <div className="doughnutChartCity">
                    <Doughnut data={data}
                        options={options} />
                </div>
                <div >
                    <OverallDough />
                </div>
            </div>
        </div>
    )
}

export default ChikkAll;