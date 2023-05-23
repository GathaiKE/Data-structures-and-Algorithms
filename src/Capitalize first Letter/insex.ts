const capitalize=(str:string):string=>{
    const rawStr:string[]= str.split(' ')

    const capitalized:string[]=rawStr.map(str => {
        const first:string=str.charAt(0).toUpperCase()
        const rest:string=str.slice(1).toLowerCase()
        const fullReverse:string=first+rest
        return fullReverse
    });

    return capitalized.join(' ')
}


console.log(capitalize('top of the table'));

