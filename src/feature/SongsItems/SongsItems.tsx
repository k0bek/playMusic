import { SongItem } from "./SongItem/SongItem";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { SongInterface } from "data/tracks";
import styles from "./SongsItems.module.scss";

interface SongItemsProps {
  tracks: SongInterface[];
  renderAgain: () => void;
}

export const SongsItems = ({ tracks, renderAgain }: SongItemsProps) => {
  return (
    <Wrapper>
      <div className={styles.items}>
        {tracks.map((track: SongInterface, index) => {
          return (
            <SongItem
              author={track.author}
              title={track.title}
              picture={track.picture}
              recommended={track.recommended}
              id={index}
              source={track.source}
              currentTracksList={tracks}
              isFavourite={track.isFavourite}
              key={index}
              renderAgain={renderAgain}
            />
          );
        })}
        {tracks.length === 0 && <p>No results found.</p>}
      </div>
    </Wrapper>
  );
};
