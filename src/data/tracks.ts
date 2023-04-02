import mommasSong from "assets/mp3/mommas.mp3";
import mommasPicture from "assets/images/mommas.jpg";
import amIWrongSong from "assets/mp3/am_i_wrong.mp3";
import amIWrongPicture from "assets/images/am_i_wrong.jpg";
import anywaySong from "assets/mp3/anyway.mp3";
import anywayPicture from "assets/images/anyway.jpg";
import calypsoSong from "assets/mp3/calypso.mp3";
import calypsoPicture from "assets/images/calypso.jpg";
import koloSong from "assets/mp3/kolo.mp3";
import koloPicture from "assets/images/kolo.jpg";
import loadingSong from "assets/mp3/loading.mp3";
import loadingPicture from "assets/images/loading.jpg";
import mlynSong from "assets/mp3/mlyn.mp3";
import mlynPicture from "assets/images/mlyn.jpg";
import usedToLoveSong from "assets/mp3/used_to_love.mp3";
import usedToLovePicture from "assets/images/used_to_love.jpg";
import onceOrTwiceSong from "assets/mp3/once_or_twice.mp3";
import onceOrTwicePicture from "assets/images/once_or_twice.jpg";

type SongSource = string | undefined;

export interface SongInterface {
	id: number;
	title: string;
	author: string;
	recommended: boolean;
	picture: string;
	source: SongSource;
	uid?: string;
	currentTracksList?: SongInterface[];
	isFavourite?: false;
	isHomePage?: boolean;
}

export const tracks: SongInterface[] = [
	{
		id: 0,
		title: "Momma's Love",
		author: "Morray",
		recommended: true,
		picture: mommasPicture,
		source: mommasSong,
	},
	{
		id: 1,
		title: "Am I Wrong (Official Drill)",
		author: "Nico & Vinz",
		recommended: true,
		picture: amIWrongPicture,
		source: amIWrongSong,
	},
	{
		id: 2,
		title: "Anyway",
		author: "Huntar",
		recommended: true,
		picture: anywayPicture,
		source: anywaySong,
	},

	{
		id: 3,
		title: "Reggae & Calypso",
		author: "Russ Millions x Buni x YV",
		recommended: true,
		picture: calypsoPicture,
		source: calypsoSong,
	},
	{
		id: 4,
		title: "Koło Fortuny",
		author: "Wiktor Dyduła",
		recommended: false,
		picture: koloPicture,
		source: koloSong,
	},
	{
		id: 5,
		title: "Loading",
		author: "Central Cee",
		recommended: false,
		picture: loadingPicture,
		source: loadingSong,
	},
	{
		id: 6,
		title: "Chleb",
		author: "Młyn",
		recommended: false,
		picture: mlynPicture,
		source: mlynSong,
	},
	{
		id: 7,
		title: "Used To Love",
		author: "Martin Garrix & Dean Lewis",
		recommended: false,
		picture: usedToLovePicture,
		source: usedToLoveSong,
	},

	{
		id: 8,
		title: "Once Or Twice",
		author: "Diffi & Waima",
		recommended: false,
		picture: onceOrTwicePicture,
		source: onceOrTwiceSong,
	},
];
