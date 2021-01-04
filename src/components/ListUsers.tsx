import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IUser } from '../interfaces/user/IUser';
import { ApplicationState } from '../store';
import * as UserActions from "../store/ducks/users/actions";

interface StateProps {
    users: IUser[]
}

interface DispatchProps {
    loadRequest() : void
}

// interface OwnProps {

// }

type Props = StateProps & DispatchProps;

function ListUsers (props: Props) {
    const { users, loadRequest } = props;

    React.useEffect(() => {

        // Cuando se inicia el componente, se llama a la accion loadRequest()
        loadRequest();
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


// Provee datos desde la store al componente

const mapStateToProps = (state : ApplicationState) => (
    {
        users : state.users.data as IUser[]
    }
);

// Provee las acciones al componente

const mapDispatchToProps = (dispatch : Dispatch) => (
    bindActionCreators(UserActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);