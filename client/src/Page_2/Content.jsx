import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [sensorData, setSensorData] = useState([]);
    const [irValue, setIrValue] = useState('No sensor data available');
    const [irValue2, setIrValue2] = useState('No sensor data available');
    const [irValue3, setIrValue3] = useState('No sensor data available');
    const [irValue4, setIrValue4] = useState('No sensor data available');

    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:2001/api/auth/AvailSpots');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const fetchSensorData = async () => {
        try {
            const response = await axios.get('http://localhost:2001/api/auth/sensor');
            const data = response.data;
            setSensorData(data);
            
            // Initialize variables to hold sensor values
            let irValue = 'No sensor data available';
            let irValue2 = 'No sensor data available';
            let irValue3 = 'No sensor data available';
            let irValue4 = 'No sensor data available';
    
            // Check if there is data available
            if (data.length > 0) {
                // Loop through the sensor data to find the latest values for each sensor
                for (let i = data.length - 1; i >= 0; i--) {
                    const sensor = data[i];
                    if (sensor.ir_value !== undefined) {
                        irValue = sensor.ir_value;
                        break; // Found the latest value for ir_value1
                    }
                }
                for (let i = data.length - 1; i >= 0; i--) {
                    const sensor = data[i];
                    if (sensor.ir_value_2 !== undefined) {
                        irValue2 = sensor.ir_value_2;
                        break; // Found the latest value for ir_value2
                    }
                }
                for (let i = data.length - 1; i >= 0; i--) {
                    const sensor = data[i];
                    if (sensor.ir_value_3 !== undefined) {
                        irValue3 = sensor.ir_value_3;
                        break; // Found the latest value for ir_value3
                    }
                }
                for (let i = data.length - 1; i >= 0; i--) {
                    const sensor = data[i];
                    if (sensor.ir_value_4 !== undefined) {
                        irValue4 = sensor.ir_value_4;
                        break; // Found the latest value for ir_value4
                    }
                }
            }
    
            // Set the state variables for each sensor value
            setIrValue(irValue);
            setIrValue2(irValue2);
            setIrValue3(irValue3);
            setIrValue4(irValue4);
        } catch (error) {
            console.error("Error fetching sensor data:", error);
        }
        fetchSensorData();
    };
    

    useEffect(() => {
        fetchUserData();
        fetchSensorData();
    }, []);

    const deleteuser = async (id) => {
        try {
            const response = await fetch(`http://localhost:2001/api/auth/AvailSpots/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                fetchUserData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getStatus = (slotStatus) => {
        let statusText = '';
        let statusClass = '';

        if (slotStatus === 1) {
            statusText = "Available";
            statusClass = "available";
        } else if (slotStatus === 0) {
            statusText = "Occupied";
            statusClass = "occupied";
        } else if(slotStatus === ''){
            statusText = "Available";
            statusClass = "available";
        }

        return <span className={statusClass}>{statusText}</span>;
    };

    // Hardcoded slot statuses for each slot
    const slotStatus = {
    
        A5: 1,
        A6: 0,
        A7: 1,
        A8: "",
    };

    return (
        <>
            <div className="Con">
                <h2 id='Heading'>Parking Management System</h2>
            </div>

            <section className='admin-user-section'>
                <div className='heading'>
                    <h1>Reservation list</h1>
                </div>
                <div className='container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Car number</th>
                                <th>Parking slot</th>
                                <th>Time</th>
                                <th>Phone number</th>
                                <th>Vehicle type</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => (
                                <tr key={index}>
                                    <td>{curUser.Name}</td>
                                    <td>{curUser.CarNo}</td>
                                    <td>{curUser.ParSlot}</td>
                                    <td>{curUser.Time}</td>
                                    <td>{curUser.PhoneNo}</td>
                                    <td>{curUser.VehicleType}</td>
                                    <td><button onClick={() => deleteuser(curUser._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className='Avail-section'>
                <div className='heading'>
                    <h1>Available Slots</h1>
                </div>
                <div className='container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Parking slot</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A1</td>
                                <td>{getStatus(irValue)}</td>
                            </tr>
                            <tr>
                                <td>A2</td>
                                <td>{getStatus(irValue2)}</td>
                            </tr>
                            <tr>
                                <td>A3</td>
                                <td>{getStatus(irValue3)}</td>
                            </tr>
                            <tr>
                                <td>A4</td>
                                <td>{getStatus(irValue4)}</td>
                            </tr>
                            <tr>
                                <td>A5</td>
                                <td>{getStatus(slotStatus['A5'])}</td>
                            </tr>
                            <tr>
                                <td>A6</td>
                                <td>{getStatus(slotStatus['A6'])}</td>
                            </tr>
                            <tr>
                                <td>A7</td>
                                <td>{getStatus(slotStatus['A7'])}</td>
                            </tr>
                            <tr>
                                <td>A8</td>
                                <td>{getStatus(slotStatus['A8'])}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AdminUsers;
