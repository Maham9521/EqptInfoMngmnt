import React, { useEffect, useState } from 'react';
import { Equipment, addEquipment, getAllEquipment, getDocuments, sampleEquipmentData } from '../pouchdbService';
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const ViewData: React.FC = () => {
    // const insertSampleData = async () => {
    //     for (const equipment of sampleEquipmentData) {
    //         await addEquipment(equipment);
    //     }
    //     console.log('Sample data inserted successfully.');
    // };

    // // Run the insertion
    // insertSampleData();

    const [equipmentData, setEquipmentData] = useState<Equipment[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllEquipment();
            setEquipmentData(data);
        };

        fetchData();
    }, []);

    return (
        <Stack mt={5}>
            <Typography fontSize={"32px"} fontWeight={"600"} color={"#940301"}>Equipment Data</Typography>
            <TableContainer sx={{ marginTop: "50px" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Serial No</TableCell>
                            <TableCell>Eqpt Cat</TableCell>
                            <TableCell>BA No</TableCell>
                            <TableCell>Make & Type</TableCell>
                            <TableCell>Unit</TableCell>
                            <TableCell>Fmn</TableCell>
                            <TableCell>Maint Wksp</TableCell>
                            <TableCell>Tyres Issue Date</TableCell>
                            <TableCell>Tyres Due Date</TableCell>
                            <TableCell>Oil Filter Issue Date</TableCell>
                            <TableCell>Oil Filter Due Date</TableCell>
                            <TableCell>Fuel Filter Issue Date</TableCell>
                            <TableCell>Fuel Filter Due Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {equipmentData.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.serialNo}</TableCell>
                                <TableCell>{item.eqptCat}</TableCell>
                                <TableCell>{item.baNo}</TableCell>
                                <TableCell>{item.makeAndType}</TableCell>
                                <TableCell>{item.unit}</TableCell>
                                <TableCell>{item.fmn}</TableCell>
                                <TableCell>{item.maintWksp}</TableCell>
                                <TableCell>{item.tyresIssueDate}</TableCell>
                                <TableCell>{item.tyresDueDate}</TableCell>
                                <TableCell>{item.oilFilterIssueDate}</TableCell>
                                <TableCell>{item.oilFilterDueDate}</TableCell>
                                <TableCell>{item.fuelFilterIssueDate}</TableCell>
                                <TableCell>{item.fuelFilterDueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default ViewData;
