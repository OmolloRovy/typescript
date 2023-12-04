interface Props{
name:string;
email:string;
age:number;
isMarried:boolean
friends: string [];
country:Country;
}

 export enum Country{
Kenya="Kenya",
Tanzania="Tanzania",
Uganda="Uganda",

}

export const Person =(props: Props)=>{
    //const[name,setName] = useState<string>("")
    return(
        <div>
<h1>His name is {props.name}</h1>
    <h1>His age is {props.age}</h1>
    <h1>His email is {props.email}</h1>
<h1> He { props.isMarried ? "is" : "is Not" } married</h1>
        {props.friends.map((friend: string)=>(
            <h1>{friend}</h1>
        ))}
        <h1>{props.country}</h1>
        </div>
    )
    
}