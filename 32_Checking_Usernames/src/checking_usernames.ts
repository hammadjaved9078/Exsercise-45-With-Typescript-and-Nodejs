let current_users:string[] = ['HaMMad','HaMza','MAjId','ZeEsHan','JOHN'];

let new_user:string[] = ['Bilal','Dawood','JOHN','Jameel','HaMza'];

new_user.forEach(newUsername =>{
    let lowerCase:string = newUsername.toLowerCase();

        if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
            console.log(`The Username ${newUsername} is not available. Please write a differnet username`);
            
        }
        else{
            console.log(`The Username ${newUsername} is available.`);
        }



    
    
})