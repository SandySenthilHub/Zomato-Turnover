import { useEffect, useState } from 'react';
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, CategoryScale, LinearScale, PointElement, LineElement,BarController, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJs.register(
    ArcElement, CategoryScale, LinearScale, PointElement, LineElement,BarController, BarElement, Title, Tooltip, Legend, Filler)

function KanChart() {

    const [dataBar, setDataBar] = useState({
        datasets: [{
            data: [10, 20, 30],
            label: 'Monthly wise Turnover',
            borderWidth: 2
        }],
        labels: ["Red", "Green", "Blue"],


    });

    const [dataLine, setDataLine] = useState({
        datasets: [{
            data: [10, 20, 30],
            label: 'Monthly wise Turnover'
        }]
      


    });


    useEffect(() => {
        const fetchdata = () => {
            fetch('https://zomat0-datas.onrender.com/tamilnadu').then(data => {
                console.log("data:", data)
                const res = data.json();
                return res

            }).then((res) => {
                console.log("res",res)
                const labelBar = [];
                const dataBar = [];

                const labelLine = [];
                const dataLine = [];
                

                for (var i of res.kancheepuram.barChart) {
                    labelBar.push(i.year);
                    dataBar.push(i.turnover);
                }

                for (var j of res.kancheepuram.lineChart) {
                    labelLine.push(j.month);
                    dataLine.push(j.monthTurnover);
                }

              
                setDataBar(
                    {
                        datasets: [{
                            data: dataBar,
                            label: 'Gross order value (in $ Crore)',
                            borderWidth: 1,
                            backgroundColor: [
                                "rgba(255,99,132,0.2)"
                            ],
                            borderColor: [
                                "rgba(255,99,132)"
                            ]
                        },
                        ],
                       labels: labelBar
                    }
                )

                setDataLine(
                    {
                        datasets: [{
                            data: dataLine,
                            label: 'Gross order value (in $ Crore)',
                            borderWidth: 2,
                            borderSizing:'none',
                            backgroundColor: [
                                "rgba(255,99,132,0.2)"
                            ],
                            borderColor: [
                                "rgba(255,99,132)"
                            ]
                        },
                        ],
                       labels: labelLine
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
            legend: { position: "top" },
            title: { display: true, text: " Kancheepuram - Zomato Turnover FY 21-23" }

        }
    }


    return (
        <div>
            <div className='barChart'>
                <Bar width={400} height={400} marginLeft={200}
                    data={dataBar}
                    options={options}
                />
            </div>

            <div className='lineChart'>
            <Line  data={dataLine}
         />
            </div>

            {/* <Doughnut data={data}/> */}

        </div>
    )
}

export default KanChart;