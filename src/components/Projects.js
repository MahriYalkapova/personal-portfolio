import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

    const projects = [
        {
            title: "Fletchly",
            description: "App that helps users locate items or find a place for the item",
            //imgUrl: projImg1,
        },
        {
            title: "Fletchly",
            description: "App that helps users locate items or find a place for the item",
            // imgUrl: projImg1,
        },
        {
            title: "Fletchly",
            description: "App that helps users locate items or find a place for the item",
            // imgUrl: projImg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p></p>
                    <TabContainer id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <NavItem>
                            <NavLink eventKey="first">Tab One</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="second">Tab Two</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="third">Tab Three</NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent>
                        <TabPane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey="second"></TabPane>
                        <TabPane eventKey="third"></TabPane>
                    </TabContent>
                    </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )

}