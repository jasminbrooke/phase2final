import React, { useState } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
 
const PotionCard = ({budget, potion, handleBrew, discontinuePotion, handleModal}) => {
    const {id, image, name, cost, description, inventory, price} = potion
    const [disabled, setDisabled] = useState(false)

    const handleClick = (potion) => {
        if (potion.cost > budget) {
            handleModal("Not enough money to brew!")
        } else {
            setDisabled(true)
            setTimeout(() => { setDisabled(false)}, 3000)
            handleBrew(potion);
        }
    }

    return (
        <Card>
            <Image floated='right' src={image} size='small' wrapped ui={false} />
            <Card.Content>
                <Card.Header> {name}</Card.Header>
                <Card.Meta>
                    <span className='cost'>In Stock: {inventory}</span>
                </Card.Meta>
                <Card.Description>
                    {description} <p>Costs ${cost} to brew. Can be sold for ${price}.</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button id="gooey-button" disabled={disabled} onClick={() => handleClick(potion)}><Icon name='lab' />Brew
                    <>
                        <span className="bubbles">
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                        </span>
                    </>
                </Button>
                {id !== 0  && <Button id="disco-button" onClick={() => discontinuePotion(potion)}>Discontinue</Button>}
            </Card.Content>
        </Card>
    )
}

export default PotionCard