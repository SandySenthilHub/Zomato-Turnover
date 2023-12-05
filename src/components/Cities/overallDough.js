import { useEffect, useState } from 'react';
import {  Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJs.register(
    ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

function OverallDough() {

    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30],
            label: 'State wise Turnover',
            borderWidth: 2
        }],
        labels: ["Red", "Green", "Blue"],


    });


    useEffect(() => {
        const fetchdata = () => {
            fetch(' https://zomat0-datas.onrender.com/states').then(data => {
                console.log("data:", data)
                const res = data.json();
                return res

            }).then((res) => {
                console.log("res", res)
                const label = [];
                const data = [];


                for (var i of res.overall) {
                    label.push(i.sName);
                    data.push(i.sOverall);
                }


                setData(
                    {
                        datasets: [{
                            data: data,
                            label: 'Gross order value (in $ Crore)',
                            borderWidth: 5,
                            boxSizing:"none",
                            borderRadius: 10,
                            hoverBorderWidth: 0,
                            backgroundColor: [
                                "red", "blue", "green", "violet", "brown"
                            ],
                         
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
            title: { display: true, text: "State wise Turnover FY 21-23" }

        }
    }
    return (
        <div style={{display:"flex"}}>

            <div className="doughnutChartState">
                <Doughnut data={data}
                    options={options} />
            </div>


        </div>
    )
}

export default OverallDough;