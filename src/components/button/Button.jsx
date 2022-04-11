import styles from "./button.module.scss"


const Button = ({text}) => {
    return ( 
        <>
        <button className={styles.button}>{text}</button>


        </>
     );
}
 
export default Button;