import React from 'react';
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import api,{detailsEventResource} from "../../Services/Service";
import './DetalhesEventoPage.css'
import Table from "./TableDe/TableDe";
import {
    Input,
    Button,
    Select,
  } from "../../components/FormComponents/FormComponents";

const DetalhesEventoPage = () => {
    return (
        <>
            <MainContent>
                <section>
                    <Container>
                        <div>
                            <Title titleText={"Detalhes Evento"}/>
                            <Table/>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default DetalhesEventoPage;