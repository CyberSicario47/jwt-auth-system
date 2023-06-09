import { useNavigate} from "react-router-dom";

const Unauthorized = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    return (
        <section>
            <h2>Unauthorized</h2>
            <p>You do not have access to the requested page.</p>
            <div>
                <button onClick={goBack}>
                    go Back
                </button>
            </div>
        </section>
    );
};

export default Unauthorized;