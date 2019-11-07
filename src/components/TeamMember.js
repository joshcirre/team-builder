import React from 'react';

const TeamMember = (props) => {
    return (
        <div className='team-member'>
            <h4 className="name">{props.name}</h4>
            <h5 className="role">{props.role}</h5>
            <h6 className="email">{props.email}</h6>
            <button className="edit">Edit</button>
        </div>
    );
}

export default TeamMember;