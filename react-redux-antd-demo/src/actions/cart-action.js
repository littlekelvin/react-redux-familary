
export const Constant = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
}

export const cartAction = {
    add: function (product, quantity, unitCost) {
        return {
            type: Constant.ADD,
            payload: {
                product,
                quantity,
                unitCost
            }
        }
    },

    update: function (product, quantity, unitCost) {
        return {
            type: Constant.UPDATE,
            payload: {
                product,
                quantity,
                unitCost
            }
        }
    },
    
    delete: function (product) {
        return {
            type: Constant.DELETE,
            payload: {
                product
            }
        }
    }
}