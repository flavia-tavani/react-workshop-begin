import React from "react";

type ProductProps = {
    value: number,
    data?: string //opzionale
}
//queste due scritture sono equivalenti
interface ProductProps1  {
    value: number
}

//primo modo
const Products2 = (props: ProductProps) =>  <h3>{props.value} products {props.data === null ? "" : props.data}</h3>
//secondo modo, in cui si usa React.FC che avrà anche i children.
export const Products : React.FC<ProductProps> = (props)=>{
    return <div>{props.value} products </div> }
