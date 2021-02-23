import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const withAuthRedirect = (Component) => {

    const WrapperComponent = (props) => {
        if (!props.userId) {
            return <Redirect to = '/login' />
        }

        return <Component />
    }

    const mapStateToProps = (state) => ({
        userId: state.auth.userId
    })

    const withAuthRedirectComponent = connect(mapStateToProps, {})(WrapperComponent);
    return withAuthRedirectComponent;
}

export default withAuthRedirect;