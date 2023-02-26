
import loaderImg from "../assets/loader.gif";
import Image from "next/image";

const Loader = () => {
    const styles = {
        wrapper: {
            position: "absolute",
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9
        },
        loader: {
            position: 'fixed',
            left: '50%',
            top: '50%',
            transform: 'translate(-50 %, -50 %)',
            zIndex: 999
        }
    };
    return (
        <div styles={styles.wrapper}>
            <div styles={styles.loader}>
                <Image src={loaderImg} alt="Loading..."  />
            </div>
        </div>
    );
};

export default Loader;
