import React, { useEffect, useState } from 'react';
import { Equipment, addEquipment, getAllEquipment, getDocuments, sampleEquipmentData } from '../pouchdbService';
import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const ViewData: React.FC = () => {
    const insertSampleData = async () => {
        for (const equipment of sampleEquipmentData) {
            await addEquipment(equipment);
        }
        console.log('Sample data inserted successfully.');
    };

    // Run the insertion
    insertSampleData();

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
                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "5%"
                                }}
                            >
                                Ser No.
                            </TableCell>

                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "8%"
                                }}
                            >
                                Eqpt Cat
                            </TableCell>

                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "8%"
                                }}
                            >
                                BA No
                            </TableCell>

                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "12%"
                                }}
                            >
                                Make & Type
                            </TableCell>
                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "8%"
                                }}
                            >
                                Unit
                            </TableCell>
                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "8%"
                                }}
                            >
                                Fmn
                            </TableCell>
                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "12%"
                                }}
                            >
                                Maint Wksp
                            </TableCell>
                            <TableCell
                                colSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px"
                                }}
                            >
                                Tyres
                            </TableCell>
                            <TableCell
                                colSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px"
                                }}
                            >
                                Oil Filter
                            </TableCell>
                            <TableCell
                                colSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px"
                                }}
                            >
                                Fuel Filter
                            </TableCell>
                            <TableCell
                                colSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px"
                                }}
                            >
                                Battery
                            </TableCell>
                            <TableCell
                                rowSpan={2}
                                align="center"
                                sx={{
                                    borderBottom: "3px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    padding: "2px",
                                    width: "13%"
                                }}
                            >
                                Additional Notes
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301" }}></TableCell>

                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Instl Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Due Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Instl Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Due Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Instl Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Due Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Instl Date</TableCell>
                            <TableCell align="center"
                                sx={{
                                    borderBottom: "1px solid #940301",
                                    color: "#000053",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    fontFamily: "Poppins",
                                    padding: "12px 2px",
                                    width: "6%%"
                                }}>Due Date</TableCell>
                            <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "600", fontSize: "18px", fontFamily: "Poppins" }}></TableCell>

                        </TableRow>
                        {equipmentData.map((item, index) => (
                            <TableRow key={item._id}>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{index + 1}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.eqptCat}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.baNo}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.makeAndType}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.unit}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.fmn}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.maintWksp}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.tyresInstlDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.tyresDueDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.oilFilterInstlDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.oilFilterDueDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.fuelFilterInstlDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.fuelFilterDueDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.batteryInstlDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.batteryDueDate}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: "1px solid #940301", color: "#000053", fontWeight: "500", fontSize: "14px", fontFamily: "Poppins" }}>{item.additionalNotes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default ViewData;
