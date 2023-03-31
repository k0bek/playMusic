import { SongInterface } from "data/tracks";
import { useSongContext } from "hooks/useSongContext";
import { MutableRefObject } from "react";

interface DisplayTrackProps {
	currentTrack: SongInterface;
	audioRef: MutableRefObject<HTMLAudioElement | null>;
	setDuration: React.Dispatch<React.SetStateAction<number>>;
	progressBarRef: MutableRefObject<HTMLInputElement | null>;
	setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
	goToTheNextSong: () => void;
}

export function DisplayTrack({
	currentTrack,
	audioRef,
	setDuration,
	progressBarRef,
	goToTheNextSong,
}: DisplayTrackProps) {
	const { setSongId } = useSongContext();
	const onLoadedMetadata = () => {
		if (audioRef.current) {
			const seconds = audioRef.current.duration;

			setDuration(seconds);

			if (progressBarRef.current) {
				progressBarRef.current.max = seconds.toString();
			}
		}
	};

	return (
		<audio
			src={currentTrack.source}
			ref={audioRef}
			onLoadedMetadata={onLoadedMetadata}
			onEnded={goToTheNextSong}
		></audio>
	);
}
