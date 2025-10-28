import Card from "./Card";
import classes from "./CardContainer.module.css"

function CardContainer (){
    const customerArray = [1,2,3,4,5]
    const fillPage = customerArray.map((customer, index) => <Card index={index} />)
    return (
            <div className={classes.CardContainer}>
                {fillPage}
            </div>
    )
}

export default CardContainer;