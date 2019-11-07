import React, { useState } from 'react';


const TeamForm = (props) => {

    const [member, updateMember] = useState({
        name: '',
        role: '',
        email: ''
    })
    
    const handleChanges = event=> {
         updateMember({...member, [event.target.name] : event.target.value})
         console.log(member)
     }

     const submitHandler = event => {
         event.preventDefault();
         const newMember = {
             ...member,
            //  id: props.teams.team.members.length
         }
         props.addTeamMember(newMember)
         console.log(newMember)
     }
    return (
        <div className='team-form'>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                id='name' 
                type="text" 
                name='name' 
                placeholder='Name'
                value={member.name}/>

                <input
                onChange={handleChanges} 
                id='role' 
                type="text" 
                name='role' 
                placeholder='Role'
                value={member.role}/>

                <input 
                onChange={handleChanges}
                id='email' 
                type="text" 
                name='email' 
                placeholder='Email'
                value={member.email}/>

                <button className="submit">Submit!</button>
            </form>
            
        </div>
    );
}

export default TeamForm;