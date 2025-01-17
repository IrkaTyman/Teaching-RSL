import { FC } from "react";
import clsx from "clsx";
import { typedMemo } from "../../core/utils/typedMemo";
import TickCircle from '../../assets/images/TickCircle.svg'
import CloseCircle from '../../assets/images/CloseCircle.svg'
import styles from "./TaskContinue.module.css";
import { Button } from "../Button";

type Props = Readonly<{
    continue: () => void;
    isRightAnswer: boolean;
    rightAnswer: string;
}>

/** Task continue panel. */
export const TaskContinue: FC<Props> = typedMemo(function TaskContinue(props){
    return (
        <div className={clsx(styles.taskContinue,  !props.isRightAnswer && styles.taskContinue_incorrectly)}>
            {props.isRightAnswer ?
                <>
                    <div className={styles.taskContinue__result}>
                        <img src={TickCircle} alt="You answered correctly" className={styles.taskContinue__icon} />
                        <p className={clsx(styles.taskContinue__title, styles.taskContinue__textBlock)}>Вы отлично справились!</p> 
                    </div>
                    <Button color="primary" onClick={props.continue}>Далее</Button>
                </> :
                <>
                    <div className={styles.taskContinue__result}>
                        <img src={CloseCircle} alt="You answered incorrectly" className={styles.taskContinue__icon} />
                        <div className={styles.taskContinue__textBlock}>
                            <p className={styles.taskContinue__title}>Правильный ответ:</p> 
                            <p className={styles.taskContinue__description}>{props.rightAnswer}</p> 
                        </div>
                    </div>
                    <Button color="danger" onClick={props.continue}>Далее</Button>
                </>   
        }
        </div>
    )
});
