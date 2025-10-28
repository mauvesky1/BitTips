import classes from "./Card.module.css"

function Card (){

    return (
            <div className={classes.Card}>
              <p>  Thumbnail </p>
              <p>  Title </p>
              <p> Like Count </p>
            </div>
    )
}

export default Card;