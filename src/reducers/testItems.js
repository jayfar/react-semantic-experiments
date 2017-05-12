

const initialState = {
  addedIds: [],
  quantityById: {}
}


const testItems = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return initialState
    default:
       return initialState 
  }
}

export default testItems