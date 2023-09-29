const Quantity = ({ items }) => {
    let itemsQ = 0
    for(const x of items){
      const data = {
        quantity: x.quantity
      }
      itemsQ += data.quantity
    }
    return (
      <p>
        {itemsQ}
      </p>
    )
}

export default Quantity