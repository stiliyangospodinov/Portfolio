import { doc, getDoc, collection, getDocs,query,where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const getDocumentData = async (collection, document) => {
  const docRef = doc(db, collection, document);
  const docSnap = await getDoc(docRef);
  
  return docSnap.data(); 
};
const getCollectionData = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  
  return querySnapshot.docs.map(doc => doc.data());
};
const getDocumentByName = async (collectionName, projectName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("name", "==", projectName));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.empty ? null : querySnapshot.docs[0].data();
};

export const getTechnicalSkills = () => getDocumentData("Skills", "Technical skills");

export const getSoftSkills = () => getDocumentData("Skills", "Soft skills");

export const getAllProjects = () => getCollectionData("Projects");

export const getProjectByName = (id) => getDocumentByName("Projects", id);