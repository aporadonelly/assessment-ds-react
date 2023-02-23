import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();

    const [homeroom, setHomeroom] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [noun1, setNoun1] = useState('');
    const [noun2, setNoun2] = useState('');
    const [error, setError] = useState('');


    return (
        form
    )
}
export default LoginForm