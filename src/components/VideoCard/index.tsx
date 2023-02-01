import * as React from 'react';
import styles from './index.less';
import Video, { video } from '@/config/temp';
import { VideoRes } from '@/declare/api';

export type Props = {
  videoInfo: VideoRes;
};
const VideoCard: React.FC<Props> = (props) => {
  return (
    <>
      <div className={styles.content}>
        <figure className={styles.videoCard}>
          <div
            className={styles.thumbnail}
            style={{ backgroundImage: `url(${props.videoInfo.thumbnail})` }}
          ></div>
          <figcaption className={styles.details}>
            <p className={styles.title}>{props.videoInfo.title}</p>
            <p className={styles.viewsDate}>
              <span className={styles.views}>{Video.views} views</span>
              <span className={styles.separator}>&bull;</span>
              <span className={styles.date}>{props.videoInfo.createdAt}</span>
            </p>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default VideoCard;
