import React from 'react';
import DataTable from "react-data-table-component";
import gold1 from "../images/gold1.png";
import silver from "../images/silver.png";
import bronze from "../images/bronze.png";

const MedalTallyTable = () => {
    const columns = [
        {
            selector: row => <p>{row.id}</p>,
            minWidth: '20px'
        },
        {
            selector: row => row.board,
            
        },
        {
            name: <img src={gold1} alt="Gold" style={{ width: '30px', height: '40px',marginTop:"-10px",marginLeft:"8px" }} />,
            selector: row => row.gold,
            
        },
        {
            name: <img src={silver} alt="Silver"style={{ width: '30px', height: '40px',marginTop:"-10px",marginLeft:"8px" }} />,
            selector: row => row.silver
        },
        {
            name: <img src={bronze} alt="Bronze"style={{ width: '30px', height: '40px',marginTop:"-10px",marginLeft:"8px" }}  />,
            selector: row => row.bronze,
            maxWidth: '20px'
        },
        {
            selector: row => row.total,
            maxWidth: '20px'
        }
    ];

    const data = [
        {
            id: 1,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
        {
            id: 2,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
        {
            id: 3,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
        {
            id: 4,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
        {
            id: 5,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
        {
            id: 6,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
        {
            id: 7,
            board: "Maharashtra",
            gold: 80,
            silver: 69,
            bronze: 79,
            total: 228,
            image: gold1
        },
       
    ];

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#f2f2f2',
               
                color: "#ffffff",
                borderRadius: "8px",
                fontSize: '14px',
              
                // padding: '8px',
                marginLeft:"-20px"
            }
        },
        rows: {
            style: {
                // gap: "5px",
                // backgroundColor: {{rows.id%2==0? #f2f2f2':"#ffff"}}',
                fontSize: '12px',
                padding: '4px',
                fontWeight:"560"
            }
        },
        cell: {
            style: {
                
                paddingLeft: '0px', // Adjust padding for specific column
                paddingRight: '0px', // Adjust padding for specific column
            }
        }
    };

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <DataTable
                columns={columns}
                data={data}
                noHeader
                customStyles={customStyles}
                dense
                noData
            />
        </div>
    );
}

export default MedalTallyTable;
