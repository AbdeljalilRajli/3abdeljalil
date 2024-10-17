import styles from './loader.module.css'

const PreLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fullHand}>
        <div className={styles.Finger}></div>
        <div className={styles.Finger}></div>
        <div className={styles.Finger}></div>
        <div className={styles.Finger}></div>
        <div className={styles.PalmTree}></div>		
        <div className={styles.BigThumb}></div>
      </div>
    </div>
  );
};
export default PreLoader;
