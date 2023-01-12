
type pName = {
    name: {
        first: string,
        last: string
    }
}
export const Person = (props: pName) => {
return <div>
<h4>{props.name.first} {props.name.last}</h4>
</div>
}
