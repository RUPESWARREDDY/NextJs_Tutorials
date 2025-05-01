
export const Card=({children}:{children:React.ReactNode})=>{
const cardStyle={
    padding:"100px",
    margin:"10px",
    boxShadow:"0px 4px 8px gray",
    border:"1px solid black",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}
return(
    <div style={cardStyle}>{children}</div>
)
}