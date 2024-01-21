import { Container} from "react-bootstrap";
import { LearnerList } from "./LearnerList";
import './AllCssFile.css';
export function Admin() {
    return (
        <Container className="Admin" fluid style={{minHeight:'800px'}}>
            
                
            <LearnerList></LearnerList>
        </Container>
    );
}