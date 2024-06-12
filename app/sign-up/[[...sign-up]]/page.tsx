"use client";
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import { SignUp } from "@clerk/nextjs";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const SignUpWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 350px; /* Ajusta este valor según sea necesario */
`;

function Page() {
    return (
        <Container>
            <Navbar />
            <SignUpWrapper>
                <SignUp />
            </SignUpWrapper>
            <Footer />
        </Container>
    );
}

export default Page;
