interface DisplayTrackProps {
	currentTrack: {
		id: number;
		title: string;
		author: string;
		recommended: boolean;
		picture: string;
		source: string;
	};
}

export function DisplayTrack({
	currentTrack,
	audioRef,
	setDuration,
	progressBarRef,
}: DisplayTrackProps) {
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	return (
		<audio
			src={currentTrack.source}
			ref={audioRef}
			onLoadedMetadata={onLoadedMetadata}
		></audio>
	);
}
