import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

const AddData: React.FC = () => {
    const [tyresInstlDate, setTyresInstlDate] = useState<Date | any>(null);
    const [tyresDueDate, setTyresDueDate] = useState<Date | any>(null);
    const [oilFilterInstlDate, setOilFilterInstlDate] = useState<Date | any>(null);
    const [oilFilterDueDate, setOilFilterDueDate] = useState<Date | any>(null);
    const [fuelFilterInstlDate, setFuelFilterInstlDate] = useState<Date | any>(null);
    const [fuelFilterDueDate, setFuelFilterDueDate] = useState<Date | any>(null);
    const [batteryInstlDate, setBatteryInstlDate] = useState<Date | any>(null);
    const [batteryDueDate, setBatteryDueDate] = useState<Date | any>(null);

    return (
        <Stack mt={5}>
            <Typography fontSize={"32px"} fontWeight={"600"} color={"#940301"}>New Entry</Typography>

            <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10} mt={2}>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>BA no:</label>
                    <TextField
                        required
                        sx={{
                            width: '400px',
                            height: '45px',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            fontFamily: "poppins",
                            '& .MuiInputBase-root': {
                                height: '45px',
                                borderRadius: '12px',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000053',
                                    borderWidth: '2px',
                                },
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px',
                                color: '#000053',
                                fontFamily: "poppins",
                            },
                        }}
                    />
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Eqpt Category:</label>
                    <TextField
                        required
                        sx={{
                            width: '400px',
                            height: '45px',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            fontFamily: "poppins",
                            '& .MuiInputBase-root': {
                                height: '45px',
                                borderRadius: '12px',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000053',
                                    borderWidth: '2px',
                                },
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px',
                                color: '#000053',
                                fontFamily: "poppins",
                            },
                        }}
                    />
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Make & Type:</label>
                    <TextField
                        required
                        sx={{
                            width: '400px',
                            height: '45px',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            fontFamily: "poppins",
                            '& .MuiInputBase-root': {
                                height: '45px',
                                borderRadius: '12px',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000053',
                                    borderWidth: '2px',
                                },
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px',
                                color: '#000053',
                                fontFamily: "poppins",
                            },
                        }}
                    />
                </Stack>
            </Stack>

            <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Unit:</label>
                    <TextField
                        required
                        sx={{
                            width: '400px',
                            height: '45px',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            fontFamily: "poppins",
                            '& .MuiInputBase-root': {
                                height: '45px',
                                borderRadius: '12px',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000053',
                                    borderWidth: '2px',
                                },
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px',
                                color: '#000053',
                                fontFamily: "poppins",
                            },
                        }}
                    />
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Fmn:</label>
                    <TextField
                        required
                        sx={{
                            width: '400px',
                            height: '45px',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            fontFamily: "poppins",
                            '& .MuiInputBase-root': {
                                height: '45px',
                                borderRadius: '12px',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000053',
                                    borderWidth: '2px',
                                },
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px',
                                color: '#000053',
                                fontFamily: "poppins",
                            },
                        }}
                    />
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Maint Wkskp:</label>
                    <Select
                        sx={{
                            width: "400px",
                            height: '45px',
                            borderRadius: '12px',
                            fontFamily: "Poppins",
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000053',
                                borderWidth: '2px',
                            },
                            '& .MuiSelect-select': {
                                height: '100%',
                                padding: '0 14px',
                                paddingTop: "16px",
                                color: '#000053',
                                fontFamily: "Poppins",
                            },
                        }}
                    >

                        <MenuItem value="option1">8 CTPS WKSP</MenuItem>
                        <MenuItem value="option2">19 SPEC WKSP</MenuItem>
                        <MenuItem value="option3">39 SPEC WKSP</MenuItem>
                        <MenuItem value="option4">61 AD WKSP</MenuItem>
                        <MenuItem value="option5">88 IWC</MenuItem>

                    </Select>
                </Stack>
            </Stack>

            <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Tyres Instl:</label>

                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={tyresInstlDate}
                            onChange={(newValue) => setTyresInstlDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Tyres Due:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={tyresDueDate}
                            onChange={(newValue) => setTyresDueDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Oil Filter Instl:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={oilFilterInstlDate}
                            onChange={(newValue) => setFuelFilterInstlDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
            </Stack>

            <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Oil Filter Due:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={oilFilterDueDate}
                            onChange={(newValue) => setOilFilterDueDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Fuel Filter Instl:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={fuelFilterInstlDate}
                            onChange={(newValue) => setFuelFilterInstlDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Fuel Filter Due:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                                '& .MuiDateCalendar-root': {
                                    backgroundColor: '#737373',
                                },
                            }}
                            label=""
                            value={fuelFilterDueDate}
                            onChange={(newValue) => setFuelFilterDueDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
            </Stack>

            <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Battery Instl:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={batteryInstlDate}
                            onChange={(newValue) => setBatteryInstlDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Battery Due:</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                        <DatePicker
                            sx={{
                                width: '400px',
                                height: '45px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                fontFamily: "Poppins",
                                '& .MuiInputBase-root': {
                                    height: '45px',
                                    borderRadius: '12px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000053',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    height: '100%',
                                    color: '#000053',
                                    fontFamily: "Poppins",
                                },
                            }}
                            label=""
                            value={batteryDueDate}
                            onChange={(newValue) => setBatteryDueDate(newValue)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                layout: {
                                    sx: {
                                        backgroundColor: "#d9d9d9",
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Stack>

            </Stack>

            <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
                <Stack>
                    <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Additional Notes:</label>
                    <TextField
                        required
                        sx={{
                            width: '90rem',
                            height: '15rem',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            fontFamily: "poppins",
                            '& .MuiInputBase-root': {
                                height: '15rem',
                                borderRadius: '12px',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000053',
                                    borderWidth: '2px',
                                },
                            },
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px',
                                color: '#000053',
                                fontFamily: "poppins",
                            },
                        }}
                    />
                </Stack>

            </Stack>
        </Stack>
    );
};

export default AddData;




















// import { MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs, { Dayjs } from 'dayjs';

// interface FormState {
//     baNo: string;
//     eqptCat: string;
//     makeType: string;
//     unit: string;
//     fmn: string;
//     maintWksp: string;
//     tyresInstlDate: Dayjs | null;
//     tyresDueDate: Dayjs | null;
//     oilFilterInstlDate: Dayjs | null;
//     oilFilterDueDate: Dayjs | null;
//     fuelFilterInstlDate: Dayjs | null;
//     fuelFilterDueDate: Dayjs | null;
//     batteryInstlDate: Dayjs | null;
//     batteryDueDate: Dayjs | null;
//     additionalNotes: string;
// }

// interface Errors {
//     baNo?: string;
//     eqptCat?: string;
//     makeType?: string;
//     unit?: string;
//     fmn?: string;
//     maintWksp?: string;
//     dates?: string;
// }

// const AddData: React.FC = () => {
//     const [form, setForm] = useState<FormState>({
//         baNo: '',
//         eqptCat: '',
//         makeType: '',
//         unit: '',
//         fmn: '',
//         maintWksp: '',
//         tyresInstlDate: null,
//         tyresDueDate: null,
//         oilFilterInstlDate: null,
//         oilFilterDueDate: null,
//         fuelFilterInstlDate: null,
//         fuelFilterDueDate: null,
//         batteryInstlDate: null,
//         batteryDueDate: null,
//         additionalNotes: '',
//     });

//     const [errors, setErrors] = useState<Errors>({});

//     const validate = () => {
//         const newErrors: Errors = {};
//         if (!form.baNo || /[^a-zA-Z0-9]/.test(form.baNo)) {
//             newErrors.baNo = 'BA No must be alphanumeric.';
//         }
//         if (!form.eqptCat || /[^a-zA-Z]/.test(form.eqptCat)) {
//             newErrors.eqptCat = 'Eqpt Cat must contain only letters.';
//         }
//         if (!form.makeType || /[^a-zA-Z0-9]/.test(form.makeType)) {
//             newErrors.makeType = 'Make & Type must be alphanumeric.';
//         }
//         if (!form.unit || /[^a-zA-Z0-9]/.test(form.unit)) {
//             newErrors.unit = 'Unit must be alphanumeric.';
//         }
//         if (!form.fmn || /[^a-zA-Z]/.test(form.fmn)) {
//             newErrors.fmn = 'Fmn must contain only letters.';
//         }
//         if (!form.maintWksp) {
//             newErrors.maintWksp = 'Maint Wksp must be selected.';
//         }
//         if (!form.tyresInstlDate || !form.tyresDueDate || !form.oilFilterInstlDate || !form.oilFilterDueDate || !form.fuelFilterInstlDate || !form.fuelFilterDueDate || !form.batteryInstlDate || !form.batteryDueDate) {
//             newErrors.dates = 'All dates must be selected.';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
//     };

//     const handleSelectChange = (e: SelectChangeEvent<string>) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
//     };

//     const handleDateChange = (name: keyof FormState, newValue: Dayjs | null) => {
//         setForm({ ...form, [name]: newValue });
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (validate()) {
//             // Submit form
//             console.log('Form submitted successfully:', form);
//         }
//     };

//     return (
//         <Stack mt={5} component="form" onSubmit={handleSubmit}>
//             <Typography fontSize={"32px"} fontWeight={"600"} color={"#940301"}>New Entry</Typography>

//             <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10} mt={2}>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>BA no:</label>
//                     <TextField
//                         required
//                         name="baNo"
//                         value={form.baNo}
//                         onChange={handleChange}
//                         error={!!errors.baNo}
//                         helperText={errors.baNo}
//                         sx={textFieldStyles}
//                     />
//                 </Stack>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Eqpt Category:</label>
//                     <TextField
//                         required
//                         name="eqptCat"
//                         value={form.eqptCat}
//                         onChange={handleChange}
//                         error={!!errors.eqptCat}
//                         helperText={errors.eqptCat}
//                         sx={textFieldStyles}
//                     />
//                 </Stack>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Make & Type:</label>
//                     <TextField
//                         required
//                         name="makeType"
//                         value={form.makeType}
//                         onChange={handleChange}
//                         error={!!errors.makeType}
//                         helperText={errors.makeType}
//                         sx={textFieldStyles}
//                     />
//                 </Stack>
//             </Stack>

//             <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Unit:</label>
//                     <TextField
//                         required
//                         name="unit"
//                         value={form.unit}
//                         onChange={handleChange}
//                         error={!!errors.unit}
//                         helperText={errors.unit}
//                         sx={textFieldStyles}
//                     />
//                 </Stack>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Fmn:</label>
//                     <TextField
//                         required
//                         name="fmn"
//                         value={form.fmn}
//                         onChange={handleChange}
//                         error={!!errors.fmn}
//                         helperText={errors.fmn}
//                         sx={textFieldStyles}
//                     />
//                 </Stack>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Maint Wkskp:</label>
//                     <Select
//                         required
//                         name="maintWksp"
//                         value={form.maintWksp}
//                         onChange={handleSelectChange}
//                         error={!!errors.maintWksp}
//                         displayEmpty
//                         sx={selectStyles}
//                     >
//                         <MenuItem value="" disabled>Select</MenuItem>
//                         <MenuItem value="8 CTPS WKSP">8 CTPS WKSP</MenuItem>
//                         <MenuItem value="19 SPEC WKSP">19 SPEC WKSP</MenuItem>
//                         <MenuItem value="39 SPEC WKSP">39 SPEC WKSP</MenuItem>
//                         <MenuItem value="61 AD WKSP">61 AD WKSP</MenuItem>
//                         <MenuItem value="88 IWC">88 IWC</MenuItem>
//                     </Select>
//                     {errors.maintWksp && <Typography color="error">{errors.maintWksp}</Typography>}
//                 </Stack>
//             </Stack>

//             <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
//                 {['tyresInstlDate', 'tyresDueDate', 'oilFilterInstlDate', 'oilFilterDueDate', 'fuelFilterInstlDate', 'fuelFilterDueDate', 'batteryInstlDate', 'batteryDueDate'].map((dateField) => (
//                     <Stack key={dateField}>
//                         <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>
//                             {dateField.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
//                         </label>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                             <DatePicker
//                                 value={form[dateField as keyof FormState] as Dayjs | null}
//                                 onChange={(newValue) => handleDateChange(dateField as keyof FormState, newValue)}
//                                 sx={textFieldStyles}
//                             />
//                         </LocalizationProvider>
//                     </Stack>
//                 ))}
//             </Stack>

//             <Stack direction={"row"} sx={{ gridGap: "7%" }} ml={10}>
//                 <Stack>
//                     <label style={{ fontSize: "18px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Additional Notes:</label>
//                     <TextField
//                         name="additionalNotes"
//                         value={form.additionalNotes}
//                         onChange={handleChange}
//                         multiline
//                         rows={4}
//                         sx={textFieldStyles}
//                     />
//                 </Stack>
//             </Stack>

//             <button type="submit" style={submitButtonStyles}>Submit</button>
//         </Stack>
//     );
// };

// const textFieldStyles = {
//     width: "300px",
//     ".MuiOutlinedInput-root": {
//         borderRadius: "10px",
//         background: "#F2F2F2",
//         boxShadow: "0px 4px 20px 1px rgba(0,0,0,0.1)",
//     },
// };

// const selectStyles = {
//     width: "300px",
//     ".MuiOutlinedInput-root": {
//         borderRadius: "10px",
//         background: "#F2F2F2",
//         boxShadow: "0px 4px 20px 1px rgba(0,0,0,0.1)",
//     },
// };

// const submitButtonStyles = {
//     margin: "30px auto",
//     padding: "10px 30px",
//     borderRadius: "10px",
//     backgroundColor: "#940301",
//     color: "#FFF",
//     fontSize: "18px",
//     fontWeight: "500",
//     border: "none",
//     cursor: "pointer",
// };

// export default AddData;
