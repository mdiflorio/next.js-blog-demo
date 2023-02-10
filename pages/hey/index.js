import Layout from "@/components/layout";
import Container from "@/components/Grid/Container";
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";

export default function ContainerTest({}) {

    return (
        <>
            <Container>
                <div className="h-52 w-full bg-black">
                    {[1, 2].map(() => (
                        <Row reverse className="bg-cyan">
                            {[1, 2, 3, 4].map((item) => (
                                <Col cols={3}>
                                    <p className="w-full text-center"> hello {item}</p>
                                </Col>
                            ))}
                        </Row>))}
                </div>
            </Container>
        </>
    );
}
