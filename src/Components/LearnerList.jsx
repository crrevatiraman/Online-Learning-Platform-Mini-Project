import { Button, Container, Table, Modal ,Row} from "react-bootstrap";

import { useEffect, useState } from "react";
import { deleteStudent, fetchStudents } from "../Services/ELearningServices";
import { useNavigate } from "react-router-dom";

export function LearnerList() {

    const [students, setStudents] = useState([]);

    const navigate = useNavigate();




    //---------------------------------------------to open the delete confirmation modal-------------------------------------------------------------------

    const [showDialog, setShowDialog] = useState(false);

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }


    //-----------------------------------to delete entry of learner onclicking delete-----------------------------------------------------------------------

    const [selectedPhone, setSelectedPhone] = useState();

    const handleDeleteClick = async () => {

        try {
            const response = await deleteStudent(selectedPhone);
            console.log(response);
            await populateStudentState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    //-----------------------------------to fetch learner from database-----------------------------------------------------------------------------

    async function populateStudentState() {
        try {
            const data = await fetchStudents();
            console.log(data.student);
            setStudents(data.students);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateStudentState();
    }, []);



    return (
        <Container className="LearnerList" style={{padding:'100px',color:'white'}}>
            <Row><h1>Learner List</h1></Row>
            {students.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                            <th>Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Admin    Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((s) => {
                                return (
                                    <tr>
                                        <td>{s.Name}</td>
                                        <td>{s.Username}</td>
                                        <td>{s.Password}</td>
                                        <td>{s.Gender}</td>
                                        <td>{s.Phone}</td>
                                        <td>{s.Email}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedPhone(s.Phone);
                                            }}>Delete</Button>
                                            <Button variant="primary" onClick={() => {
                                               navigate(`/edit/${s.Phone}`);
                                            }}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete Learner with Phone Number {selectedPhone}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        handleDeleteClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}