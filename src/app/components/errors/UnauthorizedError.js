import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const  UnauthorizedError=() =>{
  return (
       <Container
         fluid
         className="d-flex align-items-center justify-content-center vh-100"
         style={{ backgroundColor: "#34CB78" }}
       >
         <Row className="text-center align-items-center">
           <Col xs={12}>
             <div className="mb-5">
               <Image
                 src="/images/error/error401.png"
                 alt="401-Unauthorized"
                 width={800}
                 height={400}
                 className="img-fluid mx-auto d-block mb-5"
               />
             </div>
             <div className="error-content">
               <p
                 className="mb-5"
                 style={{
                   fontSize: "1.75rem",
                   fontWeight: "600",
                   color: "#000",
                   textAlign: "center",
                   lineHeight: "2.5rem",
                   textShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
                 }}
               >
                 🚫 <strong>Unauthorized Access</strong>
                 <br />
                 You do not have permission to view this page.  
                 <br />
                 Please log in with the correct credentials to proceed.
               </p>
               <Button
                 href="/"
                 variant="danger"
                 size="lg"
                 className="px-5 py-3 rounded-pill shadow-sm"
                 style={{
                   fontSize: "1.25rem",
                   fontWeight: "bold",
                   letterSpacing: "0.5px",
                 }}
               >
                 Go to Login
               </Button>
             </div>
           </Col>
         </Row>
       </Container>
  );
}
export default UnauthorizedError;




