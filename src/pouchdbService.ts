import PouchDB from 'pouchdb';

const usersDb = new PouchDB('user-info-db');

export const getDB = () => usersDb;

const equipmentDb = new PouchDB('equipmentDb');

// Export the database instance for use in other parts of your application
export const getEquipmentDB = () => equipmentDb;
interface User {
  username: string;
  password: string;
}

export interface Equipment {
  _id: string; // Unique identifier for each document
  serialNo: string;
  eqptCat: string;
  baNo: string;
  makeAndType: string;
  unit: string;
  fmn: string;
  maintWksp: string;
  tyresIssueDate: string;
  tyresDueDate: string;
  oilFilterIssueDate: string;
  oilFilterDueDate: string;
  fuelFilterIssueDate: string;
  fuelFilterDueDate: string;
}


// Function to add a user
export const addUser = async (user: User) => {
  try {
    const { username, password } = user;
    const userDoc = {
      _id:username,
      username,
      type: 'user',
      password, // Note: Store hashed passwords in production
    };
    await usersDb.put(userDoc);
    console.log('User added:', userDoc);
  } catch (err) {
    console.error('Error adding user:', err);
  }
};

// Function to fetch all documents
export const getDocuments = async () => {
  try {
    const result = await usersDb.allDocs({ include_docs: true });
    return result.rows.map((row: { doc: any }) => row.doc);
  } catch (err) {
    console.error('Error getting documents:', err);
    return [];
  }
};

export const findUserByUsername = async (username: string) => {
  try {
    const result = await usersDb.get(username);
    return result;
  } catch (err) {
    console.error('Error finding user:', err);
    return null;
  }
};

export const addEquipment = async (equipment: Equipment) => {
  try {
    await getEquipmentDB().put(equipment);
    console.log('Equipment added:', equipment);
  } catch (err) {
    console.error('Error adding equipment:', err);
  }
};

// Function to fetch all equipment documents
export const getAllEquipment = async () => {
  try {
    const result = await getEquipmentDB().allDocs({ include_docs: true });
    return result.rows.map((row: { doc: Equipment }) => row.doc);
  } catch (err) {
    console.error('Error getting equipment documents:', err);
    return [];
  }
};

// Create an index for querying by equipment category
const createIndexEqptCat = async () => {
  try {
    await getEquipmentDB().createIndex({
      index: { fields: ['eqptCat'] }
    });
    console.log('Index for eqptCat created');
  } catch (err) {
    console.error('Error creating index for eqptCat:', err);
  }
};

// Create an index for querying by BA number
const createIndexBaNo = async () => {
  try {
    await getEquipmentDB().createIndex({
      index: { fields: ['baNo'] }
    });
    console.log('Index for baNo created');
  } catch (err) {
    console.error('Error creating index for baNo:', err);
  }
};

// Create an index for querying by unit
const createIndexUnit = async () => {
  try {
    await getEquipmentDB().createIndex({
      index: { fields: ['unit'] }
    });
    console.log('Index for unit created');
  } catch (err) {
    console.error('Error creating index for unit:', err);
  }
};

// Create an index for querying by FMN
const createIndexFmn = async () => {
  try {
    await getEquipmentDB().createIndex({
      index: { fields: ['fmn'] }
    });
    console.log('Index for fmn created');
  } catch (err) {
    console.error('Error creating index for fmn:', err);
  }
};

// Create an index for querying by make and type
const createIndexMakeAndType = async () => {
  try {
    await getEquipmentDB().createIndex({
      index: { fields: ['makeAndType'] }
    });
    console.log('Index for makeAndType created');
  } catch (err) {
    console.error('Error creating index for makeAndType:', err);
  }
};

// Create an index for querying by maintenance workshop
const createIndexMaintWksp = async () => {
  try {
    await getEquipmentDB().createIndex({
      index: { fields: ['maintWksp'] }
    });
    console.log('Index for maintWksp created');
  } catch (err) {
    console.error('Error creating index for maintWksp:', err);
  }
};

// Run index creation functions
(async () => {
  await createIndexEqptCat();
  await createIndexBaNo();
  await createIndexUnit();
  await createIndexFmn();
  await createIndexMakeAndType();
  await createIndexMaintWksp();
})();


// Function to find equipment by equipment category
export const findByEqptCat = async (eqptCat: string) => {
  try {
    const result = await getEquipmentDB().find({
      selector: { eqptCat: eqptCat }
    });
    return result.docs;
  } catch (err) {
    console.error('Error finding by eqptCat:', err);
    return [];
  }
};

// Function to find equipment by BA number
export const findByBaNo = async (baNo: string) => {
  try {
    const result = await getEquipmentDB().find({
      selector: { baNo: baNo }
    });
    return result.docs;
  } catch (err) {
    console.error('Error finding by baNo:', err);
    return [];
  }
};

// Function to find equipment by unit
export const findByUnit = async (unit: string) => {
  try {
    const result = await getEquipmentDB().find({
      selector: { unit: unit }
    });
    return result.docs;
  } catch (err) {
    console.error('Error finding by unit:', err);
    return [];
  }
};

// Function to find equipment by FMN
export const findByFmn = async (fmn: string) => {
  try {
    const result = await getEquipmentDB().find({
      selector: { fmn: fmn }
    });
    return result.docs;
  } catch (err) {
    console.error('Error finding by fmn:', err);
    return [];
  }
};

// Function to find equipment by make and type
export const findByMakeAndType = async (makeAndType: string) => {
  try {
    const result = await getEquipmentDB().find({
      selector: { makeAndType: makeAndType }
    });
    return result.docs;
  } catch (err) {
    console.error('Error finding by makeAndType:', err);
    return [];
  }
};

// Function to find equipment by maintenance workshop
export const findByMaintWksp = async (maintWksp: string) => {
  try {
    const result = await getEquipmentDB().find({
      selector: { maintWksp: maintWksp }
    });
    return result.docs;
  } catch (err) {
    console.error('Error finding by maintWksp:', err);
    return [];
  }
};
export const sampleEquipmentData = [
  {
    _id: 'eqpt001',
    serialNo: 'SN123456',
    eqptCat: 'Excavator',
    baNo: 'BA001',
    makeAndType: 'Caterpillar 320',
    unit: 'Unit 1',
    fmn: 'FMN123',
    maintWksp: 'Workshop A',
    tyresIssueDate: '2024-01-01',
    tyresDueDate: '2025-01-01',
    oilFilterIssueDate: '2024-01-01',
    oilFilterDueDate: '2025-01-01',
    fuelFilterIssueDate: '2024-01-01',
    fuelFilterDueDate: '2025-01-01'
  },
  {
    _id: 'eqpt002',
    serialNo: 'SN789012',
    eqptCat: 'Bulldozer',
    baNo: 'BA002',
    makeAndType: 'Komatsu D155',
    unit: 'Unit 2',
    fmn: 'FMN456',
    maintWksp: 'Workshop B',
    tyresIssueDate: '2024-02-01',
    tyresDueDate: '2025-02-01',
    oilFilterIssueDate: '2024-02-01',
    oilFilterDueDate: '2025-02-01',
    fuelFilterIssueDate: '2024-02-01',
    fuelFilterDueDate: '2025-02-01'
  },
  {
    _id: 'eqpt003',
    serialNo: 'SN345678',
    eqptCat: 'Loader',
    baNo: 'BA003',
    makeAndType: 'Volvo L220',
    unit: 'Unit 3',
    fmn: 'FMN789',
    maintWksp: 'Workshop C',
    tyresIssueDate: '2024-03-01',
    tyresDueDate: '2025-03-01',
    oilFilterIssueDate: '2024-03-01',
    oilFilterDueDate: '2025-03-01',
    fuelFilterIssueDate: '2024-03-01',
    fuelFilterDueDate: '2025-03-01'
  }
];


// const user1 = {
//   username: '41_EME',
//   password: '0t0?jUhV/'
// };

// const user2 = {
//   username: 'muhammad_ahmed',
//   password: '5a78@#sd!',
// };

// const user3 = {
//   username: 'fourty1_EME',
//   password: 'm@34hjd!l#'
// };

// (async () => {
//   await addUser(user1);
//   await addUser(user2);
//   await addUser(user3);
// })();
