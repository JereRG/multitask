"use client";
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const SignInWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 250px; /* Ajusta este valor según lo necesario */
`;

function Page() {
    return (
        <Container>
            <Navbar />
            <SignInWrapper>
                <SignIn />
            </SignInWrapper>
            <Footer />
        </Container>
    );
}

export default Page;
