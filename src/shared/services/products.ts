import products from '../mocks/products.json'

export const getAllProducts = ():Promise<any>=>{
    return new Promise(((resolve)=>{
        setTimeout(()=> resolve(products), 1500)
    }))
}
