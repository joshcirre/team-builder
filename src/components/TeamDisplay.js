import React from 'react';
import TeamMember from './TeamMember';


const TeamDisplay = (props) => {
    return (
        <div className='team-display'>
            {props.team.map((team,i) => {
                return (
                    <TeamMember
                    key={i}
                      name={team.name}
                      role={team.role}
                      email={team.email} />
                )
                
            })}
        </div>
    );
}

export default TeamDisplay;