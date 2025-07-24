import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.JPG";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Developer", "AI Research Assistant", "Computer Engineer", "SWE Club VP" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Mahri, `}<span className="wrap">{text}</span></h1>
                        <p>I'm Mahriban Yalkapova, a Computer Science and Engineering student at the University of Washington. 
                            I have a strong passion for technology, especially in areas like AI and quantum computing. 
                            My goal is to leverage my skills to contribute to impactful projects and continue growing in the tech industry.</p>
                        <button onClick={() => window.open('/resume.pdf', '_blank')}>
                            My Resume <ArrowRightCircle size={25} /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" 
                        style={{ width: "400px", height: "400px", borderRadius: "50%", objectFit: "cover" }} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}