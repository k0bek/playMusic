import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { db } from "firebase/config";
import { SongInterface } from "data/tracks";
import { UserDataType } from "types/UserDataType";

interface handleFavouriteSongsProps {
	user: UserDataType | null;
	handleCurrentTrack: (id: number) => void;
	showModal: () => void;
	renderAgain: () => void;
}

export const handleFavouriteSongs = async ({
	user,
	handleCurrentTrack,
	showModal,
	title,
	id,
	author,
	recommended,
	picture,
	source,
	renderAgain,
}: SongInterface & handleFavouriteSongsProps) => {
	if (!user) {
		handleCurrentTrack(id);
		showModal();
		return;
	}

	const reference = collection(db, "favourites");

	const q = query(
		collection(db, "favourites"),
		where("title", "==", title),
		where("uid", "==", user.uid)
	);

	const querySnapshot = await getDocs(q);

	const checkIsFavourite = querySnapshot.docs.filter((doc) => {
		return doc.data().title == title;
	});

	try {
		if (checkIsFavourite.length === 0) {
			await addDoc(reference, {
				id,
				title,
				author,
				recommended,
				picture,
				source,
				isFavourite: true,
				uid: user.uid,
			});
			renderAgain();
		} else {
			querySnapshot.forEach((doc) => {
				deleteDoc(doc.ref);
			});
			renderAgain();
		}
	} catch (error) {
		console.log(error);
	}
};
