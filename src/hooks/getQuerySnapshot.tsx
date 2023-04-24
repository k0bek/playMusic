import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "firebase/config";

const getQuerySnapshot = async (uid: string) => {
	const q = query(collection(db, "favourites"), where("uid", "==", uid));
	const querySnapshot = await getDocs(q);

	return querySnapshot;
};

export default getQuerySnapshot;
