import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia, Typography
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button
            size="small"
            type="button"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            size="small"
            type="button"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
