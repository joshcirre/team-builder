import React from 'react';




function TeamForm (props) {

const teamMembers = props.teamMembers


    return (
        <form onSubmit={event =>props.handleSubmit(event)}>
            <label>Name
                <input 
                    type="text" 
                    name ="name" 
                    placeholder="Your Name Here"
                    value={props.teamMembers.name}
                    onChange={(event)=> props.handleUpdate(event)}></input>
            </label>
            <label>Email
                <input type="email" name="email" value={props.teamMembers.email} placeholder="Enter Your Email" onChange={(event)=> props.handleUpdate(event)}></input>
            </label>
            <label>Role
                <select type="select" value={props.teamMembers.value} name="role" onChange={(event)=> props.handleUpdate(event)}>
                    <option value="Front-End Engineer">Front-End Engineer</option>
                    <option value="Back-End Engineer">Back-End Engineer</option>
                    <option value="Designer">Designer</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );




}


export default TeamForm;