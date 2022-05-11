import React from 'react'

interface Props { }

const User: React.FunctionComponent<Props> = props => (
    <div>
        <span> User </span>
    </div>
)

User.defaultProps = {}

export default User
