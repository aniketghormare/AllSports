import React from 'react';
import DataTable from "react-data-table-component";
import img from "../images/tableimg.jpg";

const Table = () => {
    let columns = [
        {
            name: "Image",
            cell: row => <img src={row.image} alt={row.name} style={{width: '50px', height: '50px'}} />
        },
        {
            name: "Time",
            selector: row => row.time
        },
        {
            name: "Sports",
            selector: row => row.sport
        },
        {
            name: "Events",
            selector: row => row.event
        },
        {
            name: "Round/Pool",
            selector: row => row.round
        },
        {
            name: "Venue",
            selector: row => row.venue
        }
    ];

    let data = [
        {
            id: 1,
            time: "08:30:00",
            sport: "Golf",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {
            id: 2,
            time: "09:15:00",
            sport: "Football",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {
            id: 3,
            time: "10:30:00",
            sport: "Judo",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {   id:4,
            time: "07:30:00",
            sport: "Golf",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {   id:5,
            time: "07:30:00",
            sport: "Golf",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {   id:6,
            time: "07:30:00",
            sport: "Golf",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {   id:7,
            time: "07:30:00",
            sport: "Golf",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        },
        {   id:8,
            time: "07:30:00",
            sport: "Golf",
            event: "Men's Individual",
            round:"Round 3",
            venue:"Indira Gandhi International Sports Stadium",
            image: img // Changed from img to image
        }
    ];
    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#81378F', // Background color for table heading
                 color:"#ffff",
                 borderRadius:"8px"
            }
        },
        rows: {
            style: {
                marginBottom: '5px', // Add margin bottom to create gap between rows
            }
        }
    };

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                noHeader
                customStyles={customStyles}
                
            />
        </div>
    );
}

export default Table;
