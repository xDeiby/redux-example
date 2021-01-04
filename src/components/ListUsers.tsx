import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IUser } from '../interfaces/user/IUser';
import { ApplicationState } from '../store';
import * as UserActions from "../store/ducks/users/actions";

interface StateProps {
    users: IUser[]
}

interface DispatchProps {
    loadRequest() : void,
    deleteUser(user: IUser) : void
}

// interface OwnProps {

// }

type Props = StateProps & DispatchProps;

function ListUsers (props: Props) {
    const { users, loadRequest, deleteUser } = props;

    React.useEffect(() => {

        loadRequest();
        deleteUser(users[0])
    },[]);


    return(
        <div>
            {users.map( (user : IUser) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </div>
    );
  
}


const mapStateToProps = (state : ApplicationState) => (
    {
        users : state.users.data as IUser[]
    }
);

const mapDispatchToProps = (dispatch : Dispatch) => (
    bindActionCreators(UserActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);